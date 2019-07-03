/**
 * 相关的全局配置
 */


;(function (win) {
  const origin = location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? 'http://localhost:8080/api' : location.origin

  win.htp = {
    apihost: origin + "/", //接口地址
  }
})(window)
