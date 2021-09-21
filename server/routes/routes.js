const express = require('express');

const { getStepLog, addStepLog } = require('../controllers/tasks');

const router = express.Router();

router.get('/stepsLog', getStepLog);
router.post('/createLog', addStepLog);

module.exports = router;
