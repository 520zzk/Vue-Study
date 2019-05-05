<template>
    <ul class="list">
      <li
       v-for="item in data" 
       :key="item.title" 
       @click="clickValue(item.title)"
      >{{item.title}}</li>
    </ul>
</template>

<script>
export default {
  props:['data'],
  methods:{
    clickValue(title){
        this.$emit("changeVal",title)
    }
  }
}
</script>
