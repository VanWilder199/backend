import {model, Schema} from "mongoose";

const  Role = new Schema({
  value: {type: String, unique: true, default: "AMIN"}
})


module.exports = model('Role', Role)
