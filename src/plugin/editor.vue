<template>
  <froala :config="config"></froala>
</template>
<script>
export default {
  name: 'editor',
  data() {
    function listsds() {
      var imagess = "";
      if (window.location.href.indexOf("-dev") != -1) {
        imagess =
          "https://platform-dev.qms888.com/new-qms-p-server/upload/file";
      } else if (window.location.href.indexOf("-ts") != -1) {
        imagess = "https://platform-ts.qms888.com/new-qms-p-server/upload/file";
      } else if (window.location.href.indexOf("localhost") != -1) {
        imagess =
          "https://platform-dev.qms888.com/new-qms-p-server/upload/file";
      } else {
        imagess = "https://platform.qms888.com/new-qms-p-server/upload/file";
      }
      return imagess;
    }
    return {
      editor: null,
      config: {
        zIndex: 0,
        height: "400",
        toolbarSticky: false,
        autofocus: true,
        toolbarButtons: [
          "fullscreen",
          "bold",
          "italic",
          "underline",
          "strikeThrough",
          "subscript",
          "superscript",
          "|",
          "fontFamily",
          "fontSize",
          "color",
          "inlineClass",
          "inlineStyle",
          "paragraphStyle",
          "lineHeight",
          "|",
          "paragraphFormat",
          "align",
          "formatOL",
          "formatUL",
          "outdent",
          "indent",
          "quote",
          "-",
          "insertLink",
          "insertImage",
          "insertVideo",
          "embedly",
          "insertFile",
          "insertTable",
          "|",
          "emoticons",
          "fontAwesome",
          "specialCharacters",
          "insertHR",
          "selectAll",
          "clearFormatting",
          "|",
          "print",
          "getPDF",
          "spellChecker",
          "help",
          "html",
          "|",
          "undo",
          "redo"
        ],
        imageEditButtons: [
          "imageAlign",
          "imageRemove",
          "|",
          "imageLink",
          "linkOpen",
          "linkEdit",
          "linkRemove",
          " - ",
          "imageDisplay",
          "imageStyle",
          "imageAlt",
          "imageSize"
        ],
        placeholder: "请填写内容",
        language: "zh_cn",
        imageDefaultWidth: 500,
        imageUploadURL: listsds(),
        videoUploadURL: listsds(),
        fileUploadURL: listsds(),
        //   imageManagerLoadURL: "https://platform-dev.qms888.com/new-qms-p-server/upload/file",
        requestHeaders: { "X-With-Token": localStorage.accessToken },
        events: {
          "froalaEditor.initialized": (e, editor) => {
            this.editor = editor;
          },
          "froalaEditor.contentChanged": (e, editor) => {
            this.$emit("on-change", editor.html.get(true));
          }
        }
      }
    };
  },
  created() {},
  methods: {
    setHtml(html) {
      if (this.editor) {
        this.editor.html.set(html);
      }
    }
  }
};
</script>
<style>
.fr-wrapper > div[style*="z-index: 9999"] {
   position: absolute;
   top: -10000px;
   opacity: 0;
}
.fr-element.fr-view {
   position: absolute;
   top: 0;
}
.fr-placeholder {
   margin-top: 0 !important;
}
</style>
