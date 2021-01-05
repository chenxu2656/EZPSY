const mongoose =require("mongoose");//引入mongoose
const Schema =mongoose.Schema;
const UserSchema=new Schema({
    name :{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
//实例化抛出Schema
module.exports=User=mongoose.model("users",UserSchema);

