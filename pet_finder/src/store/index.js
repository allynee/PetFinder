import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase/app'
// import { collection, getDocs } from 'firbase/firestore'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

Vue.use(Vuex)

// const userRef=collection(db, 'Users')
// getDocs(userRef)
// .then((snapshot)=>{
//     console.log(snapshot.docs)
//     console.log("database connected")
// })

export const store =new Vuex.Store({
    state:{
        //listed pets: [],
        user:{
            id:'',
            username:'',
            //indivListedPets:[]

        }
    },
    mutations:{
        setUser(state, payload){
            state.user=payload
        }
    },
    actions:{
        register({commit}, payload){

            const auth=getAuth()
            createUserWithEmailAndPassword(auth, payload.email, payload.password)
                .then(user=>{
                    const newUser={
                        id: user.user.uid,
                       
                        //listed_pets: [],
                    }
                    // console.log(newUser.id)

                    
                    commit('setUser', newUser)
                })
                .catch((err)=>{
                    console.log(err)
                    alert("Registration failed. Please use a different email!")
                })
        }
    },
    getters:{
        getuserid: state=>{
            var userid=state.user.id
            return userid
        }
    },

})