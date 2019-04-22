<template>
   <div>
       <h1 >{{title}}</h1>
        <button @click="zzk">{{size}}</button>
        <button @click="two">two</button>
    </div> 
   
</template>
<script>
 export default{
     props:['title','size'],
     methods:{
         zzk(){
             this.$emit('update:title',"我是改变后的")
             this.$emit('update:size',"我是点击后的按钮")
         },
         two(){
            this.$zzkBus.$emit('zzkBu','赵钊坤');
         }
     }


   } 

</script>

<style>

</style>

