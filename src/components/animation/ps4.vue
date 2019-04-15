<template>
  <div id="ps4">
  	<div class="pos-r">
  		 <div class="pos-r text-darker" :style="'width:'+Width+'px;height:'+Height+'px;'">
	  		<div v-for="items in dataNew">
	  			<div v-for="(item,$index) in items.item" v-if="($index + 1) < items.item.length" class="an_1" :class="item.lg ? 'linearGradientTopRight' : 'linearGradientLeftTop'" :style="item.style"></div>
	  		</div>
	  		<div style="offset-path:path('M1540,622.5h58.4c0,0,21.8,10.1,0,21.8h-39.5c0,0-11.1-1.2-11.5,11.5v13.8')">
	  			
	  		</div>
	  	</div>
<!-- 	  	<div class="pos-a left0 top0 an_2" :style="'width:'+Width+'px;height:'+Height+'px;z-index:-1;animation-delay: '+(times+0.5)+'s;'">
	  		<div class="bg-red bgImages_2 pos-a top0 left0 bottom0 right0"  :style="polygon(items.item)" v-for="(items,$index) in ps4_path_polygon"></div>
	  	</div> -->
  	</div>
	<!-- <img src="../../assets/mayi.svg" alt=""> -->
<!--   	<div>
  		<div class="pos-r" :style="'width:'+Width+'px;height:'+Height+'px;'" v-for="(items,$indexs) in path">
			<div class="pos-a bg-red" v-for="(item,$index) in items.item" :style="position(item)+'width:10px;height:10px;'">
				{{position(item)}}
			</div>
		</div>
  	</div> -->
  		

  	</div>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
  	name: 'Ps4',
  	data () {
	    return {
	    	Width:1920,
	    	Height:800,
	    	path:[			//从svg 提取path线性路径坐标    l 线性渐变的方向 false从左下到向上，true 从左上到右下 
	    		{
	    			item:[
		    			{x:563.9, y:361.4 ,o:'bottom left'},
		    			{x:582, y:303.3 ,o:'bottom left'},
		    			{x:892.9, y:103.1 ,o:'top right'},
		    			{x:876.4, y:156.5 ,o:'top right'},
		    			{x:563.9, y:361.4 ,o:'top right'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:892.9, y:103.1 ,o:'bottom right'},
		    			{x:573.4, y:40.3 ,o:'top right'},
		    			{x:571.8, y:42.7 ,o:'bottom right'},
		    			{x:568.1, y:41.7 ,o:'bottom left'},
		    			{x:569.7, y:38.7 ,o:'bottom right'},
		    			{x:388.1, y:1 ,o:'top right'},
		    			{x:41.8, y:162.8 ,o:'top left'},
		    			{x:235.7, y:212.2 ,o:'top left'},
		    			{x:582, y:303.3 ,o:'bottom left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:225.8, y:271.4 ,o:'bottom left'},
		    			{x:241.7, y:213.8 ,o:'bottom left'},
		    			{x:573.4, y:40.3 ,o:'bottom left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:221.1, y:269.8 ,o:'bottom left'},
		    			{x:237.7, y:212.8 ,o:'bottom left'},
		    			{x:569.7, y:38.7 ,o:'bottom left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:41.8, y:162.8 ,o:'top right'},
		    			{x:23.7, y:217.5 ,o:'top left'},
		    			{x:563.9, y:361.4 ,o:'bottom left'},
		    			{x:582, y:303.3 ,o:'bottom left'},
	             	]
	    		},
	    		{
	    			item:[
		    			{x:51.4, y:224.8 ,o:'top left'},
		    			{x:51.4, y:235.8 ,o:'top left'},
		    			{x:313.6, y:306.9 ,o:'top left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:848.9, y:175.1 ,o:'top left'},
		    			{x:869.1, y:178.7 ,o:'top right'},
		    			{x:855, y:232.3 ,o:'top right'},
		    			{x:537.8, y:447.3 ,o:'right bottom'},
		    			{x:407.9, y:410.3 ,o:'right bottom'},
		    			{x:222.6, y:357.6 ,o:'right bottom'},
		    			{x:201.2, y:351.5 ,o:'top left'},
		    			{x:202.8, y:346.4 ,o:'top right'},
		    			{x:196, y:351.5 ,o:'right bottom'},
		    			{x:1.2, y:297 ,o:'bottom left'},
		    			{x:16.9, y:242.6 ,o:'bottom left'},
		    			{x:48.9, y:224.8 ,o:'top right'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:16.9, y:242.6 ,o:'bototm left'},
		    			{x:555, y:388.6 ,o:'bottom left'},
		    			{x:869.1, y:178.7 ,o:'bototm left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:547, y:356.9 ,o:'top right'},
		    			{x:547, y:369.8 ,o:'right bottom'},
		    			{x:395.4, y:330.7 ,o:'right bottom'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:196, y:351.5 ,o:'bottom left'},
		    			{x:211.8, y:295.5 ,o:'bottom left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:201.2, y:351.5 ,o:'bottom left'},
		    			{x:218.1, y:297.4 ,o:'bottom left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:323.9, y:300.4 ,o:'top right'},
		    			{x:323.9, y:311.2 ,o:'left top'},
		    			{x:345.5, y:316.7 ,o:'bottom left'},
		    			{x:345.5, y:305.7 ,o:'right bottom'},
		    			{x:323.9, y:300.4 ,o:'right bottom'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:326, y:308.6 ,o:'left top'},
		    			{x:343.3, y:312.5 ,o:'left top'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:370.2, y:313.1 ,o:'top right'},
		    			{x:370.2, y:323.8 ,o:'left top'},
		    			{x:391.8, y:329.3 ,o:'bottom left'},
		    			{x:391.8, y:318.3 ,o:'right bottom'},
		    			{x:370.2, y:313.1 ,o:'right bottom'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:372.3, y:321.2 ,o:'left top'},
		    			{x:389.6, y:325.1 ,o:'left top'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:477.6, y:297.2 ,o:'left top'},
		    			{x:491.6, y:301.8 ,o:'top right'},
		    			{x:487.6, y:308.2 ,o:'bottom right'},
		    			{x:474.6, y:304.2 ,o:'top right'},
		    			{x:470.6, y:312.2 ,o:'bottom left'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:519.4, y:310.2 ,o:'top right'},
		    			{x:510.4, y:306.8 ,o:'top right'},
		    			{x:502.6, y:321.2 ,o:'top right'},
		    			{x:493.6, y:318.2 ,o:'left top'}
	             	]
	    		},
	    		{
	    			item:[
		    			{x:533.2, y:330.7 ,o:'left bottom'},
		    			{x:538.9, y:315.8 ,o:'right top'},
		    			{x:519.2, y:322.2 ,o:'top left'},
		    			{x:538.1, y:328.8 ,o:'top right'}
	             	]
	    		}

	    		//{x:},
	    	],
	    	ps4_path:[
	    		{
	    			item:[
	    				{x:1540, y:422.5 ,o:'top left'},
	    				{x:1608, y:422.5 ,o:'top left'},
	    				{x:1608, y:444 ,o:'top right'},
	    				{x:1547, y:444 ,o:'top right'},
	    				{x:1547, y:470 ,o:'top right'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1703, y:422.5 ,o:'top right'},
	    				{x:1660, y:422.5 ,o:'top right'},
	    				{x:1660, y:465 ,o:'top right'},
	    				{x:1619, y:465 ,o:'top right'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1785.9, y:460.7 ,o:'top right'},
	    				{x:1705, y:460.7 ,o:'bottom left'},
	    				{x:1770.9, y:422.5 ,o:'top right'},
	    				{x:1770.9, y:470 ,o:'top right'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1063.5, y:511.5 ,o:'top left'},
	    				{x:1063.5, y:541.6 ,o:'bottom left'},
	    				{x:1164.3, y:541.6 ,o:'bottom left'},
	    				{x:1164.3, y:511.5 ,o:'top right'},
	    				{x:1063.5, y:511.5 ,o:'top right'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1219.2, y:511.5 ,o:'top left'},
	    				{x:1219.2, y:541.6 ,o:'bottom left'},
	    				{x:1320, y:541.6 ,o:'bottom left'},
	    				{x:1320, y:511.5 ,o:'top right'},
	    				{x:1219.2, y:511.5 ,o:'top right'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1071.1, y:511.5 ,o:'top left'},
	    				{x:1071.1, y:541.6 ,o:'bottom left'},
	    				{x:1156.7, y:541.6 ,o:'bottom left'},
	    				{x:1156.7, y:511.5 ,o:'top right'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1226.8, y:511.5 ,o:'top left'},
	    				{x:1226.8, y:541.6 ,o:'bottom left'},
	    				{x:1312.3, y:541.6 ,o:'bottom left'},
	    				{x:1312.3, y:511.5 ,o:'top right'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1078.2, y:530 ,o:'top left'},
	    				{x:1150.7, y:530 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1233.9, y:530 ,o:'top left'},
	    				{x:1306.4, y:530 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:838.8, y:40 ,o:'top right'},
	    				{x:769.8, y:366.4 ,o:'bottom right'},
	    				{x:743.3, y:366.4 ,o:'bottom left'},
	    				{x:821.1, y:40 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1788.9, y:509.7 ,o:'top right'},
	    				{x:1776.5, y:539.8 ,o:'bottom right'},
	    				{x:1344.8, y:539.8 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1045.8, y:539.8 ,o:'top right'},
	    				{x:134.6, y:539.8 ,o:'bottom right'},
	    				{x:124, y:509.7 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1903.9, y:587.5 ,o:'top right'},
	    				{x:766.3, y:587.5 ,o:'top left'},
	    				{x:766.3, y:769.8 ,o:'bottom left'},
	    				{x:1918.1, y:769.8 ,o:'bottom left'},
	    				{x:1903.9, y:587.5 ,o:'bottom right'},
	    				{x:1831.4, y:509.7 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:14.3, y:587.5 ,o:'top left'},
	    				{x:739.7, y:587.5 ,o:'top left'},
	    				{x:739.7, y:769.8 ,o:'bottom right'},
	    				{x:1.9, y:769.8 ,o:'bottom left'},
	    				{x:14.3, y:589.3 ,o:'bottom left'},
	    				{x:83.3, y:509.7 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1888, y:366.4 ,o:'top left'},
	    				{x:30.3, y:366.4 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:743.6, y:368.2 ,o:'top left'},
	    				{x:743.6, y:509.7 ,o:'bottom right'},
	    				{x:16.1, y:509.7 ,o:'bottom left'},
	    				{x:26.7, y:362.8 ,o:'bottom left'},
	    				{x:431.9, y:30.2 ,o:'bottom left'},
	    				{x:821.1, y:30.2 ,o:'top right'},
	    				{x:821.1, y:39.1 ,o:'bottom left'},
	    				{x:838.8, y:39.1 ,o:'bottom right'},
	    				{x:838.8, y:30.2 ,o:'bottom left'},
	    				{x:1459.8, y:30.2 ,o:'top left'},
	    				{x:1889.7, y:366.4 ,o:'top left'},
	    				{x:1898.6, y:509.7 ,o:'bottom right'},
	    				{x:770, y:509.7 ,o:'bottom right'},
	    				{x:770, y:368.2 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:739.7, y:756.3 ,o:'top left'},
	    				{x:766.3, y:756.3 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:766.3, y:595.5 ,o:'top left'},
	    				{x:739.7, y:595.5 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:743.6, y:485.8 ,o:'top left'},
	    				{x:770, y:485.8 ,o:'bottom left'}
	    			]
	    		},
	    		{
	    			item:[
	    				{x:1771.2, y:551.3 ,o:'top left'},
	    				{x:138.2, y:551.3 ,o:'bottom left'}
	    			]
	    		}
	    	],


	    	// 838.8,240 769.8,566.4 743.3,566.4 821.1,240    
	    	times:1,
	    	polygonNo:[1,2,5,7],
	    	ps4_path_polygon:[
	    		{
	    			item:[
	    				{x:16.1, y:509.7 ,o:'bottom left'},
	    				{x:26.7, y:362.8 ,o:'bottom left'},
	    				{x:431.9, y:30.2 ,o:'bottom left'},
	    				{x:821.1, y:30.2 ,o:'top right'},
	    				{x:821.1, y:39.1 ,o:'bottom left'},
	    				{x:838.8, y:39.1 ,o:'bottom right'},
	    				{x:838.8, y:30.2 ,o:'bottom left'},
	    				{x:1459.8, y:30.2 ,o:'top left'},
	    				{x:1889.7, y:366.4 ,o:'top left'},
	    				{x:1898.6, y:509.7 ,o:'bottom right'},
	    				{x:1831.4, y:509.7 ,o:'bottom left'},
	    				{x:1903.9, y:587.5 ,o:'bottom right'},
	    				{x:1918.1, y:769.8 ,o:'bottom left'},
	    				{x:766.3, y:769.8 ,o:'bottom left'},
	    				{x:766.3, y:756.3 ,o:'bottom left'},
	    				{x:739.7, y:756.3 ,o:'top left'},
	    				{x:739.7, y:769.8 ,o:'bottom right'},
	    				{x:1.9, y:769.8 ,o:'bottom left'},
	    				{x:14.3, y:589.3 ,o:'bottom left'},
	    				{x:83.3, y:509.7 ,o:'bottom left'}
	    			]
	    		}
	    	]
	    }
  	},
  	computed: {
  		dataNew(){
  			let items = this.ps4_path;
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
        pathLine:function(c1,c2){
            var c1 = c1, 		//坐标起点 x y
                c2 = c2,		//坐标终点 x y
                top = '',		//斜线盒子top值
                right = '',		//斜线盒子right值
                width = '',		//斜线盒子width值
                height = '',	//斜线盒子height值
                border = '',
                origin = c1.o,
                px = 'px;',
                path = ''

            //取两个y坐标最小值
            top = 'top:' + Math.min(c1.y,c2.y) + px;
            //画布宽度值减两个x坐标最大值
            right = 'right:' + (this.Width - Math.max(c1.x,c2.x)) + px;
            //取两个x坐标间距离
            width = 'width:' + Math.abs(c1.x - c2.x) + px;
            //取两个yx坐标间距离
            height = 'height:' + Math.abs(c1.y - c2.y) + px;
            //缩放展开所需要的偏移量
            origin = 'transform-origin:' + origin + ';';
            //判断宽度为0或高度为0 设置border为1px实线
            border = (c1.x == c2.x) ? 'border:1px solid currentColor;' : (c1.y == c2.y) ? 'border:1px solid currentColor;' : '';

            // console.log(c1.l,(c1.x>c2.x && c1.y>c2.y))
            


            //组成style
            path = top + right + width + height + border + origin
            return path
        },
        durationDelay:function(c1,c2,index,length,sum,t){
        	var c1 = c1, 		//坐标起点 x y
                c2 = c2,		//坐标终点 x y
            	index = index + 1, 
                length = length - 1,
                width = Math.abs(c1.x - c2.x),		//斜线盒子width值
                height = Math.abs(c1.y - c2.y),	//斜线盒子height值
                duration = 0,
                delay = 0,
                sum = sum,
                style = ''

            // console.log(t)
            // duration = (this.times / length);
            // delay = duration * (index - 1);
            // duration = duration * (index - 1);
            // delay = this.times / length;

            //勾股定理 求c长
            duration = (Math.sqrt(width*width+height*height)/sum)*this.times;

            //当不是第一个开始动画  上一个动画的等待时间+运行时间赋予 当前动画等待时间
            if (index > 1) {
            	delay = Number(t[0]) + Number(t[1]);
            } else{
            	delay = 0;
            }
            
            // console.log((Math.sqrt(width*width+height*height)/sum)*this.times,duration,delay)
            // console.log(t)
            

            // style = duration + delay;
            return [duration,delay]
        },
        linearGradient:function(c1,c2){
        	var c1 = c1, 		//坐标起点 x y
                c2 = c2,		//坐标终点 x y
                linearGradient = false //线性渐变的方向 false从左下到右上，true 从左上到右下 
            linearGradient = (c1.x>c2.x === c1.y>c2.y);
            return linearGradient
        },
		polygon:function(item){
        	var item = item,
        		polygon = '',
        		px = 'px',
        		path = ''
        	for (var i = 0; i < item.length; i++){

        		path += item[i].x + px + ' ' + item[i].y + px + ((i == (item.length - 1)) ? '' : ',')
        	}
        	polygon = 'clip-path:polygon(' + path + ')';
        	return polygon
        },
        Ptheorem:function(item){
        	var item = item,
        		c1 = '',
        		c2 = '',
        		width = '',		//斜线盒子width值
                height = '',	//斜线盒子height值
        		sum = 0
        	for (var i = 0; i < item.length; i++){
        		if ((i+1) < item.length) {
	        		width = Math.abs(item[i].x - item[i+1].x);
	        		height = Math.abs(item[i].y - item[i+1].y);
	        		sum += Math.sqrt(width*width+height*height);
	        		
        		}

        	}
        	// console.log(sum)
        	return sum
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   	.linearGradientLeftTop{
        position: absolute;
        background: linear-gradient(to left top, transparent calc(50% - 2px), currentColor, transparent calc(50% + 2px));
        transform-origin:0 100%;
    }
    .linearGradientTopRight{
        position: absolute;
        background: linear-gradient(to top right, transparent calc(50% - 2px), currentColor, transparent calc(50% + 2px));
        transform-origin:0 0;
    }
    .bgImages{
    	/*background: url(../../assets/mayi.svg) no-repeat center;*/
    }
    .bgImages:after{
    	content: '';
    	position: absolute;
    	background: url(../../assets/mayi.svg) no-repeat center;
	    transform: skew(-45deg,15deg) scale(1.2,0.8) translate(-5%,-5%);
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
    }
    .bgImages_2:after{
    	content: '';
    	position: absolute;
    	background: url(../../assets/ps4_2.png) no-repeat top center;
    	background-size: 100% auto;
	    left: 0;
	    right: 0;
	    top: 0;
	    bottom: 0;
    }
    .an_1{
    	transform: scale(0);
    	animation: scale_1 linear;
    	animation-fill-mode: forwards;
    }
/*    .an_1:after{
    	content:'';
    	position: absolute;
    	top:0;
    	left:0;
    	right:0;
    	bottom:0;
    	background: rgba(0,0,0,.2);
    }*/
	.an_2{
		opacity: 0;
    	animation: opacity linear;
    	
    	animation-duration: .5s;
    	animation-fill-mode: forwards;
	}
    @keyframes scale_1
	{
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes opacity
	{
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
