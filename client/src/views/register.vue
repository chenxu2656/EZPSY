<<template>
    <div class="register">
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
        <a href="/login"><el-button style="background:#545c64;color:rgb(255, 255, 255);margin-top:10px;float:right;margin-right:15px">sign in</el-button></a>
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
<el-main></el-main>
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">ezpsy注册</span>
                <el-form :model="registerUser"  :rules="rules" ref="registerForm" label-width="100px"  class="registerForm">
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="registerUser.name"  placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="registerUser.email"  placeholder="请输入用邮箱"></el-input>
                    </el-form-item>

                    <el-form-item  label="密码" prop="password">
                        <el-input type="password" v-model="registerUser.password"  placeholder="请输入密码"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="password2">
                        <el-input type="password" v-model="registerUser.password2"  placeholder="请确认密码"></el-input>
                    </el-form-item>

                    <!-- <el-form-item label="选择身份">
                        <el-select v-model="registerUser.identity" placeholder="请选择身份">
                        <el-option label="管理员" value="manager"></el-option>
                        <el-option label="老师" value="teacher"></el-option>
                        <el-option label="学生" value="student"></el-option>
                        </el-select>
                    </el-form-item> -->


                    <el-form-item>
                        <el-button type="primary" class="submit_btn" @click="submitForm('registerForm')">注册</el-button>
                    </el-form-item>
                    <div class="tiparea">
                    <p>已经拥有账号？现在<router-link to="/login">登录</router-link></p>
                    </div>
                </el-form>
            </div>
            
        </section>
        </el-main>
        </el-container>
    </div>
</template>
<script>
export default {
    name:"register",
    components:{},
    data(){
        
        var validatePass=(rule,value,callback)=>{
            if(value!=this.registerUser.password){
                callback(new Error('两次输入密码不一致'));
            }else{
                callback();
            }
        }
        return{
            activeIndex: '1',
            registerUser:{
            name:'',
            email:'',
            password:'',
            password2:'',
            // identity:''
            },
            rules:{
                name:[
                    {
                required: true, message:'用户名不能为空', trigger: 'blur'
                },{
                    min:2,max:30,message:"长度在2到30个字符之间",trigger:'blur'
                }],
                email:[
                    {
                        type: "email" ,required: true, message:'邮箱格式不正确', trigger: 'blur'
                        }],
                password:[
                    {
                        required: true, message:'密码不能为空', trigger: 'blur'
                    },
                    {
                        min:6,max:30,message:"长度在6到30之间",trigger:'blur'
                    }
                ],
                password2:[
                    {
                        required: true, message:'确认密码不能为空', trigger: 'blur'
                    },
                    {
                    min:6,max:30,message:"长度在6到30之间",trigger:'blur'
                    },
                    {
                    validator:validatePass,
                    trigger:'blur'
                }
                ],
                // identity:[]
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
                            this.$axios.post("/api/users/register",this.registerUser)
                            .then(res=>{
                                //注册成功
                                this.$message({
                                    message:"账号注册成功",
                                    type:"success"
                                }) 
                                this.$router.push('/login');
                            })
                           
                        }else{
                            console.log('error submit!');
                            return false;
                        }
                    });
                },
            },
}
</script>
<style scoped>
.register{
    position: relative;
    width: 100%;
    height: 100%;
    /* background: url(../assets/bg.jpg) no-repeat center center; */
    /* background-size: 100% 100%; */
}
.registerForm{
    margin-top:20px;
    background-color: #fff;
    padding:20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
}
.form_container{
    width:500px;
    height: 210px;
    position: absolute;
    top:10%;
    left: 50%;
    margin-left: -250px;
    padding: 25px;
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
.tiparea p a{
    color: #409eff;
}
</style>