<template>
<div>
    <input type="text" placeholder="请输入账号">
<input type="password" placeholder="请输入密码">
<button @click="gotoHome">登录</button>
</div>

</template>
<script>
export default {
    data(){
        return{
            msg:''
        }
    },
    methods:{
        gotoHome(){
            this.$router.push({ path: '/home'});
        }
    }
}
</script>