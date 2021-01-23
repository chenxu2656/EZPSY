<template>
  <header class="home-nav" >

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="7"><a href="">AHMU-CEL-LAB</a><a href="#"> EZPSY</a></el-menu-item>

        <el-menu-item v-if="user.name" index="7" style="float:right" >
           <a href="/home" > welcome  {{user.name}}</a>

            <el-dropdown  @command="setDialogInfo" >
              <span class="el-dropdown-link">
                <i class="el-icon-caret-bottom el-icon--right" style="color:white"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                <el-dropdown-item command="programinfo">项目管理</el-dropdown-item>
                
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </el-menu-item>
            
        <el-button-group style="float:right;margin-top:10px" v-else>
            <a href="/login"><el-button style="background:#545c64;color:rgb(255, 255, 255)">sign in</el-button></a>
            <a href="/register"><el-button style="background:#545c64;color:rgb(255, 255, 255)">sign up</el-button></a>
        </el-button-group>
        <el-menu-item index="6" style="float:right"><a href="" target="_blank">Contact</a></el-menu-item>
        <el-menu-item index="5" style="float:right"><a href="" target="_blank">Forum</a></el-menu-item>
        <el-menu-item index="4" style="float:right"><a href="http://docs.easyun.ltd">Docs</a></el-menu-item>
        <el-menu-item index="3" style="float:right"><a href="#">Questionnaire</a></el-menu-item>
        <el-menu-item index="2" style="float:right">Builder</el-menu-item>
        <el-menu-item index="1" style="float:right"><a href="/index">HOME</a></el-menu-item>
        </el-menu>

    <!--  -->
  </header>
</template>

<script>
export default {
  name: "home-nav",
  computed: {
      user(){
          return this.$store.getters.user 
      }
  },
  data(){
      return{
          activeIndex:'1'
      }
  },
  methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        setDialogInfo(cmdItem){
        //   console.log(cmdItem);
        switch(cmdItem){
            case "info":
                this.showInfoList();
                break;
            case "logout":
                this.logout();
                break;
            case "programinfo":
                this.programinfo();
                break;
        }
      },
      showInfoList(){
          console.log("个人信息");
      },
      programinfo(){
      this.$router.push('/programlist');
      },
      logout(){
        //   清除token
        localStorage.removeItem("eleToken");
        // 设置vuex store
        this.$store.dispatch('clearCurrentState');

        this.$message(
       {
            message:"退出成功",
            type:"success"
        })
        // 跳转到登录页面
        this.$router.push('/login');

      }
  }
};
</script>



<style scoped>

</style>