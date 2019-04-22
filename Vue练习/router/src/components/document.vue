<template>
    <div>我是文档下的内容
         <div class="d-box">
            <ul>
                <router-link to="/document" exact tag="li">
                  <!--/document  这样是在选择document是就默然给one添加了class-->
                    one
                </router-link>
                <router-link to="/document/two" tag="li">
                    two
                </router-link>
                <router-link :to="{name:'Three'}" tag="li">
                 three
                </router-link>
                <!-- <router-link to="/document/three" tag="li">
                    three
                </router-link> -->
            </ul>
         </div>
         <router-view></router-view>
    </div>
   
    <!-- <router-view></router-view> -->
</template>
<script>
export default {
    
}
</script>
<style>
    .d-box{

    }
    .d-box li{
        float:left;
        margin-left:20px;
        font-size:30px;
    
    }
    .is-active{
    background:#845216;
    color:#fff;
}
</style>


