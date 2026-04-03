import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createUnhead, headSymbol } from '@unhead/vue'
import router from './router'
import App from './App.vue'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
const head = createUnhead()

app.use(pinia)
app.use(router)

// Manually provide unhead instance (v2 API no longer auto-registers as Vue plugin)
app.provide(headSymbol, head)
app.config.globalProperties.$unhead = head
app.config.globalProperties.$head = head

app.mount('#app')
