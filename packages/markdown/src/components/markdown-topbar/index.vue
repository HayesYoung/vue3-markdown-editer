<template>
  <div class="top-bar">
    <!-- 左边 -->
    <div class="bar-container-right">
      <button class="bar-btn" title="标题">
        <i class="iconfont icon-H"></i>
      </button>
      <button class="bar-btn"><i class="iconfont icon-open"></i></button>
      <button class="bar-btn"><i class="iconfont icon-u"></i></button>
      <button class="bar-btn" title="居左">
        <i class="iconfont icon-l"></i>
      </button>
      <button class="bar-btn" title="居中">
        <i class="iconfont icon-c"></i>
      </button>
      <button class="bar-btn" title="居右">
        <i class="iconfont icon-r"></i>
      </button>
      <!-- <i class="iconfont icon-r"></i>  -->
    </div>

    <!-- 右边 -->
    <div class="bar-container-left">
      <button class="bar-btn"><i class="iconfont icon-b"></i></button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "markdown-topnav",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style scoped>
@import "../../font/iconfont.css";

.top-bar {
  height: 40px;
  width: 100%;
  display: flex;
  /* grid: 2; */
  line-height: 40px;
  margin: 0 auto;
  background-color: #dbdbdb;
  /* background-color: #1c1c1c; */
}
.bar-container-right {
  width: 70%;
  padding-left: 20px;
  padding-right: 10px;
  /* background-color: #1c1c1c; */
  /* text-align: center; */
}
.bar-container-left {
  width: 30%;
  padding-left: 10px;
  padding-right: 20px;
  /* background-color: red; */
  /* text-align: center; */
}
.bar-btn {
  margin: auto 5px;
  border: 0 none !important;
  outline: none !important;
  cursor: pointer;
  background-color: #dbdbdb;

}
</style>
