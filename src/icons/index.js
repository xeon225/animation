import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件
Vue.component('svg-icon', SvgIcon)

import SvgSprite from '@/components/SvgSprite';// svg雪碧图组件
Vue.component('svg-sprite', SvgSprite);


 
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)

export {
    iconMap
}