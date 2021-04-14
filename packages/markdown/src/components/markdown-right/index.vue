<template>
  <div>
    <AutoTextArea></AutoTextArea>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AutoTextArea from "../auto-text-area/index.vue";

export default defineComponent({
  name: "markdown-right",
  components: { AutoTextArea },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
