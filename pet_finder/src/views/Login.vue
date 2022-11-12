<template>
    <div class="white bground d-flex align-center">
        <v-container class="mx-auto ">
            <v-row class="mb-7 mt-0 pt-0">
            <span class="text-h4 text-capitalize brown--text mx-auto">Login</span>
            </v-row>
            <v-row>
                <v-card style="width:45%;height:75%;" elevation="2" class="mx-auto brown pt-9 pb-15 lighten-4">
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
                                        <v-btn block outlined color="brown" type="submit" :disabled="!formIsValid">
                                            Login
                                        </v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card> 
            </v-row>
        </v-container>
    </div>


   


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
                console.log(1)
                alert('Username or Password not found! Please enter again!')
                console.log(err)
            })
        },

        
      }
    }
  </script>
  <style scoped>
  .bground {
    background: url('../assets/dogss.png');
    background-size: cover;
    height: 120vh;
    background-position: 20px;
    width: 100%
  }
  </style>