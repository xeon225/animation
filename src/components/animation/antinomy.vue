<template>
  <div id="antinomy">
    <div class="pos-r" style="width: 2000px;height:1148px;" v-show="false">
      <div class="pos-r" style="width:186px;height:200px;">
        <div class="pos-a paluosi" :style="arrData(item,$index)" v-for="(item,$index) in dItems">
          <div></div>
        </div>
      </div>
      <div class="pos-a top0 right0 left0 bottom0 text-dark" :style="'z-index:'+zI+zI">
        <div class="pos-a top0 right0 left0 bottom0 linearGradientOne"></div>
        <div class="pos-a top0 right0 left0 bottom0 linearGradientTwo"></div>
        <div class="pos-a top0 right0 left0 bottom0 linearGradientThree"></div>
      </div>
    </div>
    <div class="padding50">
      <div class="flex-container">
        <div class="paddingb50">
          <div class="flex-container left">
            已选择颜色
            <div class="marginl20 marginr40 border" :style="'background:'+colors+';width:40px;height:40px;'"></div>
            </div>
            <div class="flex-container left margint20">
              <div v-for="item in colorList">
                <div class="marginr40 border" :style="'background:'+item+';width:40px;height:40px;border-radius:50%;'" @click="colors = item"></div>
              </div>
            </div>
          
        </div>
        <div class="flex-container left paddingb50">
          <div class="marginr40">描边</div>
        </div>
      </div>
      <svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 635.09" style="width: 700px;">
        <defs></defs>
        <g>
          <polygon :style="'fill:'+color" points="600 375.28 600 433.01 550 404.15 600 375.28" @click="bgColor(colors)"/>
         <polygon class="cls-1" points="600 433.01 600 490.75 550 461.88 600 433.01" />
         <polygon class="cls-1" points="350 461.88 300 490.75 300 433.01 350 461.88" />
         <polygon class="cls-1" points="300 375.28 250 404.15 250 346.41 300 375.28" />
         <polygon class="cls-1" points="400 375.28 350 404.15 350 346.41 400 375.28" />
         <polygon class="cls-1" points="200 433.01 200 490.75 150 461.88 200 433.01" />
         <polygon class="cls-1" points="50 57.74 0 86.6 0 28.87 50 57.74" />
         <polygon class="cls-1" points="100 144.34 100 202.07 50 173.21 100 144.34" />
         <polygon class="cls-1" points="200 86.6 200 144.34 150 115.47 200 86.6" />
         <polygon class="cls-1" points="450 173.21 450 230.94 400 202.07 450 173.21" />
         <polygon class="cls-1" points="700 548.49 700 606.22 650 577.35 700 548.49" />
         <polygon class="cls-1" points="700 490.75 700 548.49 650 519.62 700 490.75" />
         <polygon class="cls-1" points="700 433.01 700 490.75 650 461.88 700 433.01" />
         <polygon class="cls-1" points="700 375.28 700 433.01 650 404.15 700 375.28" />
         <polygon class="cls-1" points="700 317.54 700 375.28 650 346.41 700 317.54" />
         <polygon class="cls-1" points="700 259.81 700 317.54 650 288.68 700 259.81" />
         <polygon class="cls-1" points="700 202.07 700 259.81 650 230.94 700 202.07" />
         <polygon class="cls-1" points="700 144.34 700 202.07 650 173.21 700 144.34" />
         <polygon class="cls-1" points="700 86.6 700 144.34 650 115.47 700 86.6" />
         <polygon class="cls-1" points="700 28.87 700 86.6 650 57.74 700 28.87" />
         <polygon class="cls-1" points="700 28.87 650 57.74 650 0 700 28.87" />
         <polygon class="cls-1" points="700 86.6 650 115.47 650 57.74 700 86.6" />
         <polygon class="cls-1" points="700 144.34 650 173.21 650 115.47 700 144.34" />
         <polygon class="cls-1" points="700 202.07 650 230.94 650 173.21 700 202.07" />
         <polygon class="cls-1" points="700 259.81 650 288.68 650 230.94 700 259.81" />
         <polygon class="cls-1" points="700 317.54 650 346.41 650 288.68 700 317.54" />
         <polygon class="cls-1" points="700 375.28 650 404.15 650 346.41 700 375.28" />
         <polygon class="cls-1" points="700 433.01 650 461.88 650 404.15 700 433.01" />
         <polygon class="cls-1" points="700 490.75 650 519.62 650 461.88 700 490.75" />
         <polygon class="cls-1" points="700 548.49 650 577.35 650 519.62 700 548.49" />
         <polygon class="cls-1" points="700 606.22 650 635.09 650 577.35 700 606.22" />
         <polygon class="cls-1" points="650 577.35 650 635.09 600 606.22 650 577.35" />
         <polygon class="cls-1" points="650 519.62 650 577.35 600 548.49 650 519.62" />
         <polygon class="cls-1" points="650 461.88 650 519.62 600 490.75 650 461.88" />
         <polygon class="cls-1" points="650 404.15 650 461.88 600 433.01 650 404.15" />
         <polygon class="cls-1" points="650 346.41 650 404.15 600 375.28 650 346.41" />
         <polygon class="cls-1" points="650 288.68 650 346.41 600 317.54 650 288.68" />
         <polygon class="cls-1" points="650 230.94 650 288.68 600 259.81 650 230.94" />
         <polygon class="cls-1" points="650 173.21 650 230.94 600 202.07 650 173.21" />
         <polygon class="cls-1" points="650 115.47 650 173.21 600 144.34 650 115.47" />
         <polygon class="cls-1" points="650 57.74 650 115.47 600 86.6 650 57.74" />
         <polygon class="cls-1" points="650 0 650 57.74 600 28.87 650 0" />
         <polygon class="cls-1" points="650 57.74 600 86.6 600 28.87 650 57.74" />
         <polygon class="cls-1" points="650 115.47 600 144.34 600 86.6 650 115.47" />
         <polygon class="cls-1" points="650 173.21 600 202.07 600 144.34 650 173.21" />
         <polygon class="cls-1" points="650 230.94 600 259.81 600 202.07 650 230.94" />
         <polygon class="cls-1" points="650 288.68 600 317.54 600 259.81 650 288.68" />
         <polygon class="cls-1" points="650 346.41 600 375.28 600 317.54 650 346.41" />
         <polygon class="cls-1" points="650 404.15 600 433.01 600 375.28 650 404.15" />
         <polygon class="cls-1" points="650 461.88 600 490.75 600 433.01 650 461.88" />
         <polygon class="cls-1" points="650 519.62 600 548.49 600 490.75 650 519.62" />
         <polygon class="cls-1" points="650 577.35 600 606.22 600 548.49 650 577.35" />
         <polygon class="cls-1" points="600 548.49 600 606.22 550 577.35 600 548.49" />
         <polygon class="cls-1" points="600 490.75 600 548.49 550 519.62 600 490.75" />
         <polygon class="cls-1" points="600 317.54 600 375.28 550 346.41 600 317.54" />
         <polygon class="cls-1" points="600 259.81 600 317.54 550 288.68 600 259.81" />
         <polygon class="cls-1" points="600 202.07 600 259.81 550 230.94 600 202.07" />
         <polygon class="cls-1" points="600 144.34 600 202.07 550 173.21 600 144.34" />
         <polygon class="cls-1" points="600 86.6 600 144.34 550 115.47 600 86.6" />
         <polygon class="cls-1" points="600 28.87 600 86.6 550 57.74 600 28.87" />
         <polygon class="cls-1" points="600 28.87 550 57.74 550 0 600 28.87" />
         <polygon class="cls-1" points="600 86.6 550 115.47 550 57.74 600 86.6" />
         <polygon class="cls-1" points="600 144.34 550 173.21 550 115.47 600 144.34" />
         <polygon class="cls-1" points="600 202.07 550 230.94 550 173.21 600 202.07" />
         <polygon class="cls-1" points="600 259.81 550 288.68 550 230.94 600 259.81" />
         <polygon class="cls-1" points="600 317.54 550 346.41 550 288.68 600 317.54" />
         <polygon class="cls-1" points="600 375.28 550 404.15 550 346.41 600 375.28" />
         <polygon class="cls-1" points="600 433.01 550 461.88 550 404.15 600 433.01" />
         <polygon class="cls-1" points="600 490.75 550 519.62 550 461.88 600 490.75" />
         <polygon class="cls-1" points="600 548.49 550 577.35 550 519.62 600 548.49" />
         <polygon class="cls-1" points="600 606.22 550 635.09 550 577.35 600 606.22" />
         <polygon class="cls-1" points="550 577.35 550 635.09 500 606.22 550 577.35" />
         <polygon class="cls-1" points="550 519.62 550 577.35 500 548.49 550 519.62" />
         <polygon class="cls-1" points="550 461.88 550 519.62 500 490.75 550 461.88" />
         <polygon class="cls-1" points="550 404.15 550 461.88 500 433.01 550 404.15" />
         <polygon class="cls-1" points="550 346.41 550 404.15 500 375.28 550 346.41" />
         <polygon class="cls-1" points="550 288.68 550 346.41 500 317.54 550 288.68" />
         <polygon class="cls-1" points="550 230.94 550 288.68 500 259.81 550 230.94" />
         <polygon class="cls-1" points="550 173.21 550 230.94 500 202.07 550 173.21" />
         <polygon class="cls-1" points="550 115.47 550 173.21 500 144.34 550 115.47" />
         <polygon class="cls-1" points="550 57.74 550 115.47 500 86.6 550 57.74" />
         <polygon class="cls-1" points="550 0 550 57.74 500 28.87 550 0" />
         <polygon class="cls-1" points="550 57.74 500 86.6 500 28.87 550 57.74" />
         <polygon class="cls-1" points="550 115.47 500 144.34 500 86.6 550 115.47" />
         <polygon class="cls-1" points="550 173.21 500 202.07 500 144.34 550 173.21" />
         <polygon class="cls-1" points="550 230.94 500 259.81 500 202.07 550 230.94" />
         <polygon class="cls-1" points="550 288.68 500 317.54 500 259.81 550 288.68" />
         <polygon class="cls-1" points="550 346.41 500 375.28 500 317.54 550 346.41" />
         <polygon class="cls-1" points="550 404.15 500 433.01 500 375.28 550 404.15" />
         <polygon class="cls-1" points="550 461.88 500 490.75 500 433.01 550 461.88" />
         <polygon class="cls-1" points="550 519.62 500 548.49 500 490.75 550 519.62" />
         <polygon class="cls-1" points="550 577.35 500 606.22 500 548.49 550 577.35" />
         <polygon class="cls-1" points="500 548.49 500 606.22 450 577.35 500 548.49" />
         <polygon class="cls-1" points="500 490.75 500 548.49 450 519.62 500 490.75" />
         <polygon class="cls-1" points="500 433.01 500 490.75 450 461.88 500 433.01" />
         <polygon class="cls-1" points="500 375.28 500 433.01 450 404.15 500 375.28" />
         <polygon class="cls-1" points="500 317.54 500 375.28 450 346.41 500 317.54" />
         <polygon class="cls-1" points="500 259.81 500 317.54 450 288.68 500 259.81" />
         <polygon class="cls-1" points="500 202.07 500 259.81 450 230.94 500 202.07" />
         <polygon class="cls-1" points="500 144.34 500 202.07 450 173.21 500 144.34" />
         <polygon class="cls-1" points="500 86.6 500 144.34 450 115.47 500 86.6" />
         <polygon class="cls-1" points="500 28.87 500 86.6 450 57.74 500 28.87" />
         <polygon class="cls-1" points="500 28.87 450 57.74 450 0 500 28.87" />
         <polygon class="cls-1" points="500 86.6 450 115.47 450 57.74 500 86.6" />
         <polygon class="cls-1" points="500 144.34 450 173.21 450 115.47 500 144.34" />
         <polygon class="cls-1" points="500 202.07 450 230.94 450 173.21 500 202.07" />
         <polygon class="cls-1" points="500 259.81 450 288.68 450 230.94 500 259.81" />
         <polygon class="cls-1" points="500 317.54 450 346.41 450 288.68 500 317.54" />
         <polygon class="cls-1" points="500 375.28 450 404.15 450 346.41 500 375.28" />
         <polygon class="cls-1" points="500 433.01 450 461.88 450 404.15 500 433.01" />
         <polygon class="cls-1" points="500 490.75 450 519.62 450 461.88 500 490.75" />
         <polygon class="cls-1" points="500 548.49 450 577.35 450 519.62 500 548.49" />
         <polygon class="cls-1" points="500 606.22 450 635.09 450 577.35 500 606.22" />
         <polygon class="cls-1" points="450 577.35 450 635.09 400 606.22 450 577.35" />
         <polygon class="cls-1" points="450 519.62 450 577.35 400 548.49 450 519.62" />
         <polygon class="cls-1" points="450 461.88 450 519.62 400 490.75 450 461.88" />
         <polygon class="cls-1" points="450 404.15 450 461.88 400 433.01 450 404.15" />
         <polygon class="cls-1" points="450 346.41 450 404.15 400 375.28 450 346.41" />
         <polygon class="cls-1" points="450 288.68 450 346.41 400 317.54 450 288.68" />
         <polygon class="cls-1" points="450 230.94 450 288.68 400 259.81 450 230.94" />
         <polygon class="cls-1" points="450 115.47 450 173.21 400 144.34 450 115.47" />
         <polygon class="cls-1" points="450 57.74 450 115.47 400 86.6 450 57.74" />
         <polygon class="cls-1" points="450 0 450 57.74 400 28.87 450 0" />
         <polygon class="cls-1" points="450 57.74 400 86.6 400 28.87 450 57.74" />
         <polygon class="cls-1" points="450 115.47 400 144.34 400 86.6 450 115.47" />
         <polygon class="cls-1" points="450 173.21 400 202.07 400 144.34 450 173.21" />
         <polygon class="cls-1" points="450 230.94 400 259.81 400 202.07 450 230.94" />
         <polygon class="cls-1" points="450 288.68 400 317.54 400 259.81 450 288.68" />
         <polygon class="cls-1" points="450 346.41 400 375.28 400 317.54 450 346.41" />
         <polygon class="cls-1" points="450 404.15 400 433.01 400 375.28 450 404.15" />
         <polygon class="cls-1" points="450 461.88 400 490.75 400 433.01 450 461.88" />
         <polygon class="cls-1" points="450 519.62 400 548.49 400 490.75 450 519.62" />
         <polygon class="cls-1" points="450 577.35 400 606.22 400 548.49 450 577.35" />
         <polygon class="cls-1" points="400 548.49 400 606.22 350 577.35 400 548.49" />
         <polygon class="cls-1" points="400 490.75 400 548.49 350 519.62 400 490.75" />
         <polygon class="cls-1" points="400 433.01 400 490.75 350 461.88 400 433.01" />
         <polygon class="cls-1" points="400 375.28 400 433.01 350 404.15 400 375.28" />
         <polygon class="cls-1" points="400 317.54 400 375.28 350 346.41 400 317.54" />
         <polygon class="cls-1" points="400 259.81 400 317.54 350 288.68 400 259.81" />
         <polygon class="cls-1" points="400 202.07 400 259.81 350 230.94 400 202.07" />
         <polygon class="cls-1" points="400 144.34 400 202.07 350 173.21 400 144.34" />
         <polygon class="cls-1" points="400 86.6 400 144.34 350 115.47 400 86.6" />
         <polygon class="cls-1" points="400 28.87 400 86.6 350 57.74 400 28.87" />
         <polygon class="cls-1" points="400 28.87 350 57.74 350 0 400 28.87" />
         <polygon class="cls-1" points="400 86.6 350 115.47 350 57.74 400 86.6" />
         <polygon class="cls-1" points="400 144.34 350 173.21 350 115.47 400 144.34" />
         <polygon class="cls-1" points="400 202.07 350 230.94 350 173.21 400 202.07" />
         <polygon class="cls-1" points="400 259.81 350 288.68 350 230.94 400 259.81" />
         <polygon class="cls-1" points="400 317.54 350 346.41 350 288.68 400 317.54" />
         <polygon class="cls-1" points="400 433.01 350 461.88 350 404.15 400 433.01" />
         <polygon class="cls-1" points="400 490.75 350 519.62 350 461.88 400 490.75" />
         <polygon class="cls-1" points="400 548.49 350 577.35 350 519.62 400 548.49" />
         <polygon class="cls-1" points="400 606.22 350 635.09 350 577.35 400 606.22" />
         <polygon class="cls-1" points="350 577.35 350 635.09 300 606.22 350 577.35" />
         <polygon class="cls-1" points="350 519.62 350 577.35 300 548.49 350 519.62" />
         <polygon class="cls-1" points="350 461.88 350 519.62 300 490.75 350 461.88" />
         <polygon class="cls-1" points="350 404.15 350 461.88 300 433.01 350 404.15" />
         <polygon class="cls-1" points="350 346.41 350 404.15 300 375.28 350 346.41" />
         <polygon class="cls-1" points="350 288.68 350 346.41 300 317.54 350 288.68" />
         <polygon class="cls-1" points="350 230.94 350 288.68 300 259.81 350 230.94" />
         <polygon class="cls-1" points="350 173.21 350 230.94 300 202.07 350 173.21" />
         <polygon class="cls-1" points="350 115.47 350 173.21 300 144.34 350 115.47" />
         <polygon class="cls-1" points="350 57.74 350 115.47 300 86.6 350 57.74" />
         <polygon class="cls-1" points="350 0 350 57.74 300 28.87 350 0" />
         <polygon class="cls-1" points="350 57.74 300 86.6 300 28.87 350 57.74" />
         <polygon class="cls-1" points="350 115.47 300 144.34 300 86.6 350 115.47" />
         <polygon class="cls-1" points="350 173.21 300 202.07 300 144.34 350 173.21" />
         <polygon class="cls-1" points="350 230.94 300 259.81 300 202.07 350 230.94" />
         <polygon class="cls-1" points="350 288.68 300 317.54 300 259.81 350 288.68" />
         <polygon class="cls-1" points="350 346.41 300 375.28 300 317.54 350 346.41" />
         <polygon class="cls-1" points="350 404.15 300 433.01 300 375.28 350 404.15" />
         <polygon class="cls-1" points="350 519.62 300 548.49 300 490.75 350 519.62" />
         <polygon class="cls-1" points="350 577.35 300 606.22 300 548.49 350 577.35" />
         <polygon class="cls-1" points="300 548.49 300 606.22 250 577.35 300 548.49" />
         <polygon class="cls-1" points="300 490.75 300 548.49 250 519.62 300 490.75" />
         <polygon class="cls-1" points="300 433.01 300 490.75 250 461.88 300 433.01" />
         <polygon class="cls-1" points="300 375.28 300 433.01 250 404.15 300 375.28" />
         <polygon class="cls-1" points="300 317.54 300 375.28 250 346.41 300 317.54" />
         <polygon class="cls-1" points="300 259.81 300 317.54 250 288.68 300 259.81" />
         <polygon class="cls-1" points="300 202.07 300 259.81 250 230.94 300 202.07" />
         <polygon class="cls-1" points="300 144.34 300 202.07 250 173.21 300 144.34" />
         <polygon class="cls-1" points="300 86.6 300 144.34 250 115.47 300 86.6" />
         <polygon class="cls-1" points="300 28.87 300 86.6 250 57.74 300 28.87" />
         <polygon class="cls-1" points="300 28.87 250 57.74 250 0 300 28.87" />
         <polygon class="cls-1" points="300 86.6 250 115.47 250 57.74 300 86.6" />
         <polygon class="cls-1" points="300 144.34 250 173.21 250 115.47 300 144.34" />
         <polygon class="cls-1" points="300 202.07 250 230.94 250 173.21 300 202.07" />
         <polygon class="cls-1" points="300 259.81 250 288.68 250 230.94 300 259.81" />
         <polygon class="cls-1" points="300 317.54 250 346.41 250 288.68 300 317.54" />
         <polygon class="cls-1" points="300 433.01 250 461.88 250 404.15 300 433.01" />
         <polygon class="cls-1" points="300 490.75 250 519.62 250 461.88 300 490.75" />
         <polygon class="cls-1" points="300 548.49 250 577.35 250 519.62 300 548.49" />
         <polygon class="cls-1" points="300 606.22 250 635.09 250 577.35 300 606.22" />
         <polygon class="cls-1" points="250 577.35 250 635.09 200 606.22 250 577.35" />
         <polygon class="cls-1" points="250 519.62 250 577.35 200 548.49 250 519.62" />
         <polygon class="cls-1" points="250 461.88 250 519.62 200 490.75 250 461.88" />
         <polygon class="cls-1" points="250 404.15 250 461.88 200 433.01 250 404.15" />
         <polygon class="cls-1" points="250 346.41 250 404.15 200 375.28 250 346.41" />
         <polygon class="cls-1" points="250 288.68 250 346.41 200 317.54 250 288.68" />
         <polygon class="cls-1" points="250 230.94 250 288.68 200 259.81 250 230.94" />
         <polygon class="cls-1" points="250 173.21 250 230.94 200 202.07 250 173.21" />
         <polygon class="cls-1" points="250 115.47 250 173.21 200 144.34 250 115.47" />
         <polygon class="cls-1" points="250 57.74 250 115.47 200 86.6 250 57.74" />
         <polygon class="cls-1" points="250 0 250 57.74 200 28.87 250 0" />
         <polygon class="cls-1" points="250 57.74 200 86.6 200 28.87 250 57.74" />
         <polygon class="cls-1" points="250 115.47 200 144.34 200 86.6 250 115.47" />
         <polygon class="cls-1" points="250 173.21 200 202.07 200 144.34 250 173.21" />
         <polygon class="cls-1" points="250 230.94 200 259.81 200 202.07 250 230.94" />
         <polygon class="cls-1" points="250 288.68 200 317.54 200 259.81 250 288.68" />
         <polygon class="cls-1" points="250 346.41 200 375.28 200 317.54 250 346.41" />
         <polygon class="cls-1" points="250 404.15 200 433.01 200 375.28 250 404.15" />
         <polygon class="cls-1" points="250 461.88 200 490.75 200 433.01 250 461.88" />
         <polygon class="cls-1" points="250 519.62 200 548.49 200 490.75 250 519.62" />
         <polygon class="cls-1" points="250 577.35 200 606.22 200 548.49 250 577.35" />
         <polygon class="cls-1" points="200 548.49 200 606.22 150 577.35 200 548.49" />
         <polygon class="cls-1" points="200 490.75 200 548.49 150 519.62 200 490.75" />
         <polygon class="cls-1" points="200 375.28 200 433.01 150 404.15 200 375.28" />
         <polygon class="cls-1" points="200 317.54 200 375.28 150 346.41 200 317.54" />
         <polygon class="cls-1" points="200 259.81 200 317.54 150 288.68 200 259.81" />
         <polygon class="cls-1" points="200 202.07 200 259.81 150 230.94 200 202.07" />
         <polygon class="cls-1" points="200 144.34 200 202.07 150 173.21 200 144.34" />
         <polygon class="cls-1" points="200 28.87 200 86.6 150 57.74 200 28.87" />
         <polygon class="cls-1" points="200 28.87 150 57.74 150 0 200 28.87" />
         <polygon class="cls-1" points="200 86.6 150 115.47 150 57.74 200 86.6" />
         <polygon class="cls-1" points="200 144.34 150 173.21 150 115.47 200 144.34" />
         <polygon class="cls-1" points="200 202.07 150 230.94 150 173.21 200 202.07" />
         <polygon class="cls-1" points="200 259.81 150 288.68 150 230.94 200 259.81" />
         <polygon class="cls-1" points="200 317.54 150 346.41 150 288.68 200 317.54" />
         <polygon class="cls-1" points="200 375.28 150 404.15 150 346.41 200 375.28" />
         <polygon class="cls-1" points="200 433.01 150 461.88 150 404.15 200 433.01" />
         <polygon class="cls-1" points="200 490.75 150 519.62 150 461.88 200 490.75" />
         <polygon class="cls-1" points="200 548.49 150 577.35 150 519.62 200 548.49" />
         <polygon class="cls-1" points="200 606.22 150 635.09 150 577.35 200 606.22" />
         <polygon class="cls-1" points="150 577.35 150 635.09 100 606.22 150 577.35" />
         <polygon class="cls-1" points="150 519.62 150 577.35 100 548.49 150 519.62" />
         <polygon class="cls-1" points="150 461.88 150 519.62 100 490.75 150 461.88" />
         <polygon class="cls-1" points="150 404.15 150 461.88 100 433.01 150 404.15" />
         <polygon class="cls-1" points="150 346.41 150 404.15 100 375.28 150 346.41" />
         <polygon class="cls-1" points="150 288.68 150 346.41 100 317.54 150 288.68" />
         <polygon class="cls-1" points="150 230.94 150 288.68 100 259.81 150 230.94" />
         <polygon class="cls-1" points="150 173.21 150 230.94 100 202.07 150 173.21" />
         <polygon class="cls-1" points="150 115.47 150 173.21 100 144.34 150 115.47" />
         <polygon class="cls-1" points="150 57.74 150 115.47 100 86.6 150 57.74" />
         <polygon class="cls-1" points="150 0 150 57.74 100 28.87 150 0" />
         <polygon class="cls-1" points="150 57.74 100 86.6 100 28.87 150 57.74" />
         <polygon class="cls-1" points="150 115.47 100 144.34 100 86.6 150 115.47" />
         <polygon class="cls-1" points="150 173.21 100 202.07 100 144.34 150 173.21" />
         <polygon class="cls-1" points="150 230.94 100 259.81 100 202.07 150 230.94" />
         <polygon class="cls-1" points="150 288.68 100 317.54 100 259.81 150 288.68" />
         <polygon class="cls-1" points="150 346.41 100 375.28 100 317.54 150 346.41" />
         <polygon class="cls-1" points="150 404.15 100 433.01 100 375.28 150 404.15" />
         <polygon class="cls-1" points="150 461.88 100 490.75 100 433.01 150 461.88" />
         <polygon class="cls-1" points="150 519.62 100 548.49 100 490.75 150 519.62" />
         <polygon class="cls-1" points="150 577.35 100 606.22 100 548.49 150 577.35" />
         <polygon class="cls-1" points="100 548.49 100 606.22 50 577.35 100 548.49" />
         <polygon class="cls-1" points="100 490.75 100 548.49 50 519.62 100 490.75" />
         <polygon class="cls-1" points="100 433.01 100 490.75 50 461.88 100 433.01" />
         <polygon class="cls-1" points="100 375.28 100 433.01 50 404.15 100 375.28" />
         <polygon class="cls-1" points="100 317.54 100 375.28 50 346.41 100 317.54" />
         <polygon class="cls-1" points="100 259.81 100 317.54 50 288.68 100 259.81" />
         <polygon class="cls-1" points="100 202.07 100 259.81 50 230.94 100 202.07" />
         <polygon class="cls-1" points="100 86.6 100 144.34 50 115.47 100 86.6" />
         <polygon class="cls-1" points="100 28.87 100 86.6 50 57.74 100 28.87" />
         <polygon class="cls-1" points="100 28.87 50 57.74 50 0 100 28.87" />
         <polygon class="cls-1" points="100 86.6 50 115.47 50 57.74 100 86.6" />
         <polygon class="cls-1" points="100 144.34 50 173.21 50 115.47 100 144.34" />
         <polygon class="cls-1" points="100 202.07 50 230.94 50 173.21 100 202.07" />
         <polygon class="cls-1" points="100 259.81 50 288.68 50 230.94 100 259.81" />
         <polygon class="cls-1" points="100 317.54 50 346.41 50 288.68 100 317.54" />
         <polygon class="cls-1" points="100 375.28 50 404.15 50 346.41 100 375.28" />
         <polygon class="cls-1" points="100 433.01 50 461.88 50 404.15 100 433.01" />
         <polygon class="cls-1" points="100 490.75 50 519.62 50 461.88 100 490.75" />
         <polygon class="cls-1" points="100 548.49 50 577.35 50 519.62 100 548.49" />
         <polygon class="cls-1" points="100 606.22 50 635.09 50 577.35 100 606.22" />
         <polygon class="cls-1" points="50 577.35 50 635.09 0 606.22 50 577.35" />
         <polygon class="cls-1" points="50 519.62 50 577.35 0 548.49 50 519.62" />
         <polygon class="cls-1" points="50 461.88 50 519.62 0 490.75 50 461.88" />
         <polygon class="cls-1" points="50 404.15 50 461.88 0 433.01 50 404.15" />
         <polygon class="cls-1" points="50 346.41 50 404.15 0 375.28 50 346.41" />
         <polygon class="cls-1" points="50 288.68 50 346.41 0 317.54 50 288.68" />
         <polygon class="cls-1" points="50 230.94 50 288.68 0 259.81 50 230.94" />
         <polygon class="cls-1" points="50 173.21 50 230.94 0 202.07 50 173.21" />
         <polygon class="cls-1" points="50 115.47 50 173.21 0 144.34 50 115.47" />
         <polygon class="cls-1" points="50 57.74 50 115.47 0 86.6 50 57.74" />
         <polygon class="cls-1" points="50 0 50 57.74 0 28.87 50 0" />
         <polygon class="cls-1" points="50 115.47 0 144.34 0 86.6 50 115.47" />
         <polygon class="cls-1" points="50 173.21 0 202.07 0 144.34 50 173.21" />
         <polygon class="cls-1" points="50 230.94 0 259.81 0 202.07 50 230.94" />
         <polygon class="cls-1" points="50 288.68 0 317.54 0 259.81 50 288.68" />
         <polygon class="cls-1" points="50 346.41 0 375.28 0 317.54 50 346.41" />
         <polygon class="cls-1" points="50 404.15 0 433.01 0 375.28 50 404.15" />
         <polygon class="cls-1" points="50 461.88 0 490.75 0 433.01 50 461.88" />
         <polygon class="cls-1" points="50 519.62 0 548.49 0 490.75 50 519.62" />
         <polygon class="cls-1" points="50 577.35 0 606.22 0 548.49 50 577.35" />
        </g>
      </svg>
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
        zI:9999,
        colors:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)',
        colorList:['rgba(0,0,0,0)','#ab8a9f','#403f3b','#d2bfb9'],
        dItems:[
          {x:0,y:0,z:0},
          {x:1,y:0,z:0},
          {x:2,y:0,z:0},
          {x:3,y:0,z:0},
          {x:4,y:0,z:0},
          {x:5,y:0,z:0},
          {x:0,y:1,z:0},
          {x:0,y:2,z:0},
          {x:0,y:3,z:0},
          {x:0,y:4,z:0},
          {x:0,y:5,z:0},

          {x:5,y:0,z:-1},
          {x:5,y:0,z:-2},
          {x:5,y:0,z:-3},
          // {x:0,y:5,z:1},
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
    bgColor:function(c){
      return this.color = c
    },
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
          zIndexN = this.zI,
          style = '';
      // console.log(zIndexN)
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
<style>
  html::-webkit-scrollbar,body::-webkit-scrollbar { width: 0 !important;display:none }
</style>
<style scoped>
.cls-1{
  fill:red;
  stroke: #666;
  stroke-width: 0.5px;
}
.paluosi{
  width:100%;
  height:100%;
}
.paluosi>div{
  width:100%;
  height:50%;
  background: #ab8a9f;
  clip-path:polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
.paluosi:before{
  content: '';
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background: #403f3b;
  clip-path:polygon(50% 50%, 50% 100%, 0 75%, 0 25%);
}
.paluosi:after{
  content: '';
  position: absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  background: #d2bfb9;
  clip-path:polygon(50% 50%, 50% 100%, 100% 75%, 100% 25%);
}
.linearGradientOne{
  background-image:
  repeating-linear-gradient(to right, currentcolor 0%, currentcolor 1px, rgba(0, 0, 0, 0) 1px, rgba(0, 0, 0, 0) 93px);
}
.linearGradientTwo{
  background-image:
  repeating-linear-gradient(28.3deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 87px, currentcolor 87px, currentcolor 88px);
}
.linearGradientThree{
  left: -90px;
  background-image:
  repeating-linear-gradient(151.7deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 87px, currentcolor 87px, currentcolor 88px);
}
</style>
