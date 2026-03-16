// 引入 VitePress 默认主题
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import Mycomponent from "./components/Mycomponent.vue"

export default {
  extends: DefaultTheme, // 继承默认主题
  enhanceApp({app}) { 
    // 注册全局组件
    app.component('Mycomponent' , Mycomponent)
  }
}

