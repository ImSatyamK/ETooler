const tests = {}; // in-memory for now

exports.saveTest = (json) => {
    const id = Date.now().toString();
    tests[id] = json;
    return id;
};

exports.getTest = (id) => tests[id];

exports.evaluate = (id, given) => {
    const test = tests[id];
    if (!test) return null;

    let score = 0;
    test.answers.forEach((ans, i) => {
        if (given[i] === ans) score++;
    });

    return {
        score,
        total: test.answers.length
    };
};
