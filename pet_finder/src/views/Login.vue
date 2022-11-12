<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="sampleLogin">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="email"
                                        label="Email"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                             

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="password"
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required
                                        >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit" :disabled="!formIsValid">
                                            Login
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>


   


  </template>
  
  <script>
    import db from '../firebase/index'
    // import router from '../router/index'
    import {  doc, getDoc } from 'firebase/firestore'
    import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
  
    export default {

      name: 'login',
      data(){
        return{
            email:'',
            password:'',
            userid:'',
        }
      },
      computed:{
        formIsValid(){
            return this.email!='' && 
            this.password!='' 
        },

        user(){
            return this.$store.getters.getuser
        }
    
      
      },
      watch:{
        user (value){
            if (value!=null &&  value!=undefined){
                this.$router.push('/')
            }
        }
      },
      methods:{

        sampleLogin(){
            this.$store.commit('setLoading',true)
            const auth=getAuth()
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then( (credentials)=>{
                console.log(credentials.user.uid)
                const uid=credentials.user.uid
                const docRef=doc(db, 'Users',uid)
                getDoc(docRef)
                .then( (snapshot)=>{
                    const user_obj= snapshot.data()
                    this.$store.dispatch('signUserIn',user_obj)

                    console.log(user_obj)

                })
                .catch( (err)=>{
                    this.$store.commit('setLoading', false)
                    alert('Username or Password not found! Please enter again!')
                    console.log(err)
                    console.log(2)
                })
       
                
                // const q= query(collection(db, 'Users'), where('userID', '==', uid))
                // getDocs(q)
                // .then( (documents)=>{
                //     documents.docs.forEach((oneDoc)=>{
                //         var user_obj=oneDoc.data()
                //         console.log(user_obj)
                //     })
                //     // console.log(user_obj)
                // })
                // // console.log(data)
            })
            .catch((err)=>{
                this.$store.commit('setLoading',false)
                console.log(1)
                alert('Username or Password not found! Please enter again!')
                console.log(err)
            })
        },

        
      }
    }
  </script>
  