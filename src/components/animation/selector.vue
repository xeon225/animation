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
      <ul :class="selectClass" class="box-container">
        <li v-for="item in face" class="box-span4 padding5" :badge="item.badge">
          <div class="border radius">
            <div class="pos-r">
              <img :src="item.img" alt="">
              <div class="pos-a top5 left5">
                <div class="badge badgeText red marginr5 small radius" v-for="itemb in item.badge" v-text="itemb"></div>
              </div>
            </div>
            <div class="text-center" v-text="item.title"></div>
            <div class="text-fixed4" v-html="item.content"></div>
          </div>
        </li>
<!--         <li badge="js" text="在村顶过顶过顶过">在村顶过顶过顶过</li>
        <li badge="css" text="在在在">在在在</li>
        <li badge="js" text="3">3</li>
        <li badge="html" text="在在在">在在在</li>
        <li badge="js" text="5">5</li>
        <li badge="js" text="6">6</li> -->
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
    // &.js.css.html{
    //   li[badge*="js"][badge*="css"][badge*="html"]{
    //     display:block;
    //   }
    // }
    &.js.html{
      li[badge*="js"][badge*="html"]{
        display:block;
      }
      &.css{
        & > &[badge*="css"]{
          display:block;
        }
      }
    }
    // &.js.css{
    //   li[badge*="js"][badge*="css"]{
    //     display:block;
    //   }
    // }
    // &.css.html{
    //   li[badge*="css"][badge*="html"]{
    //     display:block;
    //   }
    // }
    // &.js{
    //   li[badge*="js"]{
    //     display:block;
    //   }
    // }
    // &.css{
    //   li[badge*="css"]{
    //     display:block;
    //   }
    // }
    // &.html{
    //   li[badge*="html"]{
    //     display:block;
    //   }
    // }
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
      searchText:'',
      face:[
        {
          img:require("../../assets/face/agou.png"),
          title:"阿狗",
          content:"welcome on to bingshan 汪 汪汪 <br>(继续走，不走咬你。)",
          badge:['html']
        },
        {
          img:require("../../assets/face/leige.png"),
          title:"磊哥",
          content:"前端学习很简单。来，先入个门。学习如何画大饼。",
          badge:['css']
        },
        {
          img:require("../../assets/face/hansheng.png"),
          title:"瀚声",
          content:"知识改变命运，我已经成功了。<br>（群众：王总好！）",
          badge:['js']

        },
        {
          img:require("../../assets/face/guoyuan.png"),
          title:"果园",
          content:"天啊，我看到了什么。全是大神，大佬，天啊！各位走过路过，千万不能错过！（破音）",
          badge:['js','html']
        },
        {
          img:require("../../assets/face/yangzhen.png"),
          title:"小宇",
          content:"不懂不要紧，多看多问，我认识的NB人多，尤其下一个。",
          badge:['js','css']
        },
        {
          img:require("../../assets/face/mayi.png"),
          title:"马姨",
          content:"岁月才是最大的知识。<br>你们还是幼齿。",
          badge:['html']
        },
        {
          img:require("../../assets/face/qifeng.png"),
          title:"丰哥",
          content:"我所传授的知识都有一个特点，简单易懂。因为我是领导。",
          badge:['js','html']
        },
        {
          img:require("../../assets/face/bobo.png"),
          title:"博哥",
          content:"哼哼哼。。。不对，这块你做的有问题。",
          badge:['js','css','html']
        },
        {
          img:require("../../assets/face/kaili.png"),
          title:"凯丽",
          content:"学习与吃，都很重要。不，还是吃重要。<br>（我去吃鹅了）",
          badge:['js','html']
        },
        {
          img:require("../../assets/face/xianrou.png"),
          title:"鲜肉",
          content:"超越老师有时候不一定是在技术方面上。但喜悦心情都一样。<br>（她终于走了，哈哈哈）",
          badge:['js','html']
        },
        {
          img:require("../../assets/face/xiaoqiang.png"),
          title:"小强",
          content:"技术要内外兼修的同时。会几套外门功夫也是必要的。<br>（7天精通dui产品与设计）",
          badge:['js','html']
        },
        {
          img:require("../../assets/face/yangzhen.png"),
          title:"振哥",
          content:"嘿嘿，不好意思各位，给大家脸捏胖了。<br>（这样我就显瘦了）",
          badge:['js','css','html']
        },
        {
          img:require("../../assets/face/shayi.png"),
          title:"沙老师",
          content:"恭喜，你已经是非常了不起的前端。<br>如果有遗漏的地方，可以返回起点再被咬一边。",
          badge:['js','css','html']
        }

      ]
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


