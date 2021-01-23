const express=require("express");
const router=express.Router();
const User=require("../../models/User");//引入数据库结构
const JSSM4 = require("jssm4");//引入jssm4
const jwt = require('jsonwebtoken');//引入jwt
const keys = require("../../config/keys"); //引入加密名字
const passport = require("passport"); //引入passport中间件*
var sKey = "qawsedrftgyhujik";
var sm4 = new JSSM4(sKey);
/*
register
实现注册功能
$route POST api/users/register
@desc 返回的请求json数据
@access public
*/
router.post("/register",(req,res)=>
{
    console.log(req.body)
    User.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
            return res.status(400).json("邮箱被注册");
        }
        else{
            const newUser=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                phone:req.body.phone,
            })
            var endata = sm4.encryptData_ECB(newUser.password);//加密
            newUser.password=endata;
            var dedata = sm4.decryptData_ECB(endata);//解密
            newUser.save().then(user=>res.json(user))
        }
    })
})
router.post("/login",(req,res)=>{
    const email =req.body.email;
    const password=req.body.password;
    User.findOne({email})
        .then(user=>{
    if(!user){
        return res.status(404).json("用户不存在!");
    }
    //密码匹配
    var dedata = sm4.decryptData_ECB(user.password);
        if(password==dedata){
            const rule = {
                id:user.id,
                name:user.name
            };
            //用id和name来做一个token
            // jwt.sign("规则", "加密名字", "过期时间", "箭头函数");
            jwt.sign(rule, keys.secretOrkey, {expiresIn: 3600}, (err, token) => {
                if (err) {
                    throw err;
                };
                res.json({
                    success: true,
                    token: "Bearer " + token
                    //返回一个固定值+taken规则的的token
                });
            })
            //res.json({msg:"success"});
        }else{
            return res.status(400).json("密码错误")
        }
    })
})

//$route GET api/users/current
//@desc return current user
//@access private
//验证token得到用户信息
//使用passport-jwt验证token
router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
    res.json({id:req.user.id,
        email:req.user.email,
        name:req.user.name,}); 
})



module.exports=router;