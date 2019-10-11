<template>
  <div id="pseudo">
    <ul class="pseudoList" :class="selectNot && 'selectId'">      
      <div class="flex-container padding10">
        <div>序号</div>
        <div class="flex-container right">
          <div class="paddingl10" @click="selectNot = true">显示选中</div>
          <div class="paddingl10" @click="selectNot = false,selectNotAll = []">显示全部</div>
        </div>
      </div>
      <li v-for="($index,item) in 10" :class="selectNotAll[$index] === true && 'selectNot'" v-if="selectNotAll[$index] === true || !selectNot">
        <div class="flex-container padding10">
          <div class="flex-container left">
            <div :data-id="$index"></div>
            <div class="img"><img src="../../assets/bingshanbear.svg" width="30" alt=""></div>
            <div>标题标题标题标题标题标题标题标题标题</div>
          </div>
          <div class="buttons flex-container right">
            <button v-if="$index != 4">详细</button>
            <button @click="getSelectId($index)">选择</button>
          </div>
        </div>
      </li>
      <div>注意</div>
    </ul>
    <!-- :empty -->
    <div class="margint20 paddingt20 bg-green noShowEmpty">
      <div v-if="false">组件</div>
    </div>

    <div class="page flex-container center margint20">
      <div pageName="上一页"></div>
      <p v-for="($index,item) in 5" v-text="$index" :page="$index === 3 && 'current'"></p>
      <div pageName="下一页"></div>
    </div>
    <div class="timeTree margint50">
      <div class="times" v-for="item in face">
        <div class="clearfix">
          <div><img :src="item.img" width="80" alt=""></div>
          <div>
            <h1>{{item.title}}</h1>
            <p class="text-dark" v-html="item.content"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.notSelect p:not(:last-child){
  border-bottom:1px solid #000
}
  :root{
    padding:20px;
  }
  html{
    padding:30px;
  }

</style>
<style lang="scss" scoped>

.timeTree{
  position: relative;
  &:before,&:after{
    position:absolute;
    content: '';
    width:40px;
    height:40px;
    z-index: 1;
    left: 50%;
    margin-left: -20px;
  }
  &:before{
    top: -30px;
    background: url('../../assets/start.svg') no-repeat;
    background-size: 100% auto;
  }
  &:after{
    bottom:10px;
    background: url('../../assets/end.svg') no-repeat;
    background-size: 100% auto;
  }
  &:after{}
  .times{
    position:relative;
    padding:50px;
    .clearfix{
      &>div{
        width:50%;
      }
    }
    &:after,&:before{
      position:absolute;
      content: '';
      width:50%;
      height:100%;
      border:10px solid currentColor;
      top:0;
    }
    &:before{
      border-width:20px;
    }
    &:nth-of-type(odd){
      .clearfix div:first-child{
        float:left;
      }
      .clearfix div:last-child{
        float:right;
        text-align: right;
      }
      &:after,&:before{
        left:0;
        border-top-left-radius:50px;
        border-bottom-left-radius:50px;
        border-right:0;
      }
    }
    &:nth-of-type(even){
      .clearfix div:first-child{
        float:right;
        text-align: right;
      }
      .clearfix div:last-child{
        float:left;
      }
      &:after,&:before{
        right:0;
        border-top-right-radius:50px;
        border-bottom-right-radius:50px;
        border-left:0;
      }
    }
    &:not(:first-of-type){
      margin-top:-20px;
    }
    &:nth-of-type(4n+1){
      color:rgba(255,0,0,.5);
    }
    &:nth-of-type(4n+2){
      color:rgba(0,0,255,.5);
    }
    &:nth-of-type(4n+3){
      color:rgba(0,128,0,.5);
    }
    &:nth-of-type(4n){
      color:rgba(255,165,0,.5);
    }
  }
  
}
.classa{
  :nth-child(2){
    background: red
  }
}
.page{
  .current{
    background: red;
    color:white;
  }
  &>*{
    border:1px solid red;
    margin:0 5px;
  }
  text-align: center;
  font-size: 12px;
  color:red;
  &>div{
    width:60px;
    height:30px;
    line-height: 30px;
    border:1px red solid;
    &:first-of-type{
      border-radius:30px 2px 2px 30px;
      &:after{
        content:'上一页'
      }
    }
    &:last-of-type{
      border-radius:2px 30px 30px 2px;
      &:after{
        content:'下一页'
      }
    }
  }
  &>p{
    border-radius:2px;
    width:30px;
    height:30px;
    line-height: 30px;
    &[page='current']{
      @extend .current;
    }
    &:only-of-type{
      @extend .current;
      // @at-root .page>div{
      //   display:none;
      // }
    }

  }
  &>*:hover{
    @extend .current;
  }

}
.nth-of-type{
  &:nth-of-type(odd){
    background:#F2F6FC;
  }
  &:nth-of-type(even){
    background:#fff;
  }
}
.first-last-child{
  &>:first-child{
    background:#409EFF;
  }
  &>:last-child{
    background:#67C23A;
  }
}
.pseudoList{
  li{
    @extend .nth-of-type;
  }
  
  @extend .first-last-child;

  &>:first-child:last-child{
    background:#000;
  }
  &.selectId{
    @extend .nth-of-type;
    li:not(.selectNot){
      display:none;
    }
  }
  [data-id]{
    width:40px;
    &:after{
      content:"No."attr(data-id);
    }
  }
  &:empty{
    display:none;
  }
  .buttons{
    min-width: 120px;
    button{
      width:50px;
      border:0;
      border-radius:2px;
      height:30px;
      line-height: 30px;
      background: #409eff;
      font-size:12px;
      color:#fff;
      margin-left:10px;

      &:first-child{
        background: #409eff;
      }
      &:last-child{
        background: #67c23a;
        &:first-child{
          width: 110px;
        }
      }
    }
    @at-root{
      .selectNot{
        .buttons{
          button{
            &:first-child{
              // background: none;
            }
            &:last-child{
              background: none;
              border:1px solid #67c23a;
              color:#67c23a;
            }
          }
        }
      }
    }
  }
  
}

