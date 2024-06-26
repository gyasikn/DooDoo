const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TYPES = require("./list-types");
const moment = require("moment");
const Task = require('./task')

const ListSchema = new Schema({
  tasklist      : [ Task.schema ],
  title         : { type: String, required: true },
  _creator      : { type: Schema.Types.ObjectId, ref: "User", required: true }
});






ListSchema.virtual('timeRemaining').get(function () {
  let remaining = moment(this.deadline).fromNow(true).split(' ');
  let [days, unit] = remaining;
  return { days, unit };
});

ListSchema.virtual("inputFormattedDate").get(function() {
  return moment(this.deadline).format("YYYY-MM-DD");
});

ListSchema.methods.belongsTo = function(user) {
  // return this._creator.equals(user.id);
};

module.exports = mongoose.model("List", ListSchema);
