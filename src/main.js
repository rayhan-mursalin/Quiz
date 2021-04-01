import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

export const eventBus = new Vue();

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')
