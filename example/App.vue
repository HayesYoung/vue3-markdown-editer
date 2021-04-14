<template>
  <div>
    <Markdown></Markdown>
  </div>
</template>

<script>
import { ref } from "vue";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/arduino-light.css";

export default {
  name: "App",
  components: {},
  setup() {
    const msg = ref("测试");
    const Md = new MarkdownIt({
      html: false, // Enable HTML tags in source
      xhtmlOut: false, // Use '/' to close single tags (<br />).
      breaks: false, // Convert '\n' in paragraphs into <br>
      langPrefix: "language-", // CSS language prefix for fenced blocks. Can be
      linkify: false, // Autoconvert URL-like text to links
      typographer: false,
      quotes: "“”‘’",
      highlight: function(/*str, lang*/) {
        return "";
      },
    });
    const Result = ref(
      Md.render(
        "# markdown-it rulezz\n孙静\n## 2013,\n[百度](https://baidu.com)\n|我爱你孙静|1023|column3|\n|-|-|-|\n|1314|content2|content3|"
      )
    );

    setTimeout(async () => {
      document.querySelectorAll("pre code").forEach((block) => {
        try {
          hljs.highlightBlock(block);
        } catch (e) {
          console.log("高亮失败");
        }
      });
    }, 140);
    return { msg, Result };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
