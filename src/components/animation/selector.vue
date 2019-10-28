<template>
  <div id="selector">
    <!-- 属性选择器 -->
    <h1 class="padding10 fs-20">css属性选择器</h1>
    <div class="form paddingh10">
      <input type="search" v-model="searchText"/>
      <div v-html="menuStyleText"></div>
      <div class="paddingv10">
        <pre>
          <code v-text="menuStyleText"></code>
        </pre>
      </div>
    </div>
    <h1 class="padding10 fs-20">css属性筛选</h1>
    <div class="selectBadge flex-container left paddingh10">
      <div class="marginr20 btn blue radius" :class="selectClass.indexOf(item) != -1 && 'reverse'" @click="addClass(item)" v-for="item in badgeList">{{item}}</div>
      <div class="btn blue radius" @click="selectClass = ''">显示全部</div>
    </div>
    <div class="selectList margint20 paddingh5" :class="searchText !='' && 'searchReturn'">
      <ul :class="selectClass" class="box-container">
        <li :text="item.content" v-for="item in face" class="box-span3 padding5" :badge="item.badge">
          <div class="border radius">
            <div class="pos-r">
              <img :src="item.img" alt="">
              <div class="pos-a top5 left5">
                <div class="badge badgeText red marginr5 small radius" v-for="itemb in item.badge" v-text="itemb"></div>
              </div>
            </div>
            <div class="text-fixed4 fs-12 paddingh5 text-dark" v-html="item.content"></div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 兄弟选择器 -->
    <h1 class="padding10 fs-20">css兄弟选择器</h1>
    <div class="padding10">
      <div v-html="selectNum"></div>
      <div class="paddingv10">
        <pre>
          <code v-text="selectNum"></code>
        </pre>
      </div>
      <input type="range" name="range1" min="5" max="20" v-model="selectB"/>
      <div class="selectBrother margint10 paddingh10">
        <div v-for="item in 20">{{item}}</div>
      </div>
    </div>
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
$list:('js','css','html');
$num:length($list);
@mixin selectBadge($n1, $n2, $n3) {
  @if $n3 == '' {
  &.#{$n1}.#{$n2}{
    li{
      display:none;
    }
    li[badge*='#{$n1}'][badge*='#{$n2}']{
      display:block;
    }
  }
  } @else {
    &.#{$n1}.#{$n2}.#{$n3}{
      li[badge]{
        display:none;
      }
      li[badge*='#{$n1}'][badge*='#{$n2}'][badge*='#{$n3}']{
        display:block;
      }
    }
  }
}


.selectList{
  ul{
    &[class*=' ']{
      li{
        display:none;
      }
    }
    @each $name in $list {
      &.#{$name} {
        li[badge*="#{$name}"]{
          display:block;
        }
      }
    }
    @include selectBadge('js','css','');
    @include selectBadge('js','html','');
    @include selectBadge('css','html','');

    @include selectBadge('js','css','html');

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
// .selectBrother{
//   & div:nth-last-of-type(1) ~ div{
//     display:none;
//   }
// }
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
          badge:['css','html']
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
          img:require("../../assets/face/xiaoyu.png"),
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

      ],
      selectB:5,
      selectPage:5
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
    },
    selectNum(){
      return `
<style>
    .selectBrother div:nth-of-type(`+this.selectB+`) ~ div {
        display: none;
    }
    .selectBrother div:nth-of-type(-n + `+ (this.selectB - this.selectPage) +`) {
        display: none;
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


