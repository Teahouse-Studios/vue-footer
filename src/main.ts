import App from './App.vue'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'

const app = createApp(App)
app.use(vuetify)
app.mount('#vue-t-footer-wrapper')
