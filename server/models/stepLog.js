const mongoose = require('mongoose');

const stepLogSchema = mongoose.Schema({
  date: String,
  stepCount: Number,
});

const StepLog = mongoose.model('StepLog', stepLogSchema);

module.exports = StepLog;
