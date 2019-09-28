<template>
  <div id="MyyhPath">
    <svg ref="fonts">
      <path id="hMotion" d="M8,743c2.2-227.1-1.1-310.8-6-332c-0.8-3.6-4.7-18.5,0-36c4.3-15.9,13.6-26.2,18-31c20.7-22.8,60.5-38.2,105-39
  c35-0.7,117.2,6.9,126,46c7.2,32.4-38.2,75.8-85,87c-45.8,10.9-110.2-5.1-126-51c-11.5-33.3,5.1-74.9,33-96c11-8.3,32.9-20.4,161-7
  c79.3,8.3,103.9,16.3,131,0c7.8-4.7,33.1-22.1,47-77c36.6-144.9-2.3-565.7-7-615" fill="red"/>
    </svg>
    <div class="flex-container center text-center fs-16 paddingv20 borderb">
        <div class="flex1" :class="pathShow && 'text-red'" @click="pathShow = true">游戏机</div>
        <div class="flex1" :class="!pathShow && 'text-red'" @click="pathShow = false">字体</div>
    </div>
    <div class="flex-container center text-center fs-14 paddingv10 borderb" v-show="pathShow">
        <div class="flex1" :class="listPs4 && 'text-red'" @click="lengthPath('listPs4'),listPs4=true,listXboxOne=false">ps4</div>
        <div class="flex1" :class="listXboxOne && 'text-red'" @click="lengthPath('listXboxOne'),listXboxOne=true,listPs4=false">xboxOne</div>
    </div>
    <div class="flex-container center text-center fs-14 paddingv10 borderb" v-show="!pathShow">
        <div class="flex1" :class="fonts_list === 1 && 'text-red'" @click="fonts_list=1">样式一</div>
        <div class="flex1" :class="fonts_list === 2 && 'text-red'" @click="fonts_list=2">样式二</div>
        <div class="flex1" :class="fonts_list === 3 && 'text-red'" @click="fonts_list=3">样式三</div>
        <div class="flex1" :class="fonts_list === 4 && 'text-red'" @click="fonts_list=4">样式四</div>
    </div>
    <div class="ps4" v-show="pathShow && listPs4">
        <svg class="wire-wrapper fonts" x="0px" y="0px" viewBox="0 -100 1166.8 836.9" ref="listPs4">

          <!-- Controller -->
          <g class="">
            <!-- Outline -->
            <g>
              <path d="M256.7,513.1l53.9-13.9c0,0,0.8-16,9.8-23.8"></path>
              <path d="M169.3,517.9c0,0-7,12.1-8.4,24.3" style="stroke-dasharray: 26, 26; stroke-dashoffset: 0;"></path>
              <path d="M391.2,457.6c0,0,49.3-31.9,99.2,18.5" style="stroke-dasharray: 110, 110; stroke-dashoffset: 0;"></path>
              <path d="M519.9,508.4c0,0,12.9,35.6,6,71.1c-0.1,0.3-0.1,0.6-0.2,0.9l-6.2,21.1c-27,21.4-53.1,15.2-53.1,15.2" style="stroke-dasharray: 152, 152; stroke-dashoffset: 0;"></path>
              <path d="M426.6,593.8l8.1-3.3c0,0,11-4.2,17.2,1.5l11.1,7.7" style="stroke-dasharray: 41, 41; stroke-dashoffset: 0;"></path>
              <path d="M516,604.2c0,0,1.3,4.8-1.7,9.7" style="stroke-dasharray: 11, 11; stroke-dashoffset: 0;"></path>
              <path d="M148.6,544.5c0,0-31.7-0.4-53.7-5.4c-22-4.9-113.9,4.3-90.1,70c18.8,51.9,107.1,57.4,107.1,57.4
                    s12.7,1.7,26.4,11.9c13.6,10.1,31.6,24.6,31.6,24.6s5.7,1.9,8.8-1.5" style="stroke-dasharray: 401, 401; stroke-dashoffset: 0;"></path>
              <path d="M60.3,539.9c-36,4.3-51.7,44.2-39.7,64.5c13,22.1,51.7,32,59.8,35c8.1,2.9,36.8,14.8,45.3,19.5
                    c8.5,4.7,41.1,22,41.1,22h4.7" style="stroke-dasharray: 260, 260; stroke-dashoffset: 0;"></path>
              <path d="M273.4,634.6c0,0-19.1,1-25.5,13.5c0,0-1.1,5.1-6.9,10.1" style="stroke-dasharray: 43, 43; stroke-dashoffset: 0;"></path>
              <path class="controller-light" d="M416.1,609.2c-31.9,6.7-136.9,34.4-148.8,42c-3.7,2.3-1,5.8,5.2,4.6c18.8-3.5,65.8-10.5,80.9-16.6
                    c15.1-6.1,45.2-14.8,62.7-25.1C422.4,610.4,417.3,609,416.1,609.2z" style="stroke-dasharray: 325, 325; stroke-dashoffset: 0; fill: rgba(0, 159, 214, 0.31);"></path>
            </g>

            <!-- Square Screen Thing (idk what this is) -->
            <g>
              <path d="M417.2,556.4L306.3,584.2"></path>
              <path d="M420,561.3L338.3,581.9"></path>
              <path d="M392.4,523.8c0,0-6.4-9.3-17.4-4.6s-129.7,33-129.7,33s-11.6,5.2-4.6,13.3c6.9,8.1,22,30.7,22,30.7
                    s5.8,4.6,7,15.1c1.2,10.4,1.5,17.2,3.5,22.6c1,2.9,3.5,6.4,11,5.2c7.5-1.2,134.9-36.5,134.9-36.5s8.8-3.2,8.7-16.2
                    c0-4.9-4.7-18-7.7-25.1C416.4,553.1,392.4,523.8,392.4,523.8z" style="stroke-dasharray: 494, 494; stroke-dashoffset: 0;"></path>
            </g>

            <!-- Right Thumbstick -->
            <g>
              <path d="M194.5 498.1a18.5 11.4 0 1 0 37 0a18.5 11.4 0 1 0 -37 0z"></path>
              <path d="M242,498.7c0,9-12.5,16.2-28,16.2c-14.2,0-26-6.1-27.8-14.1c-0.2-0.7-0.2-1.4-0.2-2.1c0-9,12.5-16.2,28-16.2
                    S242,489.8,242,498.7z" style="stroke-dasharray: 142, 142; stroke-dashoffset: 0;"></path>
              <path d="M186,496.9c-1.9,5-0.5,13.2,4.4,18.1c5.3,5.2,12.2,6.8,23.6,6.8c13.9,0,20.1-2.4,24.1-7.2
                    c2.2-2.7,5.8-11.4,3.9-16.4" style="stroke-dasharray: 89, 89; stroke-dashoffset: 0;"></path>
              <path d="M202.6,521.1v5.6c0,0,6.6,6.4,20.3,1.2" style="stroke-dasharray: 27, 27; stroke-dashoffset: 0;"></path>
              <path d="M241.6,507.2c2.1,2.8,3.3,6,3.3,9.4c0,11.5-13.7,20.8-30.7,20.8c-17,0-30.7-9.3-30.7-20.8
                    c0-2.8,1.4-5.4,2.9-7.9" style="stroke-dasharray: 101, 101; stroke-dashoffset: 0;"></path>
              <path d="M241.6,501.5c10.4,5.4,18,13.7,18,23.1c0,16.4-20.4,28.6-45.6,28.6c-25.2,0-45.6-13.3-45.6-29.6
                    c0-9.3,6.5-17.5,16.8-23" style="stroke-dasharray: 180, 180; stroke-dashoffset: 0;"></path>
            </g>
            <!-- Left Thumbstick -->
            <g>
              <path d="M335.2,458.7c-1.9,5-0.5,13.2,4.4,18.1c5.3,5.2,12.2,6.8,23.5,6.8c13.9,0,20.1-2.4,24.1-7.2
                    c2.2-2.7,5.8-11.4,3.9-16.4" style="stroke-dasharray: 89, 89; stroke-dashoffset: 0;"></path>
              <g>
                <path d="M344.7 459.9a18.5 11.4 0 1 0 37 0a18.5 11.4 0 1 0 -37 0z"></path>
                <path d="M391.2,460.5c0,9-12.5,16.2-28,16.2c-14.2,0-26-6.1-27.8-14.1c-0.2-0.7-0.2-1.4-0.2-2.1
                      c0-9,12.5-16.2,28-16.2C378.7,444.3,391.2,451.5,391.2,460.5z" style="stroke-dasharray: 142, 142; stroke-dashoffset: 0;"></path>
                <path d="M351.8,482.9v5.6c0,0,6.6,6.4,20.3,1.2" style="stroke-dasharray: 27, 27; stroke-dashoffset: 0;"></path>
                <path d="M390.8,469c2.1,2.8,3.3,6,3.3,9.4c0,11.5-13.7,20.8-30.7,20.8c-17,0-30.7-9.3-30.7-20.8
                      c0-2.8,1.4-5.4,2.9-7.9" style="stroke-dasharray: 101, 101; stroke-dashoffset: 0;"></path>
                <path d="M396.8,505.3c-8.3,5.9-20.3,9.6-33.6,9.6c-25.2,0-45.6-13.3-45.6-29.6c0-9.3,6.5-17.5,16.8-23" style="stroke-dasharray: 126, 126; stroke-dashoffset: 0;"></path>
                <path d="M391.7,462.2c9.8,5.1,16.3,12.8,17,21.5c0,0.5,0.1,1.1,0.1,1.6" style="stroke-dasharray: 31, 31; stroke-dashoffset: 0;"></path>
              </g>
            </g>

            <!-- Share & Option -->
            <g>
              <path d="M433.9,568.3L452.3 563.7 454.2 568.3 434.8 573.4 z" style="stroke-dasharray: 50, 50; stroke-dashoffset: 0;"></path>
              <path d="M234.7,621.4L264.2 614.5 265.3 619.1 236.2 626 z" style="stroke-dasharray: 70, 70; stroke-dashoffset: 0;"></path>
              <path d="M437.4,542.8c-2.8-2.4-12.1-3.2-12.2,4.6c0,2.1,6.9,10.9,6.9,10.9s1.3,2.1,1.9,2.6c1.9,1.8,8.3,4.2,10-3.1
                    c0.2-0.9,0.2-2.6,0-3.5C443.1,551.1,439.8,545,437.4,542.8z" style="stroke-dasharray: 63, 63; stroke-dashoffset: 0;"></path>
              <path d="M246.6,593.2c-2.9-2.5-13.2-3.9-13.2,4.2c0,2.2,7.8,11.8,7.8,11.8s1.4,2.1,2,2.7c1.9,1.9,10.5,2,10.3-3.2
                    c0-0.9,0.2-2.7,0-3.6C252.5,601.8,249.1,595.5,246.6,593.2z" style="stroke-dasharray: 66, 66; stroke-dashoffset: 0;"></path>
            </g>
            <!-- Bumper Buttons -->
            <g>
              <!-- Left Trigger -->
              <path d="M241.2,671.2c1.6-1.5,6-3.8,15.4-4.3c13.7-0.8,58.7-2.6,71.4-5.2c15.6-3.2,88.6-38.8,99.6-43.2
                    c11-4.3,16.4-0.6,16.4-0.6s20.9,14.2,22.4,20.2c0.1,0.2-1.3,4.5-1.2,4.7c0.2,0.4,0.3,0.7,0.5,1c7.5,14.5,16.2,14.2,20.1,14.4
                    c6.5,0.3,9.4-2.1,17.7-16.6c4.1-7.2,8.8-19,12.5-28.9c0,0-18.5,15-49.2,9.2c0,0,1.1,14.3-1.5,21.1" style="stroke-dasharray: 407, 407; stroke-dashoffset: 0;"></path>

              <!-- Left Button -->
              <path d="M523.9,586.8c0,0-2.5-15.7-29.9-9.1c-27.3,6.6-27.2,39.6-27.2,39.6l-3.4-8c0,0-1-11.9,0-15.7
                    c1.5-5.8,6-18.2,31.7-24.9c22.2-5.8,28.5,3.7,30.7,11.8" style="stroke-dasharray: 191, 191; stroke-dashoffset: 0;"></path>

              <!-- Right Button -->
              <path d="M238.9,664.5c0,0-2.8-15.9-33.1-9.1c-33,7.4-30.1,39.6-30.1,39.6l-3.8-8c0,0-1.1-11.9,0-15.7
                    c1.7-5.8,6.6-18.2,35-24.9c24.6-5.8,31.5,3.7,34,11.8c0,0,9.1,31.3-32.5,36.9c-7.2,1-13.6,4.1-32.7,0" style="stroke-dasharray: 292, 292; stroke-dashoffset: 0;"></path>
              <!-- Right Trigger -->
              <path d="M178.8,701.6c33.3,10.5,55.9-7.8,55.9-7.8s-1.6,9.8-9.2,28.7c-7.5,18.8-29,15.9-34.7,2.9
                    c-5.8-13-12.5-24.3-12.5-24.3l-2.6-6" style="stroke-dasharray: 168, 168; stroke-dashoffset: 0;"></path>
              <path d="M235.1,683.3c0,0,1.2,7.8-2.5,12.5" style="stroke-dasharray: 14, 14; stroke-dashoffset: 0;"></path>
            </g>
            <!-- D Pad -->
            <g>
              <!-- Outline -->
              <path d="M402.1,505c0-20.6,26.6-35.5,59.5-35.5c28.8,0,58.3,22.1,58.3,35.5c0,20.6-14.1,37.2-58.3,37.2
                    C428.7,542.2,402.1,525.6,402.1,505z" style="stroke-dasharray: 304, 304; stroke-dashoffset: 0;"></path>
              <!-- Buttons -->
              <g>
                <path d="M466.5,507l5.8-10.2l15.1-8.3c0,0,3.6-1.8,7,3.1c3.4,4.9,4.6,6.4,4.6,6.4s-0.3,2.1-1.7,2.4
                      c-1.4,0.3-18,7.8-18,7.8L466.5,507z" style="stroke-dasharray: 81, 81; stroke-dashoffset: 0;"></path>
                <path d="M498.9,498.1L498.2 506.3 480.3 510.5 466.5 507 " style="stroke-dasharray: 41, 41; stroke-dashoffset: 0;"></path>
              </g>
              <g>
                <path d="M459.7,504.3l4.6-12.6l-7.7-11.7c0,0-16.4-6-22,7.3l9.4,11.9L459.7,504.3z" style="stroke-dasharray: 85, 85; stroke-dashoffset: 0;"></path>
                <path d="M434.6,487.3L434.6 494.2 442.6 502.2 459.7 504.3 " style="stroke-dasharray: 36, 36; stroke-dashoffset: 0;"></path>
              </g>
              <g>
                <path d="M456.3,508.4l-14.7-2.5h-18.3c0,0-1.9,1.9,0,3.7c1.9,1.7,7.8,7.5,7.8,7.5s0.9,1.4,3.6,0.8
                      c1.7-0.3,11.5-0.4,14.9-2.2C451.7,514.6,456.3,508.4,456.3,508.4z" style="stroke-dasharray: 78, 78; stroke-dashoffset: 0;"></path>
                <path d="M422.4,507.7L422.4 514.9 431.9 525 " style="stroke-dasharray: 22, 22; stroke-dashoffset: 0;"></path>
                <path d="M456.3,508.4c0,0-3.1,9.1-5.3,11.3c-0.5,0.6-2.1,1.2-2.8,1.5c-3.9,1.5-16.2,3.8-16.2,3.8v-7.2" style="stroke-dasharray: 40, 40; stroke-dashoffset: 0;"></path>
              </g>
              <g>
                <path d="M459.7,519.2l6.8,7.9c0,0,1.4,0.8,3.7,0c2.3-0.8,17.8-5.2,17.8-5.2s1.7-1.2,0-2.1c-1.7-1-10.6-4.8-10.6-4.8
                      l-12.9-2.9L459.7,519.2z" style="stroke-dasharray: 69, 69; stroke-dashoffset: 0;"></path>
                <path d="M459.6,519.2v5.2l7.9,9.8c0,0,14.1,2.5,21.2-6.9v-5.8" style="stroke-dasharray: 47, 47; stroke-dashoffset: 0;"></path>
                <line x1="467.5" y1="534.2" x2="467.7" y2="527.7"></line>
              </g>
            </g>
            <!-- PS Button -->
            <path d="M274 513.8a13.5 5.4 0 1 0 27 0a13.5 5.4 0 1 0 -27 0z"></path>
            <!-- Speaker Dots -->
            <g>
              <path d="M286.8 533.1a2 1.5 0 1 0 4 0a2 1.5 0 1 0 -4 0z"></path>
              <path d="M294.8 531.5a2 1.5 0 1 0 4 0a2 1.5 0 1 0 -4 0z"></path>
              <path d="M289.4 528a2 1.4 0 1 0 4 0a2 1.4 0 1 0 -4 0z"></path>
              <path d="M303.5 529.9a2 1.5 0 1 0 4 0a2 1.5 0 1 0 -4 0z"></path>
              <path d="M297 526.2a2 1.4 0 1 0 4 0a2 1.4 0 1 0 -4 0z"></path>
              <path d="M311.3 527.8a2 1.5 0 1 0 4 0a2 1.5 0 1 0 -4 0z"></path>
              <path d="M304.3 524.5a2 1.4 0 1 0 4 0a2 1.4 0 1 0 -4 0z"></path>
              <path d="M318.8 525a2 1.5 0 1 0 4 0a2 1.5 0 1 0 -4 0z"></path>
              <path d="M311.9 522.5a2 1.4 0 1 0 4 0a2 1.4 0 1 0 -4 0z"></path>
            </g>

            <!-- Face Buttons -->
            <g>
              <!-- Outline -->
              <path d="M231.2,573.9c0.8,2.6,1.3,5.3,1.3,8.1c0,22-28,39.8-62.5,39.8c-34.5,0-62.5-17.8-62.5-39.8
                    c0-21.1,25.9-38.4,58.7-39.7" style="stroke-dasharray: 249, 249; stroke-dashoffset: 0;"></path>

              <!-- Triangle -->
              <g>
                <path d="M171.6 601.9a16.9 11.5 0 1 0 33.8 0a16.9 11.5 0 1 0 -33.8 0z"></path>
                <path d="M204.8,605c0,6.4-6.9,10.8-16.2,10.8s-16.5-5.2-16.5-11.5" style="stroke-dasharray: 44, 44; stroke-dashoffset: 0;"></path>
                <path d="M177.7,600.5L191.7 594.1 194.8 607.6 z" style="stroke-dasharray: 48, 48; stroke-dashoffset: 0;"></path>
              </g>
              <!-- Square -->
              <g>
                <path d="M189.1 571.5a16.9 11.5 0 1 0 33.8 0a16.9 11.5 0 1 0 -33.8 0z"></path>
                <path d="M222.2,574.7c0,6.4-6.9,10.8-16.2,10.8c-9.3,0-16.5-5.2-16.5-11.5" style="stroke-dasharray: 44, 44; stroke-dashoffset: 0;"></path>
                <path d="M206.8,563.9L194.2 570.3 204.8 578.6 218.2 571.6 z" style="stroke-dasharray: 57, 57; stroke-dashoffset: 0;"></path>
              </g>
              <!-- X -->
              <g>
                <path d="M138.5 558.8a16.9 11.5 0 1 0 33.8 0a16.9 11.5 0 1 0 -33.8 0z"></path>
                <path d="M171.7,561.9c0,6.4-6.9,10.8-16.2,10.8c-9.3,0-16.5-5.2-16.5-11.5" style="stroke-dasharray: 44, 44; stroke-dashoffset: 0;"></path>
                <path d="M154.1 565.5L156.5 551.7"></path>
                <path d="M165.1 558.8L146.1 556.4"></path>
              </g>
              <!-- Circle -->
              <g>
                <path d="M119.79999999999998 589.1a16.9 11.5 0 1 0 33.8 0a16.9 11.5 0 1 0 -33.8 0z"></path>
                <path d="M152.9,592.3c0,6.4-6.9,10.8-16.2,10.8c-9.3,0-16.5-5.2-16.5-11.5" style="stroke-dasharray: 44, 44; stroke-dashoffset: 0;"></path>
                <path d="M127.30000000000001 588.6a9 6.6 0 1 0 18 0a9 6.6 0 1 0 -18 0z"></path>
              </g>
            </g>
          </g>

          <!-- PS4 -->
          <g>
            <!-- Top Outline -->
            <g>
              <path d="M746,460L769 386 1165 131 1144 199 z" style="stroke-dasharray: 1096, 1096; stroke-dashoffset: 0;"></path>
              <path d="M1165,131L758 51 756 54 751.4 52.8 753.4 49 522 1 81 207 328 270 769 386 " style="stroke-dasharray: 1862, 1862; stroke-dashoffset: 0;"></path>
              <path d="M315.4,345.4L335.6 272 758 51 " style="stroke-dasharray: 553, 553; stroke-dashoffset: 0;"></path>
              <path d="M309.4,343.4L330.5 270.7 753.4 49 " style="stroke-dasharray: 554, 554; stroke-dashoffset: 0;"></path>
              <path d="M81,207L58 276.7 746 460 " style="stroke-dasharray: 786, 786; stroke-dashoffset: 0;"></path>
            </g>
            <!-- Bottom Outline -->
            <g>
              <path d="M547.3,522.3L712.7 569.4 1116.7 295.5 1134.7 227.4 1108.9 222.7 " style="stroke-dasharray: 757, 757; stroke-dashoffset: 0;"></path>
              <path d="M90,286.1L49.4 308.7 29.4 378 277.4 447.4 286.1 440.8 284 447.4 311.3 455.1 " style="stroke-dasharray: 423, 423; stroke-dashoffset: 0;"></path>
              <path d="M49.4,308.7L734.7 494.7 1134.7 227.4 " style="stroke-dasharray: 1192, 1192; stroke-dashoffset: 0;"></path>
              <path d="M277.4 447.4L297.5 376.1"></path>
              <path d="M284 447.4L305.6 378.5"></path>
            </g>

            <!-- Middle Outline -->
            <g>
              <path d="M93.2,286.1L93.2 300 427.2 390.6 " style="stroke-dasharray: 360, 360; stroke-dashoffset: 0;"></path>
              <path d="M724.4,454.3L724.4 470.7 531.4 420.9 " style="stroke-dasharray: 216, 216; stroke-dashoffset: 0;"></path>
              <path d="M724.4 470.7L734.9 467"></path>

              <!-- Ports -->
              <g>
                <path d="M440.4,382.4L440.4 396.1 467.9 403 467.9 389 z" style="stroke-dasharray: 85, 85; stroke-dashoffset: 0;"></path>
                <path d="M443 392.7L465 397.7"></path>
              </g>
              <g>
                <path d="M499.3,398.5L499.3 412.2 526.8 419.2 526.8 405.2 z" style="stroke-dasharray: 85, 85; stroke-dashoffset: 0;"></path>
                <path d="M502 408.8L524 413.8"></path>
              </g>
            </g>
            <!-- PS4 Logo -->
            <g>
              <path d="M633.5,399.4l3.5-8.5l17.2,5.2c2.4,0.1,9.7-2.7,3.8-9l-18.5-5.2" style="stroke-dasharray: 60, 60; stroke-dashoffset: 0;"></path>
              <path d="M691.9,396.1l-10.7-3.8c0,0-2.7-1-4,1.9l-4.7,12.6c0,0-1.3,2.3-4,1.5l-9.8-3.2" style="stroke-dasharray: 45, 45; stroke-dashoffset: 0;"></path>
              <path d="M706.9,420.9L714.2 401.9 689 410 713.2 418.5 " style="stroke-dasharray: 73, 73; stroke-dashoffset: 0;"></path>
            </g>
          </g>
        </svg>
    </div>
    <div class="xboxOne" v-show="pathShow && listXboxOne">
        <svg class="wire-wrapper fonts" x="0px" y="0px" viewBox="0 -100 1320.3 635.7" ref="listXboxOne">
          </style>
          <!-- Console -->
          <g>
            <!-- Xbox Logo -->
              <g class="xb1-logo" style="fill: rgba(159, 159, 159, 0.04);">
                  <path d="M762.6,142.5c5.5,6.3,8.9,15,8.9,24.6c0,6.7-1.6,12.9-4.4,18.2c0,0-9.2-28.3-16.4-33
                          C749.3,151.5,762.6,142.5,762.6,142.5z" style="stroke-dasharray: 99, 99; stroke-dashoffset: 0;"></path>
                  <path d="M721.2,143c-5.5,6.3-8.9,15-8.9,24.6c0,6.7,1.6,12.9,4.4,18.2c0,0,9.2-28.3,16.4-33
                          C734.5,151.9,721.2,143,721.2,143z" style="stroke-dasharray: 99, 99; stroke-dashoffset: 0;"></path>
                  <path d="M726.3,138c0,0,10.2-5.5,15.4-5.5c5.8,0,11.3,1.9,15.9,5.3c0,0-10.6,3.2-15,7.2L726.3,138z" style="stroke-dasharray: 68, 68; stroke-dashoffset: 0;"></path>
                  <path d="M742.5,160.8c22,23.8,20.2,30.8,20.2,30.8c-5.4,6.3-12.9,10.1-21.1,10.1c-8.5,0-16.2-4.1-21.6-10.8
                          c0,0-0.3-1.3,5.2-10.5C730.8,171.2,742.5,160.8,742.5,160.8z" style="stroke-dasharray: 125, 125; stroke-dashoffset: 0;"></path>
              </g>
            <!-- Outline -->
            <g>
                  <path d="M563.8,365.6L942.4 377.9 1314 352.4 1319.3 344.5 1319.3 122.3 1314 109.1 887 1 19.9 105.6 2.3 117 2.3 187.3 7.6 196.1 339.7 174.1 " style="stroke-dasharray: 2746, 2746; stroke-dashoffset: 0;"></path>
                  <path d="M281.9,206L6.7 219.8 1 230.3 1 298 76.1 349.8 161.9 352.6 " style="stroke-dasharray: 533, 533; stroke-dashoffset: 0;"></path>
                  <path d="M2.3 187.3L310.7 165.7"></path>
                  <path d="M355.6,65.1L341.4 76.6 341.4 149.1 341.4 188.6 " style="stroke-dasharray: 131, 131; stroke-dashoffset: 0;"></path>
                  <path d="M173.8 299.5L1 298"></path>
                  <path d="M887,1L887.9 290.1 869.4 305.4 536.1 302.6 " style="stroke-dasharray: 647, 647; stroke-dashoffset: 0;"></path>
                  <path d="M868.6,305.4L868.6 16.8 887 1 " style="stroke-dasharray: 313, 313; stroke-dashoffset: 0;"></path>
                  <path d="M2.3 117L868.6 16.8"></path>
                  <path d="M1 230.3L218.9 220"></path>
                  <path d="M888.3,171L1310.7 214.9 1310.7 331.1 942.4 350.2 887.9 290.1 " style="stroke-dasharray: 991, 991; stroke-dashoffset: 0;"></path>
                  <path d="M310.7,198.6L41.9 214 41.9 198.3 310.7 181.6 z" style="stroke-dasharray: 572, 572; stroke-dashoffset: 0;"></path>
                  <path d="M869.4 305.4L945 377.9"></path>
              <path d="M7.6,219.8v-23.7V219.8z" style="stroke-dasharray: 48, 48; stroke-dashoffset: 0;"></path>
              <path d="M1309.4,325.9L945 341 894.9 287 896.3 183.5 1310 222.4 " style="stroke-dasharray: 958, 958; stroke-dashoffset: 0;"></path>
              </g>
            <!-- Grill -->
              <g class="xb1-grill" ref="line">
                  <path d="M904.6 184.9L895.9 214.5"></path>
                    <path d="M921.3 185.8L894.9 275.1"></path>
                    <path d="M938.4 188.1L904.6 296.2"></path>
                    <path d="M953.8 189.5L917.3 311.1"></path>
                    <path d="M970.1 190.3L931.4 326.1"></path>
                    <path d="M984.5 192.5L943.3 338.4"></path>
                    <path d="M999.5 193.4L959.1 339.3"></path>
                    <path d="M1014.4 195.2L973.6 339.7"></path>
                    <path d="M1028.5 196.5L988.9 339.3"></path>
                    <path d="M1041.7 197.8L1004.3 338.4"></path>
                    <path d="M1055.3 199.1L1018.4 337.1"></path>
                    <path d="M1068 200.9L1031.5 337.1"></path>
                    <path d="M1079.9 201.8L1045.6 335.7"></path>
                    <path d="M1093 202.6L1058.3 334.9"></path>
                    <path d="M1104.5 203.5L1071.1 335.3"></path>
                    <path d="M1117.2 204.8L1083.4 334.4"></path>
                    <path d="M1128.6 206.2L1096.1 333.5"></path>
                    <path d="M1139.6 206.6L1108.9 333.5"></path>
                    <path d="M1151 207.5L1119.4 333.5"></path>
                    <path d="M1161.6 208.4L1132.1 332.7"></path>
                    <path d="M1171.2 209.7L1142.2 332.7"></path>
                    <path d="M1180.9 211L1152.3 332.7"></path>
                    <path d="M1191 212.3L1163.8 331.4"></path>
                    <path d="M1201.5 213.6L1173.9 330.5"></path>
                    <path d="M1210.8 214.5L1184.4 330"></path>
                    <path d="M1220.9 214.5L1194.5 330"></path>
                    <path d="M1229.7 216.7L1203.7 329.6"></path>
                    <path d="M1237.6 216.7L1213.8 330"></path>
                    <path d="M1246.8 217.6L1221.8 330"></path>
                    <path d="M1254.7 218L1231.9 329.6"></path>
                    <path d="M1263.5 218.9L1240.6 329.6"></path>
                    <path d="M1272.3 219.8L1249.4 329.6"></path>
                    <path d="M1280.6 220.7L1258.2 328.3"></path>
                    <path d="M1288.1 221.5L1266.1 327"></path>
                    <path d="M1295.6 222L1274.9 327.4"></path>
                    <path d="M1304.3 222.8L1282.8 326.5"></path>
                    <path d="M1310.9 236.9L1290.3 327"></path>
                    <path d="M1310.1 272.9L1297.8 327"></path>
                    <path d="M1305.2 326.1L1310.1 305.9"></path>
              </g>
          </g>

          <!-- Controller -->
          <g>
            <!-- Outline -->
              <g>
                  <path d="M277.1,434.1c-8,76.8-46.8,81.9-46.8,81.9c-16-1.7-18.3-20-18.3-20c-4-20,13.7-59.4,13.7-59.4
                          c5.7-9.1,18.3-10.8,18.3-10.8h100.5c41.1,1.7,48.5,14.3,48.5,14.3c78.8,74.8,101.1,90.7,113,94.2c5.9,1.7,70.2,4,53.1-90.2
                          c0,0-28.5-115.9-48-153.6c0,0-4-13.1-3.4-18.8c0,0-1.1-12.6-10.3-18.3c0,0-35.2-34.8-87-42.4c0,0-7.6-1.1-14.1,0
                          c-6.5,1.1-11,5.7-16.7,12.6c-5.7,6.9-29.3,33.1-29.3,33.1s-7.2,7.6-12.2,7.6c-4.9,0-49.1,5.7-49.1,5.7s-10.7,2.7-16-6.1
                          c-5.3-8.8-12.9-25.1-12.9-25.1s-6.1-9.1-16.7-3.4c-10.7,5.7-26.6,18.6-30.4,27.4c-3.8,8.8-3.8,8.8-3.8,8.8" style="stroke-dasharray: 1198, 1198; stroke-dashoffset: 0;"></path>
                  <path d="M386.3 434.7L256 432.9"></path>
                  <path d="M230.3,516c0,0-62.8-5.7-54.2-102.8c0,0,11.9-90.1,22-99.8" style="stroke-dasharray: 232, 232; stroke-dashoffset: 0;"></path>
                  <path d="M486.3,243.9c0,0,59,161.9,61.7,211.3c0.4,8.3,9.2,54.4-26.3,78.3" style="stroke-dasharray: 308, 308; stroke-dashoffset: 0;"></path>
                  <path d="M472.4,227.7c0,0,14.2-2.5,18,0c7.6,4.9,7,25.7,7,25.7" style="stroke-dasharray: 46, 46; stroke-dashoffset: 0;"></path>
                  <g>
                      <path d="M474,235.4l-2.2-10.8c0,0-1.1-2.7-3.4-3.8c-2.3-1.1-35.8-27-75.7-20.2c0,0-9.1,3.3-16.7,9.8
                              c-3.6,3.1-12.9,4.3-12.9,4.3l-80.3,12.6c0,0-5.3,0.4-9.9-1.9c0,0-7.2-6.9-19-1.9c-11.8,4.9-25.8,16.5-25.7,22.3" style="stroke-dasharray: 277, 277; stroke-dashoffset: 0;"></path>
                      <path d="M371,212.9c0,0,4.9,9.1,8.7,10.6" style="stroke-dasharray: 14, 14; stroke-dashoffset: 0;"></path>
                      <path d="M276,226.6c0,0-6.7,16.1-12.4,19.2" style="stroke-dasharray: 24, 24; stroke-dashoffset: 0;"></path>
                  </g>
              </g>
            <!-- Left Thumbstick -->
              <g>
                <path d="M204.4,317c0,0,9.1,24.8,28.9,2.6" style="stroke-dasharray: 38, 38; stroke-dashoffset: 0;"></path>
                <path d="M216.1,295.7c-2,8.6-8.9,14.3-15.4,12.8c-6.5-1.5-10-9.7-8-18.3c2-8.6,8.9-14.3,15.4-12.8
                          C214.6,278.9,218.2,287.1,216.1,295.7z" style="stroke-dasharray: 89, 89; stroke-dashoffset: 0;"></path>
                    <path transform="matrix(0.9729 0.2312 -0.2312 0.9729 73.7825 -40.6364)" d="M191.9 294.5a18.4 23.3 0 1 0 36.8 0a18.4 23.3 0 1 0 -36.8 0z"></path>
                  <path d="M218.8,273c3.5-1.2,7.1-1.4,10.7-0.6c13,3.1,20.2,19.5,16.1,36.6c-4.1,17.1-17.9,28.5-30.8,25.4
                          c-8.9-2.1-15.1-10.5-16.8-21.1" style="stroke-dasharray: 128, 128; stroke-dashoffset: 0;"></path>
                  <path d="M224,277.1c0,0,16.6-4,19.1,18.3" style="stroke-dasharray: 31, 31; stroke-dashoffset: 0;"></path>
              </g>
            <!-- Right Thumbstick -->
              <g>
                  <path transform="matrix(0.9729 0.2312 -0.2312 0.9729 89.914 -66.3922)" d="M313.2 350.5a15.1 19.6 0 1 0 30.2 0a15.1 19.6 0 1 0 -30.2 0z"></path>
                  <path transform="matrix(0.9729 0.2312 -0.2312 0.9729 90.3657 -67.526)" d="M312.8 351.8a20.5 25.9 0 1 0 41 0a20.5 25.9 0 1 0 -41 0z"></path>
                  <path d="M334.9,326.2c5.9-4.5,12.8-6.5,19.5-4.9c14.5,3.4,22.4,22.3,17.6,42.1c-4.7,19.8-20.2,33.1-34.7,29.7
                          c-8.9-2.1-15.3-10-17.8-20.4" style="stroke-dasharray: 151, 151; stroke-dashoffset: 0;"></path>
                  <path d="M348.5,320.6c8.3-2.7,17.5-3,25,0.8c17.7,9.1,22.4,35,10.7,57.7c-11.8,22.7-35.6,33.8-53.3,24.6
                          c-12.9-6.7-19-22.4-16.6-39.2" style="stroke-dasharray: 201, 201; stroke-dashoffset: 0;"></path>
                  <path d="M333.3,377.5" style="stroke-dasharray: 0, 0; stroke-dashoffset: 0;"></path>
              </g>
            <!-- Start & Select Buttons -->
              <g>
                  <path transform="matrix(0.9746 0.2241 -0.2241 0.9746 73.3574 -55.6453)" d="M274.7 295.4a7.2 8.7 0 1 0 14.4 0a7.2 8.7 0 1 0 -14.4 0z"></path>
                  <path transform="matrix(0.9746 0.2241 -0.2241 0.9746 73.6574 -55.8801)" d="M275 296.6a8.1 9.7 0 1 0 16.2 0a8.1 9.7 0 1 0 -16.2 0z"></path>
              </g>
              <g>
                <path transform="matrix(0.9746 0.2241 -0.2241 0.9746 73.2262 -67.1068)" d="M325.1 289.1a7.2 8.7 0 1 0 14.4 0a7.2 8.7 0 1 0 -14.4 0z"></path>
                <path transform="matrix(0.9746 0.2241 -0.2241 0.9746 73.5175 -67.3351)" d="M325.4 290.3a8.1 9.7 0 1 0 16.2 0a8.1 9.7 0 1 0 -16.2 0z"></path>
              </g>
            <!-- Face Buttons -->
              <g>
              <!-- X -->
                  <g>
                      <path transform="matrix(0.9746 0.2241 -0.2241 0.9746 73.3214 -77.4732)" d="M366.2 284.3a11.8 14.2 0 1 0 23.6 0a11.8 14.2 0 1 0 -23.6 0z"></path>
                      <path d="M382.9,271.4c7.1,1.6,11.9,9.3,9.9,17.8c-2,8.5-9.3,14.1-16.4,12.5" style="stroke-dasharray: 46, 46; stroke-dashoffset: 0;"></path>
                  </g>
              <!-- A -->
                  <g>
                      <path transform="matrix(0.9746 0.224 -0.224 0.9746 80.8478 -82.1669)" d="M390.7 315.2a11.8 14.2 0 1 0 23.6 0a11.8 14.2 0 1 0 -23.6 0z"></path>
                      <path d="M407.4,302.3c7.1,1.6,11.9,9.3,9.9,17.8c-2,8.5-9.3,14.1-16.4,12.5" style="stroke-dasharray: 46, 46; stroke-dashoffset: 0;"></path>
                  </g>
              <!-- B -->
                  <g>
                      <path transform="matrix(0.9746 0.2241 -0.2241 0.9746 73.973 -90.4957)" d="M423.8 280.7a11.9 14.2 0 1 0 23.8 0a11.9 14.2 0 1 0 -23.8 0z"></path>
                      <path d="M440.7,267.2c7.2,1.6,11.9,9.9,9.9,18.4c-2,8.5-9.4,14.1-16.5,12.5" style="stroke-dasharray: 47, 47; stroke-dashoffset: 0;"></path>
                  </g>
              <!-- Y -->
                  <g>
                      <path transform="matrix(0.9746 0.2241 -0.2241 0.9746 66.42 -84.7929)" d="M395 250.3a11.8 14.2 0 1 0 23.6 0a11.8 14.2 0 1 0 -23.6 0z"></path>
                      <path d="M411.7,237.4c7.1,1.6,11.9,9.3,9.9,17.8c-2,8.5-9.3,14.1-16.4,12.5" style="stroke-dasharray: 46, 46; stroke-dashoffset: 0;"></path>
                  </g>
              </g>
            <!-- D Pad -->
              <g>
                  <path d="M263.1,356.1c0,0-0.3,2.4,2.2,2.2c2.9-0.2,10.1-1.1,10.1-1.1s2.6-0.6,2.6,3.5c0,4.1,0,13.3,0,13.3
                          s0.3,3.8-3.8,3.8s-11.1,0.7-11.1,0.7s-3.1,0.6-3.1,3.1c0,2.5,0,15.2,0,15.2s0,3.3-4,3.3c-4,0-8.6,0-8.6,0s-2.6,0.3-2.6-2.6
                          c0-2.9,1.9-16,1.9-16s-0.2-3.3-3.8-3.3c-3.6,0-9.7,0-9.7,0s-2.3,0.6-2.3-3.6c0-4.1,0.6-12,0.6-12s0-2.7,3.9-2.7s9.4-0.4,9.4-0.4
                          s4.1-0.4,4.1-4.1c0-3.6,0-15.1,0-15.1s0.9-2.1,4.2-2.1h7.7c0,0,2.5-0.4,2.5,2.5C263.4,343.7,263.1,356.1,263.1,356.1z" style="stroke-dasharray: 205, 205; stroke-dashoffset: 0;"></path>

                    <path transform="matrix(0.9822 0.1876 -0.1876 0.9822 73.9741 -41.9485)" d="M230.20000000000002 369.9a28.4 36.3 0 1 0 56.8 0a28.4 36.3 0 1 0 -56.8 0z"></path>
                  <path d="M245.5,399.4c0,0,3.6,3.8,5.2,4c2.9,0.3,8.9,0,8.9,0s4.9,0.4,4.9-5.9v-12.8c0-3,3-3,3-3s9.1,0,11.7,0
                          c2.6,0,3.6-2.7,4-4.2c0.9-3.8,0.6-15.7,0.6-15.7c-1.3-1.4-7.7-4.6-7.7-4.6" style="stroke-dasharray: 85, 85; stroke-dashoffset: 0;"></path>
                  <path d="M262.3,338.6l4.4,2.7c0,0,2.3,0.6,2.3,3.3c0,3.1,0,2.7,0,13.3" style="stroke-dasharray: 23, 23; stroke-dashoffset: 0;"></path>
                  <path d="M231.7,377.5l2.6,4.2c0,0,1.1,1.5,2.6,1.5c1.4,0,9.8,0,9.8,0" style="stroke-dasharray: 18, 18; stroke-dashoffset: 0;"></path>
              </g>
            <!-- Xbox Logo -->
              <g>
                  <path d="M304.4,227.4" style="stroke-dasharray: 0, 0; stroke-dashoffset: 0;"></path>
                  <path d="M311.5,230l4.9,2.4c0,0,4.4-3.7,8-3.7C324.4,228.6,315.7,226.2,311.5,230z" style="stroke-dasharray: 28, 28; stroke-dashoffset: 0;"></path>
                  <path d="M326.2,230.1l-6.8,6.1c0,0,7.9,10.5,5.7,18.9C325.1,255.1,338,239.4,326.2,230.1z" style="stroke-dasharray: 58, 58; stroke-dashoffset: 0;"></path>
                  <path d="M302.8,258.1c2.5,8.2,20.7,4,20.5-1.7c-0.3-7.7-7.5-15.6-7.5-15.6S301.9,255.1,302.8,258.1z" style="stroke-dasharray: 65, 65; stroke-dashoffset: 0;"></path>
                  <path d="M311.5,237.7c-7.2,6.9-10,18.6-10,18.6s-3.5-13.9,6-22.6L311.5,237.7z" style="stroke-dasharray: 52, 52; stroke-dashoffset: 0;"></path>
              </g>
          </g>
        </svg>
    </div>
    <div class="font" v-show="!pathShow">
