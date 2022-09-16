import { createApp } from 'vue'
import { createPinia } from 'pinia'
import myProfilePlugin from './plugins/myProfilePlugin'

import App from './App.vue'
import router from './router'

import './assets/scss/main.scss'

const app = createApp(App)
app.use(myProfilePlugin);

app.use(createPinia())
app.use(router)

app.mount('#app')
