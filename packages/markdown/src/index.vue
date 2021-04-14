<template>
  <div>
    <div class="mark-container">
      <MarkdownTopNav></MarkdownTopNav>
      <MarkdownRight></MarkdownRight>
      <MarkdownLeft></MarkdownLeft>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MarkdownTopNav from "./components/markdown-topbar/index.vue";
import MarkdownLeft from "./components/markdown-left/index.vue";
import MarkdownRight from "./components/markdown-right/index.vue";

export default defineComponent({
  name: "Markdown",
  components: {
    MarkdownTopNav,
    MarkdownLeft,
    MarkdownRight,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.mark-container {
  width: 100%;
  height: 600px;
  border: 1px solid #1c1c1c;
}
</style>
