const mongoose = require("mongoose");

const AnalysisSchema = new mongoose.Schema({
    code: { type: String, required: true },
    language: { type: String, default: "Unknown" },
    users: { type: Number, default: 100 },
    status: {
        type: String,
        enum: ["pending", "processing", "done", "failed"],
        default: "pending"
    },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Analysis", AnalysisSchema);
