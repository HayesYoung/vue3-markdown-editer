import { createApp } from 'vue'
import App from './App.vue'
import Markdown from '../packages/index' 

createApp(App).use(Markdown).mount('#app')
