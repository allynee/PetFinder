<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onRegister">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="fullname"
                                        label="Fullname"
                                        id="fullname"
                                        v-model="fullname"
                                        type="text"
                                        required>
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

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
                                        name="username"
                                        label="Username"
                                        id="username"
                                        v-model="username"
                                        type="text"
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
                                        :rules="[passwordLength]">
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="confirmpassword"
                                        label="Confirm Password"
                                        id="confirmpassword"
                                        v-model="confirmpassword"
                                        type="password"
                                        :rules="[comparePasswords]">
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit" :disabled="!formIsValid">
                                            Register
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
    import { doc, setDoc } from 'firebase/firestore'
    import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
  
    export default {

      name: 'register',
      data(){
        return{
            fullname:'',
            email:'',
            username:'',
            password:'',
            confirmpassword:'',
            userid:'',
        }
      },
      computed:{
        comparePasswords(){
            return this.password!=this.confirmpassword ? 'Passwords do not match!': ''
        },
        passwordLength(){
            return this.password.length<6 ? 'Password must have at least 6 characters long!' :''
        },
        formIsValid(){
            return this.fullname!='' && 
            this.email!='' &&
            this.username!=''&&
            this.password!='' &&
            this.confirmpassword!=''&&
            this.password==this.confirmpassword
        }
    
      
      },
      methods:{

        onRegister(){
            const auth=getAuth()
            //Async Create User function
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then( user=>{
                console.log(user)
                const uid=user.user.uid
                console.log(uid)
                this.userid=user.user.uid
                const newUser={
                    userid: this.userid,
                    fullname:this.fullname,
                    email: this.email, 
                    username: this.username,
                    password:this.password,
                    listedPets:[],
                }
                //Async function to add this user into collection (inner async loop)
                const docRef=doc(db,"Users", uid)
                setDoc(docRef, newUser)
                .then(()=>{
                    console.log('Registration successful')
                    this.$router.push('/login')
                })

                // addDoc(collection(db, 'Users'), newUser)
                // .then( ()=>{
                //     alert('Registration successful!')
                //     this.$router.push('/login')
                // })
                .catch( (err)=>{
                    console.log(err)
                    alert('Failed to add user to database')
                    return
                })
            })
            .catch( (err)=>{
                console.log(err)
                alert('Email already in use! Please retry!')
                return
            })
            // console.log('account created')
        }
      }
    }
  </script>
  