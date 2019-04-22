<template>
    <div class="login">
           <span>请输入账号admin</span> <input type="text" v-model="name">
            <button @click="login"> 登陆</button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:''
        }
    },
    methods:{
        login(){
            if(this.name=='admin'){
               let arr = this.$router.options.routes;
               let obj = arr.filter((item)=>{return item.name=='Home'})[0];
               obj.meta.login = false;
              this.$router.replace('/home');
            }else{
                this.name = '';
                alert('账号是admin');
            }
        }
    }
}
</script>
<style>


</style>
