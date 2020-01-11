<template>
  <div id="specification">
    <h1 class="padding20 fs-20">svg-icon</h1>
    <div class="container">
      <div v-for="item in iconMap" class="float-left flex-container-col center iconBox">
        <svg-icon :iconClass="item.default.id" style="font-size: 50px;"></svg-icon>
        <div class="text-center fs-10">
          {{item.default.id}}
        </div>
      </div>
    </div>
    
    <h1 class="padding20 fs-20">svg-Sprite</h1>
    <div class="container">
      <div v-for="item in iconMap" class="float-left flex-container-col center iconBox">
        <svg-sprite :iconClass="item.default.id.replace('icon-','svg-')" style="font-size: 50px;"></svg-sprite>
        <div class="text-center fs-10">
          {{item.default.id.replace('icon-','svg-')}}
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.iconBox{
  width:150px;
  height:100px;
}

</style>

<script>
import Vue from 'vue';
import {iconMap} from '../../icons';

export default {
	name: 'specification',
	data () {
    return {
      iconMap:iconMap
    }
	},
	computed: {

    
	},
  methods: {

  }
}
</script>


