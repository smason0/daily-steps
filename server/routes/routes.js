const express = require('express');

const { getStepLog, addStepLog, getPastWeek } = require('../controllers/tasks');

const router = express.Router();

router.get('/stepsLog', getStepLog);
router.post('/createLog', addStepLog);
router.get('/pastWeek', getPastWeek);

module.exports = router;
