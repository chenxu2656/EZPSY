<template>
    <div class="index">
        <div id="header">
            <div id="hd_left">
                <a href="#">AHMU-CEL-LAB</a> <a href="#"> EZPSY</a>
            </div>
            <div id="hd_right">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="html/program-block.html">Builder</a></li>
                    <li><a href="#">Questionnaire</a></li>
                    <li><a href="http://docs.easyun.ltd" target="_blank">Docs</a></li>
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Contact</a></li>
                    <li id="sing">
                        <!-- <s:if test="#session.user!=null"> -->
                            <a
                                href="#">欢迎您，
                                <!-- <s:property
                                    value="#session.user.name" /> -->
                            </a>
                        <!-- </s:if> <s:else> -->
                            <a href="/login">Sign in</a>
                            <font color="white">|</font>
                            <a href="/register">Sign up</a>
                        <!-- </s:else> -->
                        </li>
                </ul>
            </div>
        </div>
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
    components: {
        
    },
    created() {
    this.activated();
    },
    methods:{
       activated() {
        // 监听滚动事件
        window.addEventListener('scroll', () => { document.getElementById('img_banner').style.top = 30 - window.scrollY / 1.5 + 'px'; })
    },
    }
}
</script>