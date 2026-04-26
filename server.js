require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────
app.use(cors());
app.use(express.json({ limit: "2mb" }));

// ─── MongoDB Connection ───────────────────────────────────────
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/pdip")
    .then(() => console.log("🟢 MongoDB connected"))
    .catch(err => console.error("🔴 MongoDB error:", err));


// ─── Routes ──────────────────────────────────────────────────
const analyzeRoute = require("./routes/analyze");
app.use("/api/analyze", analyzeRoute);


app.use("/analyze", require("./routes/legacyAnalyze"));


app.get("/", (req, res) => {
    res.json({ status: "ok", message: "PDIP Backend is running 🚀", version: "2.0.0" });
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API: POST /api/analyze  |  GET /api/analyze/result/:jobId`);
});