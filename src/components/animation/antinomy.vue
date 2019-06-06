<template>
  <div id="antinomy">
    <div class="pos-r" style="width:186px;height:200px;">
      <div class="pos-a paluosi" :style="arrData(item)" v-for="item in dItems">
        <div></div>
      </div>
<!--       <div class="pos-a paluosi" style="z-index: 3">
        <div></div>
      </div>
      <div class="pos-a paluosi" style="z-index:2;top:50%">
        <div></div>
      </div>
      <div class="pos-a paluosi" style="z-index:1;top:100%">
        <div></div>
      </div>
      <div class="pos-a paluosi" style="left:100%">
        <div></div>
      </div>
      <div class="pos-a paluosi" style="top:25%;left:50%;z-index: 4">
        <div></div>
      </div>
      <div class="pos-a paluosi" style="top:50%;left:100%;z-index: 5">
        <div></div>
      </div>
      <div class="pos-a paluosi" style="top:75%;left:50%;z-index: 3">
        <div></div>
      </div> -->


    </div>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
  	name: 'antinomy',
  	data () {
	    return {
	    	Width:400,				//画布长宽
	    	r:200,					//圆半径长度
	    	// piN:6,					//角度数
        round:360,          //圆周度
	    	cx:200,         //圆心x
        cy:200,         //圆心y
        dItems:[
          {x:1,y:1,z:1},
          {x:2,y:1,z:1}

        ]

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
        arrData:function(d){
          console.log(d)
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
.paluosi{
  width:100%;
  height:100%;
}
.paluosi>div{
  width:100%;
  height:50%;
  background: lime;
  clip-path:polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
.paluosi:before{
  content: '';
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background: red;
  clip-path:polygon(50% 50%, 50% 100%, 0 75%, 0 25%);
}
.paluosi:after{
  content: '';
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background: yellow;
  clip-path:polygon(50% 50%, 50% 100%, 100% 75%, 100% 25%);
}
</style>