.noShowEmpty:empty{
  display:none;
}
</style>

<script>
import Vue from 'vue';


export default {
	name: 'pseudo',
	data () {
    return {
    	selectNot:false,
      selectNotAll:[],
      face:[
        {
          img:require("../../assets/face/agou.png"),
          title:"阿狗",
          content:"welcome on to bingshan 汪 汪汪 <br>(继续走，不走咬你。)"
        },
        {
          img:require("../../assets/face/leige.png"),
          title:"磊哥",
          content:"前端学习很简单。来，先入个门。学习如何画大饼。"
        },
        {
          img:require("../../assets/face/hansheng.png"),
          title:"瀚声",
          content:"知识改变命运，我已经成功了。<br>（群众：王总好！）"
        },
        {
          img:require("../../assets/face/guoyuan.png"),
          title:"果园",
          content:"天啊，我看到了什么。全是大神，大佬，天啊！各位走过路过，千万不能错过！（破音）"
        },
        {
          img:require("../../assets/face/yangzhen.png"),
          title:"小宇",
          content:"不懂不要紧，多看多问，我认识的NB人多，尤其下一个。"
        },
        {
          img:require("../../assets/face/mayi.png"),
          title:"马姨",
          content:"岁月才是最大的知识。<br>你们还是幼齿。"
        },
        {
          img:require("../../assets/face/qifeng.png"),
          title:"丰哥",
          content:"我所传授的知识都有一个特点，简单易懂。因为我是领导。"
        },
        {
          img:require("../../assets/face/bobo.png"),
          title:"博哥",
          content:"哼哼哼。。。不对，这块你做的有问题。"
        },
        {
          img:require("../../assets/face/kaili.png"),
          title:"凯丽",
          content:"学习与吃，都很重要。不，还是吃重要。<br>（我去吃鹅了）"
        },
        {
          img:require("../../assets/face/xianrou.png"),
          title:"鲜肉",
          content:"超越老师有时候不一定是在技术方面上。但喜悦心情都一样。<br>（她终于走了，哈哈哈）"
        },
        {
          img:require("../../assets/face/xiaoqiang.png"),
          title:"小强",
          content:"技术要内外兼修的同时。会几套外门功夫也是必要的。<br>（7天精通dui产品与设计）"
        },
        {
          img:require("../../assets/face/yangzhen.png"),
          title:"振哥",
          content:"嘿嘿，不好意思各位，给大家脸捏胖了。<br>（这样我就显瘦了）"
        },
        {
          img:require("../../assets/face/shayi.png"),
          title:"沙老师",
          content:"恭喜，你已经是非常了不起的前端。<br>如果有遗漏的地方，可以返回起点再被咬一边。"
        }

      ]
    }
	},
	computed: {
	},
  methods: {
    getSelectId(id){
      this.$set(this.selectNotAll,id,this.selectNotAll[id] ? undefined : true);
    },
    removeEmpty(arr){   
      for(var i = 0; i < arr.length; i++) {
       if(arr[i] == "" || typeof(arr[i]) == "undefined") {
          arr.splice(i,1);
          i = i - 1;
        }
      }
      return arr;
    }
  }
}
</script>


