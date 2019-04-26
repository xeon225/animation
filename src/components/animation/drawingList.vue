<template>
  <div id="drawingList">
    <div class="flex-container left">
      <div class="pos-r text-light margin50 flex-container center" :style="'width:'+(Width+namePx*2)+'px;' + 'height:'+(Width+namePx*2)+'px;'">
        
        <div class="pos-r text-light" :style="'width:'+Width+'px;' + 'height:'+Width+'px;'">
          <div class="pos-a top0 left0 right0 bottom0" :style="'border-radius:50%;transform: rotate('+$indexs*pi(round,piN)+'deg);'" v-for="(itemP,$indexs) in piN">
            <div class="pos-a" :style="'width:'+item.width+'px;' + 'height:'+item.height+'px;top:'+item.top+'px;left:'+item.left+'px;border-radius:50%;'" v-for="(item,$index) in dataItem(Width,pi(round,piN),cx,cy,r,rItems)">
              <div class="pos-a aa" :style="'width:'+item.data.width+'px;' + 'height:'+item.data.height+'px;' + 'top:'+item.data.top+'px;' + 'left:'+item.data.left+'px;'">
                <div class="linearGradientTopRight left0 right0" :style="'height:'+ item.data.topHeight + 'px'">
                </div>
                <div class="linearGradientLeftTop left0 right0" :style="'top:' + item.data.topHeight + 'px;' + 'height:calc(100% - '+ item.data.topHeight + 'px);'">
                </div>
              </div>
            </div>
          </div>

          <!-- 能力表 -->
          <div class="pos-a top0 left0 right0 bottom0 text-red">
            <!-- 能力值 -->
            <div class="transition_an bg-red" :style="'clip-path:polygon('+polygonDefault+');'+showLstyle">
            </div>
            <!-- 能力表外线 -->
            <div class="polygonLine pos-a top0 left0" :class="showL && 'an_show'" style="width:100%;height:100%;opacity:0">
              <div v-for="(item,$index) in dataNew" v-if="($index + 1) < dataNew.length" :class="item.lg ? 'linearGradientTopRight' : 'linearGradientLeftTop'" :style="item.style"></div>
            </div>
            <!-- 外线连接点 -->
            <div class="polygonLine pos-a top0 left0" :class="showL && 'an_show'"  style="width:100%;height:100%;opacity:0">
              <div class="dian pos-a" v-if="$index+1 < dianData.length" v-for="(item,$index) in dianData" :style="'top:'+item.y+'px;left:'+item.x+'px;'">
              </div>
            </div>
          </div>
        </div>
        <div class="pos-a top0 left0 right0 bottom0 text-red" :class="showL && 'an_show'" style="opacity:0">
            <div class="pos-a name text-center" :style="'top:' + pathChart(pi(round,piN)*$index,cx+namePx,cy+namePx,r+namePx).top + 'px;left:'+pathChart(pi(round,piN)*$index,cx+namePx,cy+namePx,r+namePx).left+'px'" v-for="(item,$index) in dItems">
              <span class="fs-16" v-text="item.name"></span>
            </div>
          </div>
      </div>
      <div :class="showL && 'an_show'" style="opacity:0">
        <div class="" v-for="(item,$index) in dItems">
          <div class="flex-container left fs-16">
            <div style="width:50px;" v-text="item.name"></div>
            <div class="marginl30" v-text="item.item"></div>
          </div>
        </div>
      </div>
      
    </div>
    
    <div class="margin50 text-center fs-20" :style="'width:'+(Width+namePx*2)+'px;text-decoration:underline'" @click="CapabilityTable(dItems,pi(round,piN),cx,cy,r),showL=true">能力表</div>

</div>
</template>

<script>
import Vue from 'vue';


