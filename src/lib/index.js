import editor from './editor.vue'

let usefuleditor = {}

usefuleditor.install = function (Vue, options) {
  Vue.prototype.$msg = 'Hello I am test.js'
  Vue.prototype.$myMethod = function (arr) {
    if (arr.length < 0) {
      return false
    } else {
      arr = arr.join('连接你我')
      return arr
    }
  }
  Vue.component(editor.name, editor)
}

export default usefuleditor
