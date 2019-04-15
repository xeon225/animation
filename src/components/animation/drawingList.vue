<template>
  <div id="drawingList">
  	<div class="pos-r bg-green" :style="'width:'+Width+'px;' + 'height:'+Width+'px;border-radius:50%;'">
  		{{pathChart(pi,ac,b,r)}}
  		<div class="pos-a aa" :style="'width:'+(pathChart(pi,ac,b,r)[0]-Width/2)+'px;' + 'height:'+Width/2+'px;' + 'top:0;' + 'left:'+Width/2+'px;' ">
  			<div class="linearGradientTopRight left0 right0" :style="'height:'+ pathChart(pi,ac,b,r)[1] + 'px'">
  			</div>
			<div class="linearGradientLeftTop left0 right0" :style="'top:' + pathChart(pi,ac,b,r)[1] + 'px;' + 'height:calc(100% - '+ pathChart(pi,ac,b,r)[1] + 'px);'">
  			</div>
  		</div>

  		<div class="pos-a bg-red" style="width:2px;height:2px;top:calc(50% - 1px);left:calc(50% - 1px)"></div>
  		<div class="pos-a bg-red" :style="'width:2px;height:2px;' + 'top:' + pathChart(pi,ac,b,r)[1] + 'px;' + 'left:' + pathChart(pi,ac,b,r)[0] + 'px;'"></div>

  	</div>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
  	name: 'DrawingList',
  	data () {
	    return {
	    	Width:200,				//画布长宽
	    	r:100,					//圆半径长度
	    	pi:60,					//角度
	    	ac:100,					//三角形ac边
	    	b:0,					//角b
	    	times:1,
	    	polygonNo:[1,2,5,7]
	    }
  	},
  	computed: {
  		dataNew(){
  			let items = this.path;
  			var sumC = 0,			//每组斜线C总长
  				lG = false, 		//线性渐变的方向
  				path = '',			//每组坐标点集合
  				an_db = '',			//动画时间
  				an_style = '',
  				style = ''
  			items.forEach((item,index)=>{

  				sumC = this.Ptheorem(item.item);
  				item['s'] = sumC;
  				var ss = item;
  				ss.item.forEach((item,index)=>{

	  				if (ss.item[index+1]) {

	  					lG = this.linearGradient(item,ss.item[index+1])
	  					path = this.pathLine(item,ss.item[index+1])

	  					var t = index > 0 ? (ss.item[index-1].times) : [0,0] //取上一组动画时间
	  					an_db = this.durationDelay(item,ss.item[index+1],index,ss.item.length,sumC,t) //取当前动画时间
	  				}
	  				an_style = 'animation-delay:' + an_db[1] + 's;' + 'animation-duration:' + an_db[0] + 's;';
	  				item['lg'] = lG;
	  				item['times'] = an_db;
	  				item['style'] = path + an_style;
	  				
				})
			})

  			return items
  		}
  	},
	methods: {
        pathChart:function(num,x,y,r){
            var x = x,
                y = y,
                r = r,
                a = num,
                aa = a*Math.PI/180,			//转成角度
                lx = x,
                ly = y+r;
                console.log([(Math.sin(aa)*r),(Math.cos(aa)*r)])
            return [(lx+(Math.sin(aa)*r)),(ly-(Math.cos(aa)*r))]
        }
  //,
  //       angle:function(start,end){
  //       	end = {x:1,y:1};
  //       	start = {x:0,y:0};
		//     var diff_x = end.x - start.x,
		//         diff_y = end.y - start.y,
		//         pi = 0;
		//     pi = 360*Math.atan(diff_y/diff_x)/(2*Math.PI);

		//     return pi
		// }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   	.linearGradientLeftTop{
        position: absolute;
        background: linear-gradient(to left top, transparent calc(50% - 1px), currentColor, transparent calc(50% + 1px));
    }
    .linearGradientTopRight{
        position: absolute;
        background: linear-gradient(to top right, transparent calc(50% - 1px), currentColor, transparent calc(50% + 1px));
    }
    .aa{
    	border-left:1px solid currentColor;
    }
</style>
