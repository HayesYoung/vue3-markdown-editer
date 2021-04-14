<template>
  <div>
      <h2 :title="title">父组件</h2>

      <!-- 转递 title 给子组件 -->
      <Son :title="title"></Son>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Son from './son.vue'
export default defineComponent({
    props: {
        title: {
            type: String,
            default: "I am parent"
        }
    },
    components: {
        Son
    }
})
</script>
