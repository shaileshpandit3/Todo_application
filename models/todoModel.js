const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:false
    },
    completed:{
        type:Boolean,
        default:false
    }
},{timestamps:true, versionKey:false})

module.exports= mongoose.model('Todo',todoSchema)