// import Vue from 'vue'
// import Vuex from 'vuex'
// import db from '../firebase/index'
// import { collection, getDocs } from 'firebase/firestore'
// import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

// console.log(db)


//collection ref
// const lostRef=collection(db, 'LostPets')

// //get collection data
// getDocs(userRef)
// .then((snapshot)=>{
//     console.log(snapshot.docs)
// })
// Vue.use(Vuex)





// export const store =new Vuex.Store({
//     state:{
//         //listed pets: [],
//         user:{
//             id:'',
//             username:'',
//             //indivListedPets:[]

//         }
//     },
//     mutations:{
//         setUser(state, payload){
//             state.user=payload
//         }
//     },
//     actions:{
//         register({commit}, payload){

//             const auth=getAuth()
//             createUserWithEmailAndPassword(auth, payload.email, payload.password)
//                 .then(user=>{
//                     const newUser={
//                         id: user.user.uid,
                       
//                         //listed_pets: [],
//                     }
//                     // console.log(newUser.id)

                    
//                     commit('setUser', newUser)
//                 })
//                 .catch((err)=>{
//                     console.log(err)
//                     alert("Registration failed. Please use a different email!")
//                 })
//         }
//     },
//     getters:{
//         getuserid: state=>{
//             var userid=state.user.id
//             return userid
//         }
//     },

// })