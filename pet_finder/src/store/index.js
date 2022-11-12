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





export const store = new Vuex.Store({
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

        // signUserIn( {commit}, payload){
        //     // const auth=getAuth()
        //     // signInWithEmailAndPassword(auth,payload.email, payload.password )
        //     // .then( (credentials)=>{
        //     //     var uid=credentials.user.uid
        //     //     const q=query(collection(db, 'Users', ), where('userid', '==',uid))
        //     //     getDocs(q)
        //     //     .then( (documents)=>{
        //     //         console.log(documents)
        //     //         var user_obj=documents[0]
        //     //         console.log(user_obj)
        //     //     })
        //     //     .catch( (err)=>{
        //     //         console.log(err)
        //     //     })

        //     // })
        //     const loggedUser= payload;
        //     commit('setUser', loggedUser)
        // },

        // signUserIn( payload){
        //     const auth=getAuth();
        //     signInWithEmailAndPassword(auth,payload.email, payload.password )
        //     .then( (credentials)=>{
        //         var uid=credentials.user.uid
        //         const q=query(collection(db, 'Users', ), where('userid', '==',uid))
        //         getDocs(q)
        //         .then( (documents)=>{
        //             console.log(documents)
        //             var user_obj=documents[0]
        //             console.log(user_obj)
        //         })
        //         .catch( (err)=>{
        //             console.log(err)
        //         })

        //     })

        // }
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
        loading(state){
            return state.loading
        }
        
        // getAllPets(state){

        // }
    }

})