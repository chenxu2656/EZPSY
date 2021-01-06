import { sign } from 'jsonwebtoken';
<template>
    <div class="index">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="7"><a href="">AHMU-CEL-LAB</a><a href="#"> EZPSY</a></el-menu-item>

        <a href="/home" v-if="user.name"><el-menu-item index="7" style="float:right" >welcome{{user.name}}</el-menu-item></a>
        <el-button-group style="float:right;margin-top:10px" v-else>
            <a href="/login"><el-button style="background:#545c64;color:rgb(255, 255, 255)">sign in</el-button></a>
            <a href="/register"><el-button style="background:#545c64;color:rgb(255, 255, 255)">sign up</el-button></a>
        </el-button-group>
        <el-menu-item index="6" style="float:right"><a href="" target="_blank">Contact</a></el-menu-item>
        <el-menu-item index="5" style="float:right"><a href="" target="_blank">Forum</a></el-menu-item>
        <el-menu-item index="4" style="float:right"><a href="http://docs.easyun.ltd" target="_blank">Docs</a></el-menu-item>
        <el-menu-item index="3" style="float:right"><a href="#">Questionnaire</a></el-menu-item>
        <el-menu-item index="2" style="float:right">Builder</el-menu-item>
        <el-menu-item index="1" style="float:right"><a href="/index">HOME</a></el-menu-item>
        </el-menu>
        
        <div id="img_banner">
            <img src="../img/head-back2.png" height="630px" width="1120px"
                id="banner">
        </div>

        <div id="AG">
            <div id="AG_CON">
                <h4>Make the experimental process design easier</h4>
                <h1>Make experimental design simple</h1>
            </div>
        </div>
        <div id="container">
            <div id="threeBox">
                <div>
                    <h2>Graphical programming</h2>
                    <p>We use the graphic programming method mainly used for primary
                        and secondary school students to carry out the experimental design.
                        Keep experimental programming to a minimum.</p>
                    <button id="btn1">
                        <a href="#">More Info</a>
                    </button>
                </div>
                <div>
                    <h2>Online experiment platform</h2>
                    <p>We provide an online experimental platform on which
                        experimenters publish the designed experiments and collect
                        experimental data from subjects around the world.</p>
                    <button id="btn2">
                        <a href="#">More Info</a>
                    </button>
                </div>
                <div>
                    <h2>Timing boosting technique</h2>
                    <p>We greatly improve the timing accuracy, to provide
                        high-performance animation comparable to the client.</p>
                    <button id="btn3">
                        <a href="#">More Info</a>
                    </button>
                </div>
            </div>
        </div>
	<!-- </div> -->
        <div id="builder_container">
            <div id="builder">
                <div id="builder_head">BUILDER</div>
                <div id="start_builder">
                    <img src="../img/builder.png" alt=""> <br>
                    <button>
                        <a href="#"> Start Builder</a>
                    </button>
                </div>
                <div id="read_docs">
                    <img src="../img/docs.png" alt=""> <br>
                    <button>
                        <a href="http://docs.ezpsy.net"> Read Docs</a>
                    </button>
                </div>
            </div>
        </div>
        <div id="contact_container">
            <div id="contact">
                <div id="contact_head">CONTACT US</div>
                <div id="contact_con">
                    <div id="github">
                        <a href="https://github.com/chenxu2656/easyun"><img
                            src="../img/github.png" alt=""></a>
                    </div>
                    <div id="email">
                        <a href=""><img src="../img/email.png" alt=""></a>
                    </div>
                    <div id="tel">
                        <a href=""><img src="../img/tel.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'index',
    computed: {
        user(){
            return this.$store.getters.user 
        }
    },
    data(){
        return{
            activeIndex: '1'
            } 
        },
    created() {
    this.activated();
    },
    methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
       activated() {
        // 监听滚动事件
        window.addEventListener('scroll', () => { document.getElementById('img_banner').style.top = 30 - window.scrollY / 1.5 + 'px'; })
    },
    }
}
</script>