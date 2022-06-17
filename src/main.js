import { createApp } from 'vue'
import Cookies from 'js-cookie'
import App from './App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
import 'element-plus/dist/index.css'
import router from './router'
import store from './store'
import './permission' // permission control
const app = createApp(App);


app.use(router)
app.use(store)
app.use(ElementPlus, {
    locale: locale,
    // 支持 large、default、small
    size: Cookies.get('size') || 'default'
})
app.mount('#app')
