# editor


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# pack
npm run dist

#release to npm
npm publish

# 插件使用说明
1，此富文本可实现双向数据绑定；
2，@on-change ,change事件可监控数据的变化；
3，在使用插件时，需要初始化数据，以保证当数据发生变化时，绑定的数据也得到更新；
// 富文本初始化
    init() {
      this.$nextTick(() => {
        this.$refs.froalaEditor.setHtml(this.form.description);
      });
    },
4，需要向子组件传入上传的地址url。

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-editor).
