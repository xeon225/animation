<template>
  <div id="antinomy">
    <div class="pos-r" style="width:186px;height:200px;">
      <div class="pos-a paluosi" :style="arrData(item,$index)" v-for="(item,$index) in dItems">
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
          {x:0,y:0,z:0},
          {x:1,y:0,z:1},
          {x:2,y:0,z:0},
          {x:3,y:0,z:0},
          {x:4,y:0,z:0},
          {x:0,y:1,z:0},
          {x:0,y:2,z:0},
          {x:0,y:3,z:0},
          {x:0,y:4,z:0},
          {x:1,y:2,z:0},
          {x:2,y:0,z:1},
          {x:4,y:0,z:-1},

        ]

	    }
  	},
  	computed: {
      dataNew(){
        let d = this.dItems;
        // d = d.sort(this.sortNumber);
        // console.log(d.sort(this.sortNumber))
        return d
      }
  	},
	methods: {
        arrData:function(d,i){
          var xl = 50,  //left:50
              xt = 25,  //top:25
              xz = 1,
              yl = 25,  //left:25
              yt = 50,  //top:50
              zl = 50, //left:50
              zt = 25,
              px = '%;',
              left = 'left:',
              top = 'top:',
              zIndex = 'z-index:',
              leftN = 0,
              topN = 0,
              zIndexN = 9999,
              style = '';
          
          leftN = xl * d.x + zl * d.z;
          topN = xt * d.x + yt * d.y - zt * d.z;
          zIndexN = zIndexN + d.x - d.y - d.z;

          left = left + leftN + px;
          top = top+ topN + px;
          zIndex = zIndex + zIndexN;
          style = left + top + zIndex;
          // console.log(style)
          return style
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
