const moment = require('moment');
const StepLog = require('../models/stepLog');

exports.getStepLog = async (req, res) => {
  try {
    const date = req.query.date;
    const stepLogs = await StepLog.find({ date: date });

    let stepLog = {};
    if (stepLogs.length) {
      stepLog = stepLogs[0];
    };

    res.status(200).json(stepLog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

exports.addStepLog = async (req, res) => {
  StepLog.findOneAndUpdate(
    { date: req.body.date },
    { stepCount: req.body.stepCount },
    { upsert: true, new: true },
    function (err, doc) {
      if (err) {
        return res.status(400).json({ message: err.message });
      } else {
        return res.send(doc);
      }
    }
  );
}

exports.getPastWeek = async (req, res) => {
  try {
    const dates = [];
    const today = moment();
    let startDate = moment(req.query.weekOf);

    while (startDate.diff(today) < 0) {
      dates.push(startDate.format('YYYY-MM-DD'));
      startDate.add(1, 'days');
    }

    const stepLogs = await StepLog.find({ 'date': { $in: dates } });

    res.status(200).json(stepLogs);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}
