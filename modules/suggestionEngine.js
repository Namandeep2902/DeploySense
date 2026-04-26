function generateSuggestions(patterns) {
    let suggestions = [];
    if (patterns.includes("loop_api")) {
        suggestions.push("Move API call outside loop or batch requests");
    }
    if (patterns.includes("multiple_join")) {
        suggestions.push("Optimize DB queries using indexing");
    }
    if (patterns.includes("no_error_handling")) {
        suggestions.push("Add proper try-catch error handling");
    }
    if (patterns.includes("blocking_loop")) {
        suggestions.push("Avoid blocking loops; use async timers like setTimeout or non-blocking logic");
    }
    if (patterns.includes("db_connection_per_request")) {
        suggestions.push("Establish DB connection once at server startup instead of per request");
    }
    if (patterns.includes("heavy_processing")) {
        suggestions.push("Avoid redundant JSON parsing; process data efficiently");
    }
    return suggestions;
}
module.exports = generateSuggestions;