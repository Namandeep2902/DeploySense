const Analysis = require("../models/Analysis");
const Result = require("../models/Result");

const analyzeInput = require("../modules/inputAnalyzer");
const detectPatterns = require("../modules/patternDetector");
const calculateRisk = require("../modules/riskEngine");
const generateSuggestions = require("../modules/suggestionEngine");
const simulateImpact = require("../modules/simulator");

const submitAnalysis = async (req, res) => {
    try {
        const { code, users, language } = req.body;
        if (!code || code.trim().length < 5) {
            return res.status(400).json({ error: "Please provide valid code (minimum 5 characters)" });
        }

        const analysis = analyzeInput(code);

        if (!analysis.isValid) {
            return res.status(400).json({ error: "Invalid code input" });
        }

        const patterns = detectPatterns(analysis);
        const risk = calculateRisk(patterns);
        const suggestions = generateSuggestions(patterns);
        const simulation = simulateImpact(analysis, users || 100);

        // Save job to DB (as done immediately)
        const job = await Analysis.create({
            code,
            users: users || 100,
            language: analysis.type,
            status: "done"
        });

        const jobId = job._id.toString();

        const resultData = {
            jobId,
            riskScore: risk.score,
            riskLevel: risk.riskLevel,
            confidence: risk.confidence,
            patterns,
            reasons: risk.reasons,
            suggestions,
            latency: simulation.latency,
            dbLoad: simulation.dbLoad,
            language: analysis.type,
            analysis
        };

        // Save result
        await Result.create(resultData);

        return res.status(200).json({
            success: true,
            jobId,
            status: "done",
            data: resultData
        });
    } catch (err) {
        console.error("submitAnalysis error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const getResult = async (req, res) => {
    try {
        const { jobId } = req.params;
        const result = await Result.findOne({ jobId });
        if (!result) {
            return res.status(404).json({ error: "Result not found" });
        }
        return res.json({
            status: "done",
            jobId,
            data: result
        });
    } catch (err) {
        console.error("getResult error:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const getHistory = async (req, res) => {
    try {
        const jobs = await Analysis.find({ status: "done" })
            .sort({ createdAt: -1 })
            .limit(20)
            .select("_id language users createdAt status");
        return res.json({ success: true, history: jobs });
    } catch (err) {
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { submitAnalysis, getResult, getHistory };
