// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jQuery from 'jquery'

import VueFroala from 'vue-froala-wysiwyg'
import 'font-awesome/css/font-awesome.min.css'
import 'froala-editor/js/froala_editor.pkgd.min'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'froala-editor/js/languages/zh_cn'
import 'froala-editor/css/froala_style.min.css'

Vue.config.productionTip = false

window.$ = jQuery
window.jQuery = jQuery
Vue.use(VueFroala)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
