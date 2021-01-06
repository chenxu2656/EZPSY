<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>//使vuex中的内容刷新不会消失
import jwt_decode from 'jwt-decode';
export default {
  name: "app",
  components: {},
  
  created () {
    console.log(this.$route.path);;
    if(localStorage.eleToken){
      const decoded = jwt_decode(localStorage.eleToken);
      // token存储到vuex中
      this.$store.dispatch("setAuthenticated",!this.isEmpty(decoded));
      this.$store.dispatch("setUser",decoded);
    }
  },
  methods: {
    // 判断是否为空，空值返回false，真值返回true
    isEmpty(value){
      return(
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>
<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

</style>