<!--       <svg id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 820 300.43" :class="fonts_name" ref="font">
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M0.5 243.37L30.5 2.37 95.5 203.37 158.5 2.37 187.5 243.37"></path>
                <path class="letter__layer" d="M0.5 243.37L30.5 2.37 95.5 203.37 158.5 2.37 187.5 243.37"></path>
                <path class="letter__layer" d="M0.5 243.37L30.5 2.37 95.5 203.37 158.5 2.37 187.5 243.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M268.5 2.37L321.5 123.37 321.5 243.37"></path>
                <path class="letter__layer" d="M268.5 2.37L321.5 123.37 321.5 243.37"></path>
                <path class="letter__layer" d="M268.5 2.37L321.5 123.37 321.5 243.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M268.5 2.37L321.5 123.37 321.5 243.37"></path>
                <path class="letter__layer" d="M268.5 2.37L321.5 123.37 321.5 243.37"></path>
                <path class="letter__layer" d="M268.5 2.37L321.5 123.37 321.5 243.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M382.5 2.37L321.5 123.37"></path>
                <path class="letter__layer" d="M382.5 2.37L321.5 123.37"></path>
                <path class="letter__layer" d="M382.5 2.37L321.5 123.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M466.5 2.37L521.5 123.37 521.5 243.37"></path>
                <path class="letter__layer" d="M466.5 2.37L521.5 123.37 521.5 243.37"></path>
                <path class="letter__layer" d="M466.5 2.37L521.5 123.37 521.5 243.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M590.5 2.37L521.5 123.37"></path>
                <path class="letter__layer" d="M590.5 2.37L521.5 123.37"></path>
                <path class="letter__layer" d="M590.5 2.37L521.5 123.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M676.5 2.37L676.5 243.37"></path>
                <path class="letter__layer" d="M676.5 2.37L676.5 243.37"></path>
                <path class="letter__layer" d="M676.5 2.37L676.5 243.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M778.5 123.37L676.5 123.37"></path>
                <path class="letter__layer" d="M778.5 123.37L676.5 123.37"></path>
                <path class="letter__layer" d="M778.5 123.37L676.5 123.37"></path>
            </g>
        </g>
        <g class="letter letter--1">
            <g class="letter__part">
                <path class="letter__layer" d="M778.5 2.37L778.5 243.37"></path>
                <path class="letter__layer" d="M778.5 2.37L778.5 243.37"></path>
                <path class="letter__layer" d="M778.5 2.37L778.5 243.37"></path>
            </g>
        </g>
      </svg>  --> 
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 320 180" :class="fonts_name" ref="font">
        <g class="letter letter--1" style="transform-origin: 51.6126px 89.912px 0px; opacity: 1; transform: rotateZ(0deg);">
          <g class="letter__part">
            <path class="letter__layer" d="M41.5,88.4c0,0,26.8,0.9,32.9-9.9c8.4-15-10.8-31.6-46.7-25.2" style="stroke-dashoffset: 0px; stroke-dasharray: 100.974; opacity: 1;"></path>
            <path class="letter__layer" d="M41.5,88.4c0,0,26.8,0.9,32.9-9.9c8.4-15-10.8-31.6-46.7-25.2" style="stroke-dashoffset: 0px; stroke-dasharray: 100.974; opacity: 1;"></path>
            <path class="letter__layer" d="M41.5,88.4c0,0,26.8,0.9,32.9-9.9c8.4-15-10.8-31.6-46.7-25.2" style="stroke-dashoffset: 0px; stroke-dasharray: 100.974; opacity: 1;"></path>
          </g>
          <g class="letter__part">
            <path class="letter__layer" d="M39.2,89.6c45.8-10.3,59.4,49.7-13,36.4" style="stroke-dashoffset: 0px; stroke-dasharray: 108.655; opacity: 1;"></path>
            <path class="letter__layer" d="M39.2,89.6c45.8-10.3,59.4,49.7-13,36.4" style="stroke-dashoffset: 0px; stroke-dasharray: 108.655; opacity: 1;"></path>
            <path class="letter__layer" d="M39.2,89.6c45.8-10.3,59.4,49.7-13,36.4" style="stroke-dashoffset: 0px; stroke-dasharray: 108.655; opacity: 1;"></path>
          </g>
          <g class="letter__part">
            <path class="letter__layer" d="M40.5,63.4v54.9" style="stroke-dashoffset: 0px; stroke-dasharray: 54.9; opacity: 1;"></path>
            <path class="letter__layer" d="M40.5,63.4v54.9" style="stroke-dashoffset: 0px; stroke-dasharray: 54.9; opacity: 1;"></path>
            <path class="letter__layer" d="M40.5,63.4v54.9" style="stroke-dashoffset: 0px; stroke-dasharray: 54.9; opacity: 1;"></path>
          </g>
        </g>
        <g class="letter letter--2" style="transform-origin: 106.65px 100.195px 0px; opacity: 1; transform: rotateZ(0deg);">
          <g class="letter__part">
            <path class="letter__layer" d="M91,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
            <path class="letter__layer" d="M91,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
            <path class="letter__layer" d="M91,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
          </g>
        </g>
        <g class="letter letter--3" style="transform-origin: 140.6px 94.25px 0px; opacity: 1; transform: rotateZ(0deg);">
          <g class="letter__part">
            <path class="letter__layer" d="M140.6,63.4v61.7" style="stroke-dashoffset: 0px; stroke-dasharray: 61.7; opacity: 1;"></path>
            <path class="letter__layer" d="M140.6,63.4v61.7" style="stroke-dashoffset: 0px; stroke-dasharray: 61.7; opacity: 1;"></path>
            <path class="letter__layer" d="M140.6,63.4v61.7" style="stroke-dashoffset: 0px; stroke-dasharray: 61.7; opacity: 1;"></path>
          </g>
        </g>
        <g class="letter letter--4" style="transform-origin: 164.65px 93.6px 0px; opacity: 1; transform: rotateZ(0deg);">
          <g class="letter__part">
            <path class="letter__layer" d="M161.5,72.1l6.3-10" style="stroke-dashoffset: 0px; stroke-dasharray: 11.8191; opacity: 1;"></path>
            <path class="letter__layer" d="M161.5,72.1l6.3-10" style="stroke-dashoffset: 0px; stroke-dasharray: 11.8191; opacity: 1;"></path>
            <path class="letter__layer" d="M161.5,72.1l6.3-10" style="stroke-dashoffset: 0px; stroke-dasharray: 11.8191; opacity: 1;"></path>
          </g>
          <g class="letter__part">
            <path class="letter__layer" d="M161.5,81.7v43.4" style="stroke-dashoffset: 0px; stroke-dasharray: 43.4; opacity: 1;"></path>
            <path class="letter__layer" d="M161.5,81.7v43.4" style="stroke-dashoffset: 0px; stroke-dasharray: 43.4; opacity: 1;"></path>
            <path class="letter__layer" d="M161.5,81.7v43.4" style="stroke-dashoffset: 0px; stroke-dasharray: 43.4; opacity: 1;"></path>
          </g>
        </g>
        <g class="letter letter--5" style="transform-origin: 192.95px 100.195px 0px; opacity: 1; transform: rotateZ(0deg);">
          <g class="letter__part">
            <path class="letter__layer" d="M177.3,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
            <path class="letter__layer" d="M177.3,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
            <path class="letter__layer" d="M177.3,97.4h31.3c-12.9-65.4-51.4,62.3,0,13.1" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
          </g>
        </g>
        <g class="letter letter--6" style="transform-origin: 237.85px 102.9px 0px; opacity: 1; transform: rotateZ(0deg);">
          <g class="letter__part">
            <path class="letter__layer" d="M222.2,81.7l15.8,42.4l15.5-42.4" style="stroke-dashoffset: 0px; stroke-dasharray: 90.3925; opacity: 1;"></path>
            <path class="letter__layer" d="M222.2,81.7l15.8,42.4l15.5-42.4" style="stroke-dashoffset: 0px; stroke-dasharray: 90.3925; opacity: 1;"></path>
            <path class="letter__layer" d="M222.2,81.7l15.8,42.4l15.5-42.4" style="stroke-dashoffset: 0px; stroke-dasharray: 90.3925; opacity: 1;"></path>
          </g>
        </g>
        <g class="letter letter--7" style="transform-origin: 278.05px 100.195px 0px; opacity: 1; transform: rotateZ(0deg);">
          <g class="letter__part">
            <path class="letter__layer" d="M293.7,110.5c-51.4,49.2-12.9-78.5,0-13.1h-31.3" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
            <path class="letter__layer" d="M293.7,110.5c-51.4,49.2-12.9-78.5,0-13.1h-31.3" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
            <path class="letter__layer" d="M293.7,110.5c-51.4,49.2-12.9-78.5,0-13.1h-31.3" style="stroke-dashoffset: 0px; stroke-dasharray: 130.012; opacity: 1;"></path>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';


