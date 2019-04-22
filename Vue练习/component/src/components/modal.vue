<template>
    <div class="box">
        <div class="box-top">
                <h3>{{title}}</h3>
        </div>
        <div class="box-content">
            <div class="content-con">
                这里显示提示的内容
            </div>
        </div>
         <div class="content-bottom">
                <button @click="okClick">{{okValue}}</button>
                <button>取消</button>
            </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:"这是一个标题"
        },
        okValue:{
            type:String,
            default:'确定'
        }
    },
    methods:{
        okClick(){
            this.$emit('okClick');
        }
    }
}
</script>

<style>
.box{
    width:300px;
    height:200px;
    background:pink;
    position:relative;
}
.box-top{
 position:absolute;
 top:2px;
 left:20px;
 right:20px;

}
.box-top h3{
  background:#fff;
  /* width:150px; */
  margin:0 auto;
  height:30px;
 border-radius:5px;
}
.box-content{
    position:absolute;
    top:50px;
    right:20px;
    left:20px;
    height:100px;
    overflow: hidden;
    background:#458450;
    border-radius:15px;
    color:#fff;
}
.content-bottom{
    position:absolute;
    bottom:10px;
    right:30px;
    left:30px;
    margin:0 auto
}
.content-bottom button{
    margin-left:10px;
    border:#458450 2px solid;
    background:#fff;
}
</style>

