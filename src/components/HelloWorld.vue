<template>
  <div class="hello">
    <h1 class="marginv50">{{ msg }}</h1>
    <div class="lh-28">
      <div><a href="/animation/ps4.html">ps4</a></div>
      <div><a href="/animation/drawingList.html">雷达图</a></div>
      <div><a href="/animation/pieChart.html">饼状图</a></div>
      <div><a href="/animation/lineChart.html">折线图</a></div>
      <div><a href="/animation/antinomy.html">悖论空间</a></div>
      <div><a href="/animation/myyh.html">马姨呀嘿</a></div>
      <div><a href="/animation/myyhPath.html">马姨呀嘿Path</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'css3 svg demo'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