export default {
	name: 'MyyhPath',
	data () {
    return {
            showTimes:false,
            pathShow:true,
            listPs4:false,
            listXboxOne:false,
            fonts_list:2
        }
	},
	computed: {
        //能力值坐标点
        aaa(){
          let items = this.lineData(this.dItems,this.pi(this.round,this.piN),this.cx,this.cy,this.r);
          return items
        },
        fonts_name(){
          return 'letters--effect-'+this.fonts_list
        }
	},
    watch:{

    },
  mounted(){
    // this.lengthPath('list');
    this.lengthPath('fonts');
    // this.linePath('line')
  },
	methods: {
    lengthPath(id){
        

      var id = id;
      var path = this.$refs[id].getElementsByTagName('path');
      for (var i = 0; i < path.length; i++)
      {
        var length = path[i].getTotalLength();
        path[i].style = 'stroke-dasharray: '+length+';stroke-dashoffset: '+length+';';

      }
    },
    linePath(id){
        var id = id;
        var path = this.$refs[id].getElementsByTagName('line');
        for (var i = 0; i < path.length; i++)
          {
            var x1 = path[i].getAttribute("x1");
            var y1 = path[i].getAttribute("y1");
            var x2 = path[i].getAttribute("x2");
            var y2 = path[i].getAttribute("y2");

            this.line2path(x1,y1,x2,y2)
          }
        // console.log(path)
    },
    degree(n,d,num){
        var length = this.strokeDasharray(n);
        var degreeWidth = d;
        var num = num;
        var style = 'stroke-dasharray:'+degreeWidth+' '+((length/num) - degreeWidth);
        return style
    },
    rect2path(x, y, width, height, rx, ry) { 
      /* * rx 和 ry 的规则是： * 1. 如果其中一个设置为 0 则圆角不生效 * 2. 如果有一个没有设置则取值为另一个 */ 
      var rx = rx || ry || 0;
      var ry = ry || rx || 0; 
      //非数值单位计算，如当宽度像100%则移除 
      if (isNaN(x - y + width - height + rx - ry)) return; 
        rx = rx > width / 2 ? width / 2 : rx; 
        ry = ry > height / 2 ? height / 2 : ry; 
        //如果其中一个设置为 0 则圆角不生效 
        if(0 == rx || 0 == ry){ 
        // var path = // 'M' + x + ' ' + y + // 'H' + (x + width) + 不推荐用绝对路径，相对路径节省代码量 // 'V' + (y + height) + // 'H' + x + // 'z'; 
        var path = 
        'M' + x + ' ' + y + 
        'h' + width + 
        'v' + height + 
        'h' + -width + 
        'z'; 
      }else{ 
        var path = 
        'M' + x + ' ' + (y+ry) + 
        'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + (-ry) + 
        'h' + (width - rx - rx) + 
        'a' + rx + ' ' + ry + ' 0 0 1 ' + rx + ' ' + ry + 
        'v' + (height - ry -ry) + 
        'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + ry + 
        'h' + (rx + rx -width) + 
        'a' + rx + ' ' + ry + ' 0 0 1 ' + (-rx) + ' ' + (-ry) + 
        'z'; 
      } 
      return path; 
    },
    ellipse2path(cx, cy, rx, ry) { 
    //非数值单位计算，如当宽度像100%则移除 
      if (isNaN(cx - cy + rx - ry)) return;
      var path = 
      'M' + (cx-rx) + ' ' + cy + 
      'a' + rx + ' ' + ry + ' 0 1 0 ' + 2*rx + ' 0' + 
      'a' + rx + ' ' + ry + ' 0 1 0 ' + (-2*rx) + ' 0' + 
      'z'; 
      console.log('<path d="'+path+'"></path>')
      return path; 
    },
    line2path(x1, y1, x2, y2) { 
      //非数值单位计算，如当宽度像100%则移除 
      if (isNaN(x1 - y1 + x2 - y2)) return; 
      x1 = x1 || 0; 
      y1 = y1 || 0; 
      x2 = x2 || 0; 
      y2 = y2 || 0; 
      var path = 'M' + x1 + ' '+ y1 + 'L' + x2 + ' ' + y2;
      console.log('<path d="'+path+'"></path>')
      return path; 
    },
    // polygon折线转换
    polyline2path (points) {
        var path = 'M' + points.slice(0,2).join(' ') +'L' + points.slice(2).join(' ');
        return path;
    },
    // polygon多边形转换
    // polygon2path (points) {
    //     var path = 'M' + points.slice(0,2).join(' ') +'L' + points.slice(2).join(' ') + 'z';
    //     return path;
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wire-wrapper {
    fill: none;
    stroke: #666;
    stroke-width: 2;
}
.fonts{
  /*stroke-dasharray: 130px;*/
  /*stroke-dashoffset: 130px;*/

}
.fonts path{
  animation: fonts_an 2s linear alternate forwards;

}
.fonts.an path{
  animation: fonts_an 2s linear alternate forwards;
}

@keyframes fonts_an
{ 
100% { 
      stroke-dashoffset: 0;
  }
}
@keyframes fonts_an_2
{ 
100% { 
      stroke-dashoffset: 0;
  }
}
@keyframes fonts_an_3
{ 
100% { 
      stroke-dashoffset: 0;
  }
}
@keyframes fonts_an_4
{ 
100% { 
      stroke-dashoffset: 0;
  }
}
.letter__part{
  fill: none;
  stroke-miterlimit: 3;
  stroke-linecap: butt;
  stroke-linejoin: bevel;
}
.letters--effect-4 .letter__part .letter__layer:nth-of-type(1) {
  stroke: #00966c;
  stroke-width: 10px;
  animation: fonts_an_4 1s linear alternate forwards;
}
.letters--effect-4 .letter__part .letter__layer:nth-of-type(2) {
  stroke: #27272d;
  stroke-width: 4px;
  animation: fonts_an_4 0.75s 0.5s ease-out alternate forwards;
}
.letters--effect-4 .letter__part .letter__layer:nth-of-type(3) {
  stroke: #fcec9b;
  stroke-width: 1px;
  animation: fonts_an_4 0.5s 1s ease-out alternate forwards;
}
.letters--effect-3 .letter__part .letter__layer:nth-of-type(1) {
  -webkit-transform: translate3d(-2px, -2px, 0);
  transform: translate3d(-2px, -2px, 0);
  stroke: #dddde6;
  stroke-width: 10px;
  animation: fonts_an_3 1s linear alternate forwards;
}
.letters--effect-3 .letter__part .letter__layer:nth-of-type(2) {
  stroke: #eca80e;
  stroke-width: 6px;
  animation: fonts_an_3 0.75s 0.75s ease-out alternate forwards;
}
.letters--effect-3 .letter__part .letter__layer:nth-of-type(3) {
  stroke: #607d8b;
  stroke-width: 8px;
  animation: fonts_an_3 0.75s 1s ease-out alternate forwards;
}  
.letters--effect-2 .letter__part .letter__layer:nth-of-type(1) {
  stroke: #4caf50;
  stroke-width: 1px;
  animation: fonts_an_2 1s linear alternate forwards;
}
.letters--effect-2 .letter__part .letter__layer:nth-of-type(2) {
  stroke: #ffeb3b;
  stroke-width: 4px;
  animation: fonts_an_2 1s 0.25s ease-out alternate forwards;
}
.letters--effect-2 .letter__part .letter__layer:nth-of-type(3) {
  stroke: #e6437b;
  stroke-width: 10px;
  animation: fonts_an_2 1s 0.5s ease-out alternate forwards;
}
.letters--effect-1 .letter__part .letter__layer:nth-of-type(1) {
  stroke: #f84242;
  stroke-width: 10px;
  stroke-dasharray: 10 20 !important;
  stroke-dashoffset: 0 !important;
  animation: fonts_an_1_1 1s linear infinite;
}
.letters--effect-1 .letter__part .letter__layer:nth-of-type(2) {
  stroke: #3758a7;
  stroke-width: 10px;
  stroke-dasharray: 10 20 !important;
  stroke-dashoffset: 0 !important;
  animation: fonts_an_1_2 1s linear infinite;
}
.letters--effect-1 .letter__part .letter__layer:nth-of-type(3) {
  stroke: #dea521;
  stroke-width: 10px;
  stroke-dasharray: 10 20 !important;
  stroke-dashoffset: 0 !important;
  animation: fonts_an_1_3 1s linear infinite;
}
@keyframes fonts_an_1_1
{ 
0%  { stroke-dashoffset: 0 } 
100% { 
      stroke-dashoffset: 50;
  }
}
@keyframes fonts_an_1_2
{ 
0%  { stroke-dashoffset: -10 } 
100% { 
      stroke-dashoffset: 40;
  }
}
@keyframes fonts_an_1_3
{ 
0%  { stroke-dashoffset: -20 } 
100% { 
      stroke-dashoffset: 30;
  }
}
</style>
