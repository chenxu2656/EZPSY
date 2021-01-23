const mongoose =require("mongoose");//引入mongoose
const Schema =mongoose.Schema;
const ProgramSchema=new Schema({
    name :{
        type:String,
        required:true
    },
    xml:{
        type:String,
        required:true
    },
    user:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    time:{
        type:Date,
        default:Date.now
    }
})
//实例化抛出Schema
module.exports=Program=mongoose.model("program",ProgramSchema);

