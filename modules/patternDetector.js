function detectPatterns(analysis) {
    let patterns = [];

    if (analysis.insideLoop && analysis.apiCalls > 0) {
        patterns.push("loop_api");
    }

    if (analysis.dbQueries > 1) {
        patterns.push("multiple_join");
    }

    if (!analysis.hasTryCatch) {
        patterns.push("no_error_handling");
    }
    if (analysis.hasBlockingLoop) {
        patterns.push("blocking_loop");
    }

    if (analysis.dbConnections > 0) {
        patterns.push("db_connection_per_request");
    }

    if (analysis.hasHeavyProcessing) {
        patterns.push("heavy_processing");
    }

    return patterns;
}

module.exports = detectPatterns;