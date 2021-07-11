import Vue from 'vue' 
import App from './App.vue'
import Vuetify from 'vuetify' 
import router from './router'
import store from './store'
import VueResource from 'vue-resource';
import price from './filters/price'
import Vuelidate from 'vuelidate'

Vue.filter('price', price)
Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(VueResource)
Vue.http.options.credentials = true;
Vue.http.interceptors.push(function(request) {
  request.headers.set('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
  request.headers.set('Accept', 'application/json');
  request.headers.set('Content-Type', 'application/json');
});

new Vue({
    vuetify: new Vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
