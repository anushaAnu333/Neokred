const mongoose = require('mongoose');


const trackingSchema = new mongoose.Schema({
     productAt: { type: String, required: true },
     date: { type: String, required: true },
     time: { type: String, required: true }
 });


const profile = new mongoose.Schema({
     product:{type:String,require:true},
     price:{type:String,require:true},
     // plot_embedding_hf:{type:Array,require:false},
     tracking:[trackingSchema]
     
});
const profileModel = mongoose.model("profile", profile)
module.exports = {profileModel}


