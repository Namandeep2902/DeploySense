function simulateImpact(analysis, users) {
    let latency = 0;
    let dbLoad = 0;
    latency += analysis.apiCalls * users;
    if (analysis.hasBlockingLoop) {
        latency += 200 * users;
    }
    if (analysis.hasHeavyProcessing) {
        latency += 50 * users;
    }
    dbLoad += analysis.dbQueries * users;
    if (analysis.dbConnections > 0) {
        dbLoad += analysis.dbConnections * users * 2;
    }
    return {
        latency,
        dbLoad
    };
}
module.exports = simulateImpact;