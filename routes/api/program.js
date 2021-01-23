const express=require("express");
const router=express.Router();
const Program=require("../../models/Program");//引入数据库结构
const JSSM4 = require("jssm4");//引入jssm4
const jwt = require('jsonwebtoken');//引入jwt
const keys = require("../../config/keys"); //引入加密名字
const passport = require("passport"); //引入passport中间件*

/*
展示项目
$route get api/programs/programlist
@desc 返回的请求json数据
@access public
*/
router.get("/programlist",passport.authenticate("jwt",{session:false}),(req,res)=>{
    Program.find()
    .then(program => {
        if(!program){
            return res.status(404).json('没有任何内容');
        }

        res.json(program);
    })
    .catch(err => res.status(404).json(err));
})

router.post("/AddProgram",passport.authenticate("jwt",{session:false}),(req,res)=>{
    const programFields = {};
    
    if(req.body.name) programFields.name = req.body.name;
    if(req.body.xml) programFields.xml = req.body.xml;
    if(req.body.user) programFields.user = req.body.user;
    programFields.type="未发布";
    new Program(programFields).save().then(program =>{
        res.json(program);
    });
})
router.post("/DeleteProgram",passport.authenticate("jwt",{session:false}),(req,res)=>{

})
module.exports=router;