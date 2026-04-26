function calculateRisk(patterns) {
    let score = 0;
    let reasons = [];

    if (patterns.includes("loop_api")) {
        score += 5;
        reasons.push("API call inside loop → high latency");
    }

    if (patterns.includes("multiple_join")) {
        score += 4;
        reasons.push("Multiple JOIN queries → high DB load");
    }

    if (patterns.includes("no_error_handling")) {
        score += 3;
        reasons.push("No error handling → high failure risk");
    }
    if (patterns.includes("blocking_loop")) {
        score += 6;
        reasons.push("Blocking loop detected → CPU freeze risk");
    }

    if (patterns.includes("db_connection_per_request")) {
        score += 5;
        reasons.push("Database connection inside request → high overhead");
    }

    if (patterns.includes("heavy_processing")) {
        score += 2;
        reasons.push("Unnecessary data processing → performance overhead");
    }

    let riskLevel = "LOW";

    if (score >= 7) {
        riskLevel = "HIGH";
    } else if (score >= 5) {
        riskLevel = "MEDIUM";
    }

    let confidence = Math.min(100, score * 10);

    return {
        score,
        riskLevel,
        reasons,
        confidence
    };
}

module.exports = calculateRisk;