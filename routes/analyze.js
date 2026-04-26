const express = require("express");
const router = express.Router();
const { submitAnalysis, getResult, getHistory } = require("../controllers/analysisController");
router.post("/", submitAnalysis);
router.get("/history", getHistory);
router.get("/result/:jobId", getResult);
module.exports = router;