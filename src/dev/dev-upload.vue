<template>
  <div>
    <Editor ref="froalaEditor" @on-change="changeContent" v-model="form.description"></Editor>
  </div>
</template>

<script>
import Editor from "../plugin/editor";
export default {
  data() {
    return {
      testArr: [1, 2, 6],
      form: {
        title: "",
        briefDescription: "",
        picUrl: "",
        description: ""
      }
    };
  },
  components: { Editor },

  created() {
    // this.init()
  },
  methods: {
    getChildrenFunction() {
      this.$nextTick(() => {
        this.$refs.toast.toastPlugin("在父组件里出发调用toast", 2500);
      });
    },
    // 富文本初始化
    // init() {
    //   this.$nextTick(() => {
    //     this.$refs.froalaEditor.setHtml(this.form.description);
    //   });
    // },
    // 课程详情事件
    changeContent(html) {
      if (html !== "") {
        let htmls =
          '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title></title><style>img {width: 100% !important;}video {width: 100% !important;}</style></head><body>' +
          html +
          "</body></html>";
        this.form.description = htmls;
      }
    }
  }
};
</script>

<style>
.fr-wrapper > div[style*="z-index: 9999"] {
  width: 100% !important;
  position: relative !important;
  top: -60px !important;
}
.fr-element.fr-view {
   position: absolute;
   top: 0;
}
.fr-placeholder {
   margin-top: 0 !important;
}
.fr-toolbar {
  border-top: 0px !important;
}
</style>
