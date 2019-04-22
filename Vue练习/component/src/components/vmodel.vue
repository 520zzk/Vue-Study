<template>
   <div>
       <h1 >{{title}}</h1>
        <button @click="two">{{value}}</button>
        {{zb}}
    </div> 
   
</template>
<script>
 export default{
     props:['title','value'],
     data:function(){
         return {
             zb:'XXX'
         }
     },
     methods:{
         two(){
            this.$emit('input','改变后');
            this.$zzkBus.$on('zzkBu',value=>{
                this.zb=value;
            })
         
        }
     }

   } 

</script>

<style>

</style>

