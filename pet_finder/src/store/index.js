// import { getDoc } from 'firebase/firestore'
import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase/index'
// import { query,collection,  where, getDocs } from 'firebase/firestore'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

console.log(db)


//collection ref
// const lostRef=collection(db, 'LostPets')

// //get collection data
// getDocs(userRef)
// .then((snapshot)=>{
//     console.log(snapshot.docs)
// })
Vue.use(Vuex)





export const store =new Vuex.Store({
    state:{
        //listed pets: [],
        user:null,
        allPetsArray:null,
        loading:false,
    },
    mutations:{
        setUser(state, payload){
            state.user=payload
        },

        setLoading( state,payload){
            state.loading=payload
        }
    },
    actions:{
        signUserIn( {commit}, payload){  
            commit('setLoading',false)         
            const loggedUser= payload
            commit('setUser', loggedUser)
        }
            
    },
    getters:{
        getuser(state){
            console.log(state.user)
            return state.user
        },
        
        // getAllPets(state){

        // }
    },

})