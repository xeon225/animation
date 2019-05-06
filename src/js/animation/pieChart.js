// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import PieChart from '../../components/animation/pieChart.vue'
// import '../../css/cmui.css'



/* eslint-disable no-new */
new Vue({
  el: '#pieChart',
  components: { PieChart },
  template: '<pieChart/>'
})
