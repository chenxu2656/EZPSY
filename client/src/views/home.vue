<template>
    <div class="home">
        <HomeNav></HomeNav>
        <router-view></router-view>
    </div>
</template>

<script>
import HomeNav from '../components/homeNav'
export default {
    name:'home',
    components: {
       HomeNav
    }
}
</script>
<style>
.home{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

</style>