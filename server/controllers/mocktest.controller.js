const service = require('../services/mocktest.service');

exports.uploadTest = (req, res) => {
    try {
        const id = service.saveTest(req.body);
        res.json({ success: true, id });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.getTest = (req, res) => {
    const test = service.getTest(req.params.id);
    if (!test) return res.status(404).json({ error: "Test not found" });
    res.json(test);
};

exports.submitTest = (req, res) => {
    const result = service.evaluate(req.params.id, req.body.answers);
    res.json(result);
};
