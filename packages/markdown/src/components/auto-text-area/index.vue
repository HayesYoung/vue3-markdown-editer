<template>
  <div class="auto-text-area">
    <pre class="auto-text-pre"><br>
    </pre>
    <textarea
      class="auto-text-input"
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="请输入内容"
    ></textarea>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "auto-text-area",
  components: {},
  props: {
    handleOpen: {
      type: Boolean,
      default: false,
    },
  },

  setup() {
    return {};
  },
});
</script>

<style scoped>
.auto-text-area {
  position: relative;
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;
  line-height: normal;
  background-color: red;
}
.auto-text-pre {
  display: block;
  white-space: pre-wrap;
  word-wrap: break-word !important;
  visibility: hidden;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
}

.auto-text-input {
  font-family: Menlo, "Ubuntu Mono", Consolas, "Courier New", "Microsoft Yahei",
    "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  color: #2c3e50;
}
.auto-textarea-input.no-border {
  outline: 0 none;
  border: none !important;
}

.auto-textarea-input.no-resize {
  resize: none;
}
</style>
