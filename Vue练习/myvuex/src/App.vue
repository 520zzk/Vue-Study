<template>
  <div>
      <selects></selects>
      <increment></increment>
  </div>

</template>

<script>
import selects from './components/select.vue'
import increment from "./components/Increment.vue"
export default {
  name: 'app',
  components: {
    selects,
    increment
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
