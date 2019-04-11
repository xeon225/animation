<template>
  <div id="ps4">
  	<div class="pos-r text-darker" :style="'width:'+Width+'px;height:'+Height+'px;'">
  		<div v-for="items in path">
  			<div v-for="(item,$index) in items.item" v-if="$index + 1 < items.item.length" class="an_1" :class="linearGradient(item,items.item[$index+1]) ? 'linearGradientTopRight' : 'linearGradientLeftTop'" :style="pathLine(item,items.item[$index+1]) + durationDelay($index,items.item.length)"></div>
  		</div>
  	</div>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
  	name: 'Ps4',
  	data () {
	    return {
	    	Width:900,
	    	Height:500,
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
		    			{x:563.9, y:361.4 ,o:'top left'}
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
	    	times:5
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
        durationDelay:function(index,length){
            var index = index + 1, 
                length = length - 1,
                duration = 0,
                delay = 0,
                style = ''

            duration = (this.times / length);
            delay = duration * (index - 1);

            duration = 'animation-delay:' + duration * (index - 1) + 's;';
            delay = 'animation-duration:' + (this.times / length) + 's;';

            style = duration + delay;
            return style
        },
        linearGradient:function(c1,c2){
        	var c1 = c1, 		//坐标起点 x y
                c2 = c2,		//坐标终点 x y
                linearGradient = false //线性渐变的方向 false从左下到右上，true 从左上到右下 
            linearGradient = (c1.x>c2.x === c1.y>c2.y);
            return linearGradient
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

    @keyframes scale_1
	{
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}

</style>
