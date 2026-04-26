const express = require("express");
const router = express.Router();
const analyzeInput = require("../modules/inputAnalyzer");
const detectPatterns = require("../modules/patternDetector");
const calculateRisk = require("../modules/riskEngine");
const generateSuggestions = require("../modules/suggestionEngine");
const simulateImpact = require("../modules/simulator");
router.post("/", (req, res) => {
    const { code, users } = req.body;
    const analysis = analyzeInput(code);
    if (!analysis.isValid) {
        return res.status(400).json({ error: "Invalid or insufficient code input ❌" });
    }
    const patterns = detectPatterns(analysis);
    const risk = calculateRisk(patterns);
    const suggestions = generateSuggestions(patterns);
    const simulation = simulateImpact(analysis, users || 100);
    res.json({
        status: "success",
        data: { analysis, patterns, risk, suggestions, simulation }
    });
});

module.exports = router;
