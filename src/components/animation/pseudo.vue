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
    <div class="classa">
      <p>1</p>
      <em>2</em>
      <div>3</div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
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
      selectNotAll:[]
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


