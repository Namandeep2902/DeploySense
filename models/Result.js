const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema({
    jobId: { type: String, required: true, unique: true },
    riskScore: { type: Number },
    riskLevel: { type: String },
    confidence: { type: Number },
    patterns: [{ type: String }],
    reasons: [{ type: String }],
    suggestions: [{ type: String }],
    latency: { type: Number },
    dbLoad: { type: Number },
    language: { type: String },
    analysis: { type: Object },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Result", ResultSchema);
