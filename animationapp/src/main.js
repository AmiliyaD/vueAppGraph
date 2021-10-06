import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import myMix from '@/components/methodMixin.vue'
createApp(App).use(store).use(router).use('#mixins-basic').mount('#app')
