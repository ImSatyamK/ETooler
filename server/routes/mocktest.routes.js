const router = require('express').Router();
const controller = require('../controllers/mocktest.controller');

router.post('/upload', controller.uploadTest);
router.get('/:id', controller.getTest);
router.post('/:id/submit', controller.submitTest);

module.exports = router;
