function analyzeInput(code) {
    if (!code || typeof code !== "string" || code.trim().length < 5) {
        return { isValid: false };
    }
    let loops = 0;
    let apiCalls = 0;
    let dbQueries = 0;
    let insideLoop = false;
    const loopRegex = /(for|while)/g;
    const loopMatches = code.match(loopRegex);
    loops = loopMatches ? loopMatches.length : 0;
    const apiRegex = /\b(fetch|axios|http)\b/g;
    const apiMatches = code.match(apiRegex);
    apiCalls = apiMatches ? apiMatches.length : 0;
    const tryCatchRegex = /(try|catch)/g;
    const tryCatchMatches = code.match(tryCatchRegex);
    const hasTryCatch = tryCatchMatches ? true : false;
    const dbRegex = /(SELECT|JOIN)/gi;
    const dbMatches = code.match(dbRegex);
    dbQueries = dbMatches ? dbMatches.length : 0;
    if (loops > 0 && apiCalls > 0) {
        insideLoop = true;
    }
    const blockingLoopRegex = /while\s*\(.*Date\.now.*\)/;
    const hasBlockingLoop = blockingLoopRegex.test(code);
    const dbConnectRegex = /mongoose\.connect/;
    const dbConnectMatches = code.match(dbConnectRegex);
    const dbConnections = dbConnectMatches ? dbConnectMatches.length : 0;
    const heavyProcessingRegex = /JSON\.parse\s*\(\s*JSON\.stringify/;
    const hasHeavyProcessing = heavyProcessingRegex.test(code);
    let type = "Unknown";
    if (code.includes("SELECT") || code.includes("JOIN")) {
        type = "SQL";
    } else if (code.includes("function") || code.includes("fetch") || code.includes("express")) {
        type = "JavaScript";
    }
    return {
        loops,
        apiCalls,
        hasTryCatch,
        dbQueries,
        insideLoop,
        hasBlockingLoop,
        dbConnections,
        hasHeavyProcessing,
        type,
        isValid: true
    };
}
module.exports = analyzeInput;