import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
//backend stuff
import { store } from './store/index'
import "./firebase/index"
// import { 
//     getFirestore, collection, getDocs
// } from 'firebase/firestore'



//connecting to firebase 


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store:store,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
