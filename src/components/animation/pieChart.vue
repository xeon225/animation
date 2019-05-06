<template>
  <div id="pieChart">
    <div class="padding50 flex-container left">
      <div class="pos-r text-light margin50 flex-container center" :style="'width:'+(Width+namePx*2)+'px;' + 'height:'+(Width+namePx*2)+'px;border-radius:50%;'">
        <div class="pos-r text-light" :style="'width:'+Width+'px;' + 'height:'+Width+'px;'">
          <div class="pos-a" :class="pieShow && 'bgC'" :style="'width:'+Width/2+'px;' + 'height:'+Width/2+'px;top:'+Width/4+'px;' + 'left:'+Width/4+'px;z-index:100;'"></div>
          <div class="anPie text-white pos-a top0 left0 right0 bottom0" :class="pieShow && 'an_1'"></div>
          <div class="circle pos-a" :style="'color:'+item.color+';transform: rotate('+item.prevPiSum+'deg);'" v-for="item in dataCircle">
            <div class="pos-a top0 right0 bottom0 left0" :style="cssCircle(item.pi,cx,cy,r)"></div>
          </div>
        </div>
      </div>
      <div :class="pieShow && 'opacityShow'" style="opacity: 0">
        <div class="flex-container left padding10" v-for="item in dataNew">
          <div class="" :style="'background:'+item.color+';width:20px;height:20px;'" ></div>
          <div class="marginl20">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="text-center margint50 fs-20" style="text-decoration:underline" @click="pieShow = !pieShow">饼图</div>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
  	name: 'pieChart',
  	data () {
	    return {
	    	Width:400,				//画布长宽
	    	r:200,					//圆半径长度
	    	// piN:6,					//角度数
        round:360,          //圆周度
	    	cx:200,         //圆心x
        cy:200,         //圆心y
	    	b:0,					//角b
	    	times:1,
	    	rItems:[1,0.8,0.6,0.4,0.2],
        // dItems:[50,80,60,90,70,100],
        showL:false,
        showLstyle:'',
        namePx:30,
        dItems:[
          {
            item:100,
            name:'年龄',
            color:'#D32F2F'
          },
          {
            item:20,
            name:'力量',
            color:'#FF4081'
          },
          {
            item:30,
            name:'攻击力',
            color:'#7B1FA2'
          },
          {
            item:80,
            name:'防御力',
            color:'#7C4DFF'
          },
          {
            item:40,
            name:'灵活',
            color:'#303F9F'
          },
          {
            item:10,
            name:'技术',
            color:'#448AFF'
          }
        ],
        pieShow:false
	    }
  	},
  	computed: {
      dataNew(){
        let d = this.dItems;
        // d = d.sort(this.sortNumber);
        // console.log(d.sort(this.sortNumber))
        return d
      },
      dataCircle(){
        let d = this.dataNew,
            sum = 0,        //总数
            pi = 0,         //占圆所在角度
            prevPiSum = 0;  //所在圆起始角度

        d.forEach((item,index)=>{
          sum += item.item
        })

        d.forEach((item,index)=>{
          pi = item.item / sum * this.round;
          item['pi'] = pi;
          item['prevPiSum'] = prevPiSum;
          prevPiSum += pi;
        })
        // console.log(d)
        return d
      },
      piN(){
        return this.dItems.length     //角度数
      }
  	},
	methods: {
        //从大到小顺序
        sortNumber:function(a,b){
          return b.item - a.item
        },
        cssCircle:function(num,x,y,r){
            var x = x,
                y = y,
                r = r,
                a = num,
                aa = a*Math.PI/180,
                lx = x,
                ly = y,
                xar = 0,
                laf = (a > 180) ? 1 : 0,
                sf = 1,
                show = show,
                sinLx = (lx+(Math.sin(aa)*r))+'px ',    //角弧度终点x
                cosLy = (ly-(Math.cos(aa)*r))+'px ',    //角弧度终点y

                center = '50% 50%, ',                     //画布中心点
                top = '50% 0, ',                          //画布top点
                topRight = '100% 0, ',                    //画布topRight点
                right = '100% 50%, ',                     //画布right点
                rightBottom = '100% 100%, ',              //画布rightBottom点
                bottom = '50% 100%, ',                    //画布bottom点
                bottomLeft = '0 100%, ',                  //画布bottomLeft点
                left = '0 50%, ',                         //画布left点
                leftTop = '0 0, ',                        //画布leftTop点


                dd = center + top,      //图形起始点

                dd_90 = dd + topRight, //小于90度图形起始点
                dd_180 = dd + topRight + right + rightBottom, //大于90度小于180图形起始点
                dd_270 = dd + topRight + right + rightBottom + bottom + bottomLeft, //大于180度小于270图形起始点
                dd_360 = dd + topRight + right + rightBottom + bottom + bottomLeft + left + leftTop; //大于270度小于360图形起始点

                
                if(a>270){
                    dd = dd_360;
                }else if(a>180){
                    dd = dd_270;
                }else if(a>90){
                    dd = dd_180;
                }else{
                    dd = dd_90;
                }

                dd += sinLx + cosLy
                dd = 'clip-path: polygon('+dd+');'

                // console.log(dd)
            return dd
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .circle{
      width:100%;
      height:100%;
      clip-path:circle(50% at 50% 50%);
    }
    .circle:hover{
      /*clip-path:circle(50% at 50% 50%);*/
    }
    .circle>div{
      background: currentColor;
    }
    .anPie{
      z-index: 99;
      /*clip-path:polygon(50% 0, 100% 0, 100% 100%, 50% 100%);*/
      /*clip-path:polygon(0 0, 50% 0, 50% 100%,0 100%);*/
    }
    .anPie:before{
      content: '';
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background: linear-gradient(to left, transparent 50%, currentColor 50%);
    }
    .anPie:after{
      content: '';
      position: absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      background: linear-gradient(to right, transparent 50%, currentColor 50%);
    }
    .an_1{
      animation:pieShow linear;
      animation-duration:0;
      animation-delay:1s;
      animation-fill-mode: forwards;
    }
    .bgC{
      border-radius:50%;
      border:20px solid rgba(0,0,0,.4);
    }
    .bgC:after{
      content:'';
      position: absolute;
      left:0;
      right:0;
      top:0;
      bottom:0;
      background: #fff;
      border-radius: 50%;
    }
    @keyframes pieShow
    {
      from {
        clip-path:polygon(0 0, 0 0, 0 0, 0 0);
      }
      to {
        clip-path:polygon(0 0, 50% 0, 50% 100%,0 100%);
      }
    }
    .an_1:after{
      animation:pieShowAfter linear;
      animation-duration:1s;
      /*animation-fill-mode: forwards;*/
    }
    @keyframes pieShowAfter
    {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(180deg);
      }
    }
    .an_1:before{
      animation:pieShowBefore ease-out;
      animation-duration:1.5s;
      animation-delay:1s;
      animation-fill-mode: forwards;
    }
    @keyframes pieShowBefore
    {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(180deg);
      }
    }
    .opacityShow{
      opacity:0;
      animation:opacityAn linear;
      animation-delay:2s;
      animation-duration:0.5s; 
      animation-fill-mode: forwards;
    }
    @keyframes opacityAn
    {
      form{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
    }
</style>
