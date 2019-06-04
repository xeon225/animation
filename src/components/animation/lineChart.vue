<template>
  <div id="LineChart">
    <div class="paddingl50 margin50 paddingb50 pos-r flex-container left">
      <div class="line pos-r" :style="linerange+'width:'+Width+'px;height:'+Width+'px;'">

        <!-- 散点图 -->     
        <div class="clipPath pos-a top0 right0 left0 bottom0 text-black" style="width:100%;height:100%" v-if="clipPath">
          <div class="dian" :style="item" v-for="item in dianList">
          </div>
        </div> 
        <!-- 折线图 -->     
        <div class="clipLine pos-a top0 right0 left0 bottom0 text-black" style="width:100%;height:100%" v-if="linePath">
          <div class="pos-a" :class="item[1] ? 'linearGradientTopRight' : 'linearGradientLeftTop'" :style="item[0]" v-for="(item,$index) in lineList">
          </div>
        </div>
        <!-- 柱形图 -->
        <div class="pillar pos-a top0 right0 left0 bottom0" style="width:100%;height:100%" v-if="pillar">
          <div class="pos-a bottom0" :style="item" v-for="item in pillarList"></div>
        </div>
        <!-- 面积图 -->
        <div class="areaChart pos-a top0 right0 left0 bototm0" style="width:100%;height:100%" v-if="areaChart">
          <div class="pos-a top0 right0 left0 bottom0" :style="areaChartClip"></div>
        </div>
      </div>
      <div class="marginl50">
        <div class="flex-container left marginv20">
          <div>散点图</div>
          <div class="marginl20">
            <div class="checkbox pos-r" @click="clipPath = !clipPath" :class="clipPath && 'current'"></div>
          </div>
        </div>
        <div class="flex-container left marginv20">
          <div>折线图</div>
          <div class="marginl20">
            <div class="checkbox pos-r" @click="linePath = !linePath" :class="linePath && 'current'"></div>
          </div>
        </div>
        <div class="flex-container left marginv20">
          <div>柱形图</div>
          <div class="marginl20">
            <div class="checkbox pos-r" @click="pillar = !pillar" :class="pillar && 'current'"></div>
          </div>
        </div>
        <div class="flex-container left marginv20">
          <div>面积图</div>
          <div class="marginl20">
            <div class="checkbox pos-r" @click="areaChart = !areaChart" :class="areaChart && 'current'"></div>
          </div>
        </div>
      </div>
      <!-- y轴 -->
      <div class="leftDegree pos-a top0 left0 bottom50 flex-container-col" style="width:50px;">
        <div class="flex1 flex-container center right pos-r" v-for="(item,$index) in parseInt(yDegree)" style="width:100%;">
          <div class="paddingr20 pos-a top-n5 flex-container cetner" style="height:100%;">{{yDegreeData($index).toFixed(0)}}</div>
        </div>
         <div class="flex1 pos-a bottom-n10 flex-container top right" style="width:100%;">
          <span class="paddingr20">{{min}}</span>
        </div>
      </div>
      <!-- x轴 -->
      <div class="pos-a left50 bottom0 flex-container top" :style="'width:'+Width+'px;height:50px;'">
        <div class="flex1 margint20" v-for="(item,$index) in parseInt(xDegree)">
          <div class="marginl-n5 text-center" style="width:100%">{{$index+1}}</div>
        </div>
      </div>
    </div>
    <div class="marginh50 paddingh50" style="width: 400px;">
      <div>
        <div class="flex-container"><span>刻度</span><span class="text-red">{{range}}</span></div>
        <div class="marginb5"><input type="range" v-model="range" max="1" min="0" step="0.1"></div>
        <div class="flex-container fs-10 text-light"><span>0</span><span>1</span></div>
      </div>
      <div class="margint20">
        <div class="flex-container"><span>x轴线数量</span><span class="text-red">{{xDegree}}</span></div>
        <div class="marginb5"><input type="range" v-model="xDegree" max="15" min="5" step="1"></div>
        <div class="flex-container fs-10 text-light"><span>5</span><span>15</span></div>
      </div>
      <div class="margint20">
        <div class="flex-container"><span>y轴线数量</span><span class="text-red">{{yDegree}}</span></div>
        <div class="marginb5"><input type="range" v-model="yDegree" max="15" min="5" step="1"></div>
        <div class="flex-container fs-10 text-light"><span>5</span><span>15</span></div>
      </div>
      <div class="margint20">
        <div class="flex-container"><span>最大值</span><span class="text-red">{{max}}</span></div>
        <div class="marginb5"><input type="range" v-model="max" max="400" min="50" step="10"></div>
        <div class="flex-container fs-10 text-light"><span>50</span><span>400</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
  	name: 'LineChart',
  	data () {
	    return {
	    	Width:400,        //画布长宽
	    	range:0.5,        //刻度透明值
        xDegree:10,       //x刻度
        yDegree:10,       //y刻度
        min:0,            //最小数
        max:100,          //最大数
        clipPath:true,   //散点图
        linePath:false,   //折线图
        pillar:false,     //柱形图
        areaChart:false   //面积图
	    }
  	},
    watch:{
      range(r){
        this.linerange
      },
      xDegree(n){
      }
      ,
      yDegree(n){
      }
    },
  	computed: {
      dItems(){
        var arr = [];
        for (var i = 1; i <= this.xDegree; i++) {
          arr.push(Math.floor(Math.random()*this.max+this.min));
        }
        console.log(arr)
        return arr
      },
      // 点
      dianList(){
        var d = this.dataNew,
            dNew = [],
            px = 'px;',
            style = '';
        d.forEach((item,index)=>{
          style = 'top:' + item.y + px + 'left:' + item.x + px;
          dNew.push(style)
        })
        // console.log(dNew)
        return dNew
      },
      // 线
      lineList(){
        var d = this.dataNew,
            dNew = [],
            next = 0,
            px = 'px;',
            linear = false,
            style = '';
        for (var i = 1; i < d.length; i++){
          style = this.pathLine(d[i-1],d[i])
          linear = this.linearGradient(d[i-1],d[i])
          dNew.push([style,linear])
        }
        return dNew
      },
      // 柱形
      pillarList(){
        var d = this.dataNew,
            w = 'width:20px;',
            dNew = [],
            px = 'px;',
            style = '';
        d.forEach((item,index)=>{
          style = 'top:' + item.y + px + 'left:' + item.x + px + w + 'background:currentColor';
          dNew.push(style)
        })
        return dNew
      },
      //面积图
      areaChartClip(){
        var d = this.dataNew,
            first = '0 100%,',
            last = (100 - (100 / this.xDegree)) + '% 100%',
            bgColor = 'background:currentColor',
            style = '';
        d.forEach((item,index)=>{
          style += item.x + 'px ' + item.y + 'px,';
        })
        style = 'clip-path:polygon(' + first + style + last + ');' + bgColor
        // console.log(style);
        return style
      },
      dataNew(){
        var d = this.dItems,
            dNew = [],
            top = '',
            left = '';
        d.forEach((item,index)=>{
          top = (this.max - item) * this.Width / this.max;
          left = index * this.Width / this.xDegree
          dNew.push({'y':top,'x':left})
        })
        console.log(dNew)
        return dNew
      },
      linerange(){
        var style = '',
            r = this.range,
            x = this.xDegree,
            y = this.yDegree;
        style = 'color:rgba(255,0,0,' + r + ');background-image: repeating-linear-gradient(to top,currentColor 0%, currentColor 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) ' + 100 / y + '%),repeating-linear-gradient(to right,currentColor 0%, currentColor 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) ' + 100 / x + '%);'
        
        return style
      }
  	},
	 methods: {
        yDegreeData(i){
          var n = this.yDegree - i;
          var d = ((this.max - this.min) / this.yDegree * n) + this.min;
          //最小值开始刻度
          return d
        },
        //判定线性渐变的方向
        linearGradient:function(c1,c2){
          var c1 = c1,    //坐标起点 x y
                c2 = c2,    //坐标终点 x y
                linearGradient = false; //线性渐变的方向 false从左下到右上，true 从左上到右下 
            linearGradient = (c1.x>c2.x === c1.y>c2.y);
            return linearGradient
        },
        //取两坐标点直线
        pathLine:function(c1,c2){
          var c1 = c1,    //坐标起点 x y
              c2 = c2,    //坐标终点 x y
              width = '',   //斜线盒子width值
              height = '',  //斜线盒子height值
              top = '',   //斜线盒子top值
              left = '',    //斜线盒子left值
              border = '',
              // origin = c1.o,
              px = 'px;',
              path = ''

          //取两个x坐标间距离
          width = 'width:' + Math.abs(c1.x - c2.x) + px;
          //取两个yx坐标间距离
          height = 'height:' + Math.abs(c1.y - c2.y) + px;
          //取两个y坐标最小值
          top = 'top:' + Math.min(c1.y,c2.y) + px;
          //取两个x坐标最小值
          left = 'left:' + Math.min(c1.x,c2.x) + px;
          //缩放展开所需要的偏移量
          // origin = 'transform-origin:' + origin + ';';

          //判断宽度为0或高度为0 设置border为1px实线
          border = (Math.abs(c1.x - c2.x) < 1) ? 'border:1px solid currentColor;' : (Math.abs(c1.y - c2.y) < 1) ? 'border:1px solid currentColor;' : '';

          // console.log(c1.l,(c1.x>c2.x && c1.y>c2.y))
          

          // console.log(c1.x,c2.x)
          //组成style
          path = top + left + width + height + border
          return path
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line{
    height:100%;
    width:100%;
    border-top:solid 1px currentcolor;
  }
  .marginl-n5{
    margin-left:-50%;
  }
  .top-n5{
    top:-50%;
  }
  .dian{
    width:8px;
    height:8px;
    position: absolute;
  }
  .dian:before{
    content: '';
    width:100%;
    height:100%;
    position: absolute;
    left:-50%;
    top:-50%;
    border-radius: 50%;
    background: currentColor;
  }
  .linearGradientLeftTop{
    position: absolute;
    background: linear-gradient(to left top, transparent calc(50% - 0.5px), currentColor, transparent calc(50% + 0.5px));
  }
  .linearGradientTopRight{
    position: absolute;
    background: linear-gradient(to top right, transparent calc(50% - 0.5px), currentColor, transparent calc(50% + 0.5px));
  }
  .checkbox{
    width:20px;
    height:20px;
    border-radius:4px;
    color:#509EFE;
    border:1px solid currentColor;
  }
  .checkbox.current:before{
    position: absolute;
    content:'';
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: currentColor;
    clip-path:polygon(50% 20%, 80% 50%, 50% 80%, 20% 50%);
  }
  /*清除原有样式*/
  input[type=range] {
      -webkit-appearance: none;
      width: 100%;
  }
  input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
  }
  /*设置滑动条的样式*/
  input[type=range]::-webkit-slider-runnable-track {
     height: 0.3vh;
     background: #509EFE;
  }
  input[type=range]::-moz-range-track {
     height: 0.3vh;
     background: #509EFE;
  }
  /*去除获取焦点时的边框*/ 
  input[type=range]:focus {
      outline: none;
  }
  /*设置滑块样式*/
  input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 12px;
      width: 1.4vh;
      background: #509EFE;
      margin-top: -5px; 
  } 
  input[type=range]::-moz-range-thumb  {
      -webkit-appearance: none;
      height: 12px;
      width: 1.4vh;
      background: #509EFE;
      margin-top: -5px; 
  }
  

</style>
