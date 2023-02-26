const mongoose = require('mongoose');

//  Your code goes here

const Schema = mongoose.Schema;
const mariochar = new Schema({ 
    name :  { type: String,required : true},
    location : { type: String,required : true},
    likes:{ type: Number,required : true},
    description:{type: String,required : true},
    postimage:{},
    date:{type: Date, default: Date.now}
})

const marioModel = mongoose.model("mariochar", mariochar)






module.exports = marioModel;