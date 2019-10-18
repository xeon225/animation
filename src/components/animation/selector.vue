<template>
  <div id="selector">
    <!-- 属性选择器 -->
    <div>
      <input type="search" v-model="searchText">
      <div v-html="menuStyleText"></div>
      <div class="padding20">
        <pre>
          <code v-text="menuStyleText"></code>
        </pre>
      </div>
    </div>
    <div class="selectBadge flex-container left">
      <div class="marginr20" :class="selectClass.indexOf(item) != -1 && 'text-red'" @click="addClass(item)" v-for="item in badgeList">{{item}}</div>
      <div @click="selectClass = ''">显示全部</div>
    </div>
    <div class="selectList margint20" :class="searchText !='' && 'searchReturn'">
      <ul :class="selectClass">
        <li badge="js" text="在村顶过顶过顶过">在村顶过顶过顶过</li>
        <li badge="css" text="在在在">在在在</li>
        <li badge="js" text="3">3</li>
        <li badge="html" text="在在在">在在在</li>
        <li badge="js" text="5">5</li>
        <li badge="js" text="6">6</li>
      </ul>
    </div>

    

    <!-- 兄弟选择器 -->
    <div class="margint20">
      <div v-for="item in 20">{{item}}</div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.selectList{
  ul{
    &[class*=' ']{
      li{
          display:none;
        }
    }
    &.js{
      li[badge*="js"]{
        display:block;
      }
    }
    &.css{
      li[badge*="css"]{
        display:block;
      }
    }
    &.html{
      li[badge*="html"]{
        display:block;
      }
    }
  }
  &.searchReturn ul li{
    display:none;
  }
}
pre{
  position: relative;
  border-radius: 6px;
  line-height: 1.4;
  padding: 1.25rem 1.5rem;
  margin: .85rem 0;
  background-color: #282c34;
  border-radius: 6px;
  overflow: auto;
  code{
    color:#ccc;
    padding: 0;
    background-color: transparent;
    border-radius: 0;
  }
}
</style>

<script>
import Vue from 'vue';


export default {
	name: 'selector',
	data () {
    return {
      badgeList:['js','css','html'],
      selectClass:'',
      searchText:''
    }
	},
	computed: {
    menuStyleText(){
      return `
<style>
    .selectList.searchReturn ul li[text*='`+this.searchText+`']{
        display:block;
    }
</style>`
    }
    
	},
  methods: {
    addClass(n){
      var a = this.selectClass.indexOf(n) != -1;
      if (a) {
        this.selectClass = this.selectClass.replace(' ' + n, '');
      } else {
        this.selectClass += ' ' + n;
      }
    }
  }
}
</script>


