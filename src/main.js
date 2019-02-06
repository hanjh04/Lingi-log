import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import store from './store';
import BootStrapVue from './css/index';

Vue.config.productionTip = false

new Vue({
    router,
    store,
    BootStrapVue,
    render: h => h(App),
}).$mount('#app')