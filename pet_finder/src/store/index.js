import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

Vue.use(Vuex)

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
                        id: user.uid,
                        username: payload.username,
                        //listed_pets: [],
                    }
                    commit('setUser', newUser)
                })
                .catch((err)=>{
                    alert(err)
                })
        }
    },
    getters:{

    },

})