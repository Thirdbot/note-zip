import mongoose from 'mongoose';
//create a schema

//model based on schema

const noteScheme = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

const Note  = mongoose.model("Note",noteScheme);

export default Note;