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
