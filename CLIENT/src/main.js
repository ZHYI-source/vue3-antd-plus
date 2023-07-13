import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less'; // 导入 antd 的样式文件
// import 'ant-design-vue/dist/antd.css'; // 导入 antd 的样式文件（如果使用 .css 文件）

import '@/assets/styles/main.scss'
const app = createApp(App)

app.use(Antd)
app.use(createPinia())
app.use(router)

console.log('当前模式：', import.meta.env.MODE)


app.mount('#app')
