<template>
  <div>
       <!-- 直接拿 父组件的 props  -->
      <h2 :title="title">子组件</h2>
      <!--  拿初始化后的props  -->
      <h2 :title="es">子组件{{title}}</h2>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";


export default defineComponent({
    props: {
        //  子组件接受数据
        title: String,
    },
    setup(props) {
        // 将 props 的数据初始化
        const es = ref(props.title)
        return{
            es
        }
    }
})
</script>
