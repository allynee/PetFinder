import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import AOS from 'aos'
import 'aos/dist/aos.css'
//backend stuff
import { store } from './store/index'
import "./firebase/index"
import { 
    getFirestore, collection, getDocs
} from 'firebase/firestore'

//connecting to firebase 
const db=getFirestore()

//get collection data
const userRef=collection(db, 'Users')
getDocs(userRef)
.then((snapshot)=>{
    console.log(snapshot.docs)
    console.log("database connected")
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  db,
  store:store,
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
