const express=require("express"); //引入expres
const app=express();             //实例化一个应用
const mongoose=require("mongoose"); //引入mongose
const users=require("./routes/api/users");//引入users.js
const bodyParser=require("body-parser");//引入body-parser
const passport = require("passport");//引入passport
//使用body-parser中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db=require("./config/keys").mongoURI;//接受keys.js抛出的mongoURI

//passport初始化
app.use(passport.initialize());

//引入passport具体内容数据分离 传入passport
require("./config/passport")(passport);

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true })//连接mongodb
.then(()=>console.log("mongodb connect"))
.catch(err=>console.log(err))

app.use("/api/users",users);//使用users中的api

app.get("/",(req,res)=>{       //设置一个路由

res.send("hello word")
})
const port=process.env.port||5000;//设置端口

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})