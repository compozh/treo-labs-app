import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import BuyModalComponent from '@/components/BuyModal';

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import * as fb from 'firebase'

Vue.component('app-buy-modal', BuyModalComponent);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyC7FZh8g1U2DBexj8eM4jahjIEVLTLe2j8",
      authDomain: "treo-labs-e74cd.firebaseapp.com",
      databaseURL: "https://treo-labs-e74cd.firebaseio.com",
      projectId: "treo-labs-e74cd",
      storageBucket: "treo-labs-e74cd.appspot.com",
      messagingSenderId: "594998248925"
    });
    
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });
    
    this.$store.dispatch('fetchProducts');
  }
}).$mount('#app');