export default {
  	name: 'DrawingList',
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
            name:'年龄'
          },
          {
            item:30,
            name:'力量'
          },
          {
            item:70,
            name:'攻击力'
          },
          {
            item:80,
            name:'防御力'
          },
          {
            item:50,
            name:'灵活'
          },
          {
            item:60,
            name:'技术'
          }
        ]
	    }
  	},
  	computed: {
  		dataNew(){
        
        let items = this.lineData(this.dItems,this.pi(this.round,this.piN),this.cx,this.cy,this.r);
          items.forEach((item,index)=>{
            if (items[index+1]) {
              var lG = this.linearGradient(item,items[index+1])
              var path = this.pathLine(item,items[index+1])
            }
            item['lg'] = lG;
            item['style'] = path;
          })
        return items
      },
      dianData(){
        let items = this.lineData(this.dItems,this.pi(this.round,this.piN),this.cx,this.cy,this.r);
        return items
      },
      piN(){
        return this.dItems.length     //角度数
      },
      polygonDefault(){
        var style = '',
            p = '50% 50%',
            d = this.piN;
            for(var i=0; i<d; i++){
              style += p + ((i+1)<d?',':'');
            }
            console.log(style)
        return style
      }
  	},
	methods: {
        dataItem(w,pi,cx,cy,r,data){
          var width = w,
              cx = cx,                //圆心x
              cy = cy,
              pi = pi,
              r = r,
              d = data,
              styleD = [],
              styleObj = {
                width:'',
                height:'',
                top:'',
                left:'',
                data:{
                  width:'',
                  height:'',
                  top:'',
                  left:'',
                  topHeight:''
                }
              }
          d.forEach((item,index)=>{
            styleObj.width = width * item;   //多边形dom宽
            styleObj.height = width * item;   //多边形dom高
            styleObj.top = width/2 * (1-item);   //多边形dom top
            styleObj.left = width/2 * (1-item);   //多边形dom left

            // pathChart(pi,cx*item,cy*item,r*item)[0]-(Width/2)*item)
            styleObj.data.width = this.pathChart(pi,cx*item,cy*item,r*item).left - width/2*item;
            styleObj.data.height = r*item;
            styleObj.data.top = 0;
            styleObj.data.left = cx*item;
            styleObj.data.topHeight = this.pathChart(pi,cx*item,cy*item,r*item).top;
            styleD.push(JSON.parse(JSON.stringify(styleObj)))
          })
          // console.log(styleD)
          return styleD
        },
        //取角度
        pi:function(r,piN){
          var n = 0;
          if (piN > 2 && piN < 91) {
            n = parseInt(r/piN)
          } else {
            n = 60
          }
          return n
        },
        //图表
        CapabilityTable:function(data,pi,cx,cy,r){
          var d = data,
              n = 100,
              polygon = '',
              px = 'px',
              x = r/n;      //数表比例

          d.forEach((item,index)=>{
            polygon += this.pathChart(pi*(index+1),cx,cx,x*item.item).left + px + ' ' + this.pathChart(pi*(index+1),cx,cx,x*item.item).top + px + (index+1 < data.length ? ',':'')
            
          })
          polygon = 'width:100%;height:100%;clip-path: polygon('+polygon+');background:rgba(255,0,0,.4)'
          this.showLstyle = polygon;
        },
        lineData:function(data,pi,cx,cy,r){
          var d = data,
              n = 100,
              polygon = '',
              px = 'px',
              lineData = {},
              data = [],
              top = '',
              left = '',
              x = r/n;      //数表比例

          d.forEach((item,index)=>{
            lineData['x'] = this.pathChart(pi*(index+1),cx,cx,x*item.item).left;
            lineData['y'] = this.pathChart(pi*(index+1),cx,cx,x*item.item).top
            if (index == 0) {
              left = lineData['x'];
              top = lineData['y'];
            }
            data.push(JSON.parse(JSON.stringify(lineData)))

            if (d.length == (index + 1)) {
              lineData['x'] = left;
              lineData['y'] = top;
              data.push(JSON.parse(JSON.stringify(lineData)))
            }
            // console.log(data)
          })
          
          return data
        },
        linearGradient:function(c1,c2){
          var c1 = c1,    //坐标起点 x y
                c2 = c2,    //坐标终点 x y
                linearGradient = false //线性渐变的方向 false从左下到右上，true 从左上到右下 
            linearGradient = (c1.x>c2.x === c1.y>c2.y);
            return linearGradient
        },
        pathChart:function(num,cx,cy,r){
            var cx = cx,                //圆心x
                cy = cy,                //
                r = r,
                a = num,
                aa = a*Math.PI/180,			//转成角度
                item = {}

                item = {'left':cx+(Math.sin(aa)*r),'top':cy-(Math.cos(aa)*r)}
                // console.log(item)
            return item
        },
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
          

          console.log(c1.x,c2.x)
          //组成style
          path = top + left + width + height + border
          return path
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
                dd = r+'px '+r+'px ,'
                    +r+'px '+y+'px ,',
                ss = r+' '+r+' ,'
                    +r+' '+y+' ,';
                if(a>270){
                    dd += r*2+'px '+y+'px ,'+r*2+'px '+r*2+'px ,'
                        +y+'px '+r*2+'px ,'
                        +y+'px '+(ly-(Math.cos(aa)*r))+'px ,'
                        +(lx+(Math.sin(aa)*r))+'px '+(ly-(Math.cos(aa)*r))+'px'
                }else if(a>180){
                dd += r*2+'px '+y+'px ,'+r*2+'px '+r*2+'px ,'+(ly-(Math.cos(aa)*r))+'px '+r*2+'px ,'+(lx+(Math.sin(aa)*r))+'px '+r*2+'px ,'+(lx+(Math.sin(aa)*r))+'px '+(ly-(Math.cos(aa)*r))+'px'
                }else if(a>90){
                    dd += r*2+'px '+y+'px ,'+r*2+'px '+(ly-(Math.cos(aa)*r))+'px ,'+(lx+(Math.sin(aa)*r))+'px '+(ly-(Math.cos(aa)*r))+'px'
                }else{
                    dd += (lx+(Math.sin(aa)*r))+'px '+y+'px ,'+(lx+(Math.sin(aa)*r))+'px '+(ly-(Math.cos(aa)*r))+'px'
                }
                dd = 'clip-path: polygon('+dd+');'
            return dd
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .line{
      background: red;
      height:100px;
      width: 250px;
    }
    .line:before{
      content: '';
      position: absolute;
      top:1px;
      left:0;
      background: rgba(255,255,255,.9);
      height:100%;
      width: 100%;
    }
   	.linearGradientLeftTop{
        position: absolute;
        background: linear-gradient(to left top, transparent calc(50% - 0.5px), currentColor, transparent calc(50% + 0.5px));
    }
    .linearGradientTopRight{
        position: absolute;
        background: linear-gradient(to top right, transparent calc(50% - 0.5px), currentColor, transparent calc(50% + 0.5px));
    }
    .polygonLine .linearGradientLeftTop{
        position: absolute;
        background: linear-gradient(to left top, transparent calc(50% - 2px), currentColor, transparent calc(50% + 2px));
    }
    .polygonLine .linearGradientTopRight{
        position: absolute;
        background: linear-gradient(to top right, transparent calc(50% - 2px), currentColor, transparent calc(50% + 2px));
    }
    .polygonLine .dian:before{
      content: '';
      position: absolute;
      width:10px;
      height:10px;
      border-radius:50%;
      background: currentColor;
      left:-5px;
      top:-5px;
      border:1px solid #fff;
    }
    .aa{
    	outline-left:1px solid currentColor;
    }
    .transition_an{
      transition:-webkit-clip-path 0.5s linear;
    }
    .an_6{
      clip-path:polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%);
    }
    .an_show{
      transition-property:opacity;
      transition-duration:0.2s;
      transition-timing-function:linear;
      transition-delay: 0.5s;
      display:block;
      opacity: 1 !important;
    }
    .name span{
      top:-10px;
      left:-25px;
      width: 50px;
      height:20px;
      position: absolute;
      display:block;
    }
/*    .xbox_logo{
      background: url('../../assets/xbox_logo.jpeg') no-repeat center;
      background-size:100% 100%;
    }
    .xbox_top:before{
      content:'';
      position: absolute;
      top:0;
      width: 100%;
      height: 100%;
      background: white;
      clip-path: circle(50% at 18% 57%);
    }
    .xbox_top:after{
      content:'';
      position: absolute;
      top:0;
      width: 100%;
      height: 100%;
      background: white;
      clip-path: circle(50% at 82% 57%);
    }
    .xbox_left{
      right: 50%;
      top: 8.5%;
      border-radius:50%;
    }
    .xbox_right{
      left: 50%;
      top: 8.5%;
      border-radius:50%;
    }
    .xbox_bottom:before{
      content:'';
      position: absolute;
      top: 25%;
      left: 6%;
      width: 87.5%;
      height: 143%;
      background-color: white;
      border-radius:50%   50%  50%  50%  / 60%   60%   40%  40%;
    }
    .xbox_bottom:after{
      content:'';
      position: absolute;
      top:58%;
      width:100%;
      height:100%;
      border-radius: 68.5% 0;
      transform: rotate(-45deg);
      background: black;
    }*/
</style>
