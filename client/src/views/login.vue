<template>
    <div class="login">
<el-container>
<el-header style="padding:0">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">        
        <a href="/register"><el-button style="background:#545c64;color:rgb(255, 255, 255);margin-top:10px;float:right;margin-right:15px">sign up</el-button></a>
        <el-menu-item index="5" style="float:right"><a href="">产品中心</a></el-menu-item>
        <el-submenu index="4" style="float:right">
            <template slot="title" >教程中心</template>
            <el-menu-item index="5-1">视频教程</el-menu-item>
            <el-menu-item index="5-2">用户手册</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" style="float:right">问卷平台</el-menu-item>
        <el-menu-item index="2" style="float:right">编程平台</el-menu-item>
        <a href="/index"><el-menu-item index="1" style="float:right">首页</el-menu-item></a>
        <el-menu-item index="6"><a href="/index">AHMU-CEL-LAB</a><a href="/index"> EZPSY</a></el-menu-item>
        </el-menu>
</el-header>
<el-main>
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">ezpsy登录</span>
                <el-form :model="loginUser"  :rules="rules" ref="loginForm" label-width="100px" class="loginForm">
                    
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="loginUser.email"  placeholder="请输入用邮箱"></el-input>
                    </el-form-item>

                    <el-form-item  label="密码" prop="password">
                        <el-input type="password" v-model="loginUser.password"  placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                    <div class="tiparea">
                    <p>还没有账号？现在<router-link to="/register">注册</router-link></p>
                    </div>
                </el-form>
            </div>
            
        </section>
        </el-main>
        </el-container>
    </div>
</template>
<script>
 import jwt_decode from 'jwt-decode';
export default {
    name:"login",
    components:{},
    data(){

        return{
            activeIndex: '1',
            loginUser:{
            email:'',
            password:''
            },
            rules:{
                email:[
                    {
                        type: "email" ,required: true, message:'邮箱格式不正确', trigger: 'blur'
                        }
                        ],
                password:[
                    {
                        required: true, message:'密码不能为空', trigger: 'blur'
                    },
                    {
                        min:6,max:30,message:"长度在6到30之间",trigger:'blur'
                    }
                ]
            }
            
        };
       
    },

    methods: {
                handleSelect(key, keyPath) {
                    console.log(key, keyPath);
                },
                submitForm(formName) {
                    this.$refs[formName].validate(valid =>{
                        if(valid){
                            this.$axios.post("/api/users/login",this.loginUser)
                            .then(res=>{
                                //token
                                const {token}=res.data;
                                //存储到ls中
                                localStorage.setItem('eleToken',token); 
                                //解析token
                                const decoded=jwt_decode(token);
                                console.log(decoded);

                                //token存储到vuex中
                                this.$store.dispatch("setAuthenticated",!this.isEmpty(decoded));
                                this.$store.dispatch("setUser",decoded);
                                this.$message(
                                    {
                                    message:"账号登录成功",
                                    type:"success"
                                })
                                
                                this.$router.push('/index');
                            });
                            
                        }
                    });
                },
                isEmpty(value){//判断是否为空
                    return(
                    value===undefined||
                    value===null||
                    (typeof value==="object"&&Object.keys(value).length===0)||
                    (typeof value==="string"&&value.trim().length===0)
                )}
            },
}
</script>
<style scoped>
.login{
    position: relative;
    width: 100%;
    height: 100%;
    /* background: url(../assets/bg.jpg) no-repeat center center; */
    /* background-size: 100% 100%; */
}
.loginForm{
    margin-top:20px;
    background-color: #fff;
    padding:50px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
}
.form_container{
    width:500px;
    height: 210px;
    position: absolute;
    top:50%;
    left: 50%;
    margin-left: -250px;
    margin-top:-210px;
    border-radius: 5px;
    text-align: center;
}
.form_container .manage_tip .title{
    font-family: "Micrisoft YaHei";
    font-weight: bold;
    font-size: 26px;
    color:rgb(26, 24, 24);
}
.submit_btn{
width: 100%;
}
.tiparea{
    text-align: right;
    font-size: 12px;
    color:#333;
}
.tiparea p a{
    color: #409eff;
}
</style>