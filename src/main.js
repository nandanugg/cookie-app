import { createApp } from 'vue'
import VueCookies from 'vue3-cookies'
import App from './App.vue'

const Vue = createApp(App)
Vue.use(VueCookies, {
    expireTimes: "1d"
})

Vue.mount('#app')