<template>
    <div class="user-box">
        <p>我是user</p>
    <hr/>
        <div class="a-box">
            <router-link :to="'/user/'+item.vip+'/'+item.Id" :key="index"  v-for="item,index in listData"  style="float:left; padding:0px 10px"><a>{{item.userName}}</a></router-link>
        </div> 
       
        <div class="box-user" v-if="user.userName">
           <p>姓名：{{user.userName}}</p>
           <p>性别：{{user.userSex}}</p>
           <p>爱好：{{user.userHobby}}</p>
        </div>
        <div class='other-box'>
            <!--最简单-->
            <!-- <router-link to="?info=follow" exact> 我的关注</router-link>
            <router-link to="?info=share" exact> 我的分享</router-link> -->

            <router-link exact :to="{path:'',query:{info:'follow',a:1}}">我的关注</router-link>
            <router-link exact :to="{path:'',query:{info:'share',a:1}}">我的分享</router-link>
        </div>
        <div>
            {{$route.query}}
        </div>
    </div>
</template>
<script>
let data = [
    {
       Id:1 ,
       userName:'perter',
       userSex:'女',
       userHobby:'看电影',
       vip:'vip'        
    },
    {
       Id:2 ,
       userName:'Tom',
       userSex:'男',
       userHobby:'玩游戏',
        vip:'vip'
    },
    {
       Id:3 ,
       userName:'zzk',
       userSex:'男',
       userHobby:'发呆',
        vip:'Nvip'
    },
]

export default {
 data(){
     return {
         listData:data,
         user:{},
     }
 },
 created(){
    //  console.log(this.$route);    //$router路由信息对象
    //渲染时回调用一次，复用时不会再次调用
    //地址一旦发生变化，$route会重新生成一个路由对象
     this.$route.params.userId ? this.getUser() :this.user = {} ;
    
 },
 watch:{
     //路径发生变化，$route会重新赋值，
     '$route'(to,from){   //watch监听路由对象 发生改变触发
     to.params.userId ? this.getUser() :this.user = {} ;
     }
 },
 methods:{
     getUser(){
         let id = this.$route.params.userId;
     this.user = this.listData.filter((item)=>{
         return item.Id == id;
     })[0];
     }
 }
}
</script>
<style>
.user-box > p{
    font-size:20px;
    color:#154286;
}
.user-box a{
    text-decoration:none;

}
.user-box{
width:300px;
margin:0 auto;
}
.a-box{
    height:30px;
}
.box-user{
    border:1px solid #000;
    background:pink;
    margin:0 auto;
    text-align: left;
    padding-left:15px;
}
</style>

