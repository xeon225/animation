<template>
  <div id="app">
    <img src="./assets/bingshan.svg">
    <router-view/>
    <img src="./assets/bingshanbear.svg" class="margint50">
  </div>
</template>

<script>
export default {
  name: 'App'
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
