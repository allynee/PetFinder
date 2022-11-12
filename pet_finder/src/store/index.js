// import { getDoc } from 'firebase/firestore'
import { doc,getDoc,arrayUnion, updateDoc } from 'firebase/firestore'
import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase/index'
import {getAuth, signOut} from 'firebase/auth'
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





export const store = new Vuex.Store({
    state:{
        //listed pets: [],
        user:null,
        // allPetsArray:null,
        loading:false,
    },
    mutations:{
        setUser(state, payload){
            state.user=payload
        },
        setLoading( state,payload){
            state.loading=payload
        },
        //update array (add/delete)
        addPetArray(state, petid){
            state.user.listedPets.push(petid)
        }
    },
    actions:{
        signUserIn( {commit}, payload){  
            commit('setLoading',false)         
            const loggedUser= payload
            commit('setUser', loggedUser)
        },
        autoSignIn({commit},payload){ 
            const userRef=doc(db, 'Users', payload)
            getDoc(userRef)
            .then((snapshot)=>{
                const user_obj=snapshot.data()
                console.log(user_obj)
                commit('setUser', user_obj)
            })
            .catch( (err)=>{
                console.log(err)
            })
        },
        logout({commit}){
            const auth=getAuth()
            signOut(auth)
            .then(()=>{
                console.log('User is signed out!')
            })
            .catch((err)=>{
                console.log(err)
            })
            commit('setUser', null)
        },
        updatePetArray({commit},payload){
            const arrayRef=doc(db, 'Users',payload.userid)
            updateDoc(arrayRef,{listedPets: arrayUnion(payload.petid)})
            .then( ()=>{
                console.log('PetID updated in user database')
                commit('addPetArray', payload.petid)
            })
            .catch((err)=>{
                console.log(err)
                console.log("PetID failed to update in user database")
            })
        },
            
    },
    getters:{
        getuser(state){
            console.log(state.user)
            return state.user
        },
        loading(state){
            return state.loading
        }
        
   
    }

})