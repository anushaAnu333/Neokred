const mongoose = require('mongoose');
const signinSchema = new mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true}
})

const userModel = mongoose.model("signin", signinSchema)
module.exports = {userModel}