const mongoose = require("mongoose");
const { Schema } = mongoose;

const hiveFiveSchema = new Schema({
  from: {
    type: String,
    trim: true
  },
  to: {
    type: String,
    trim: true
  }
});

const HiveFive = mongoose.model("HiveFive", hiveFiveSchema);

module.exports = { HiveFive };
