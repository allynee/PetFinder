<template>
    <div class="white pa-15 pt-5 bground">
        <v-container class="pl-10 pr-10 pb-10" style="width:45%;height:45%">
            <span class="text-h6 text-capitalize grey--text">Create your account.</span><br/>
            <v-row class="mb-7 ml-1 mt-1">
                <span class="text-h4 text-capitalize brown--text">Join thousands of pet lovers.</span>
            </v-row>
            <v-container>
                <form @submit.prevent="onRegister">
                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            outlined
                            name="fullname"
                            label="Fullname*"
                            id="fullname"
                            v-model="fullname"
                            type="text"
                            :rules="nameRules"
                            required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            outlined
                            name="email"
                            label="Email*"
                            id="email"
                            v-model="email"
                            type="email"
                            :rules="emailRules"
                            required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            outlined
                            name="username"
                            label="Username*"
                            id="username"
                            v-model="username"
                            type="text"
                            :rules="userRules"
                            required>
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            outlined
                            name="password"
                            label="Password*"
                            id="password"
                            v-model="password"
                            :append-icon="value ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                            :rules="pwdRules">
                            </v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs12>
                            <v-text-field
                            outlined
                            name="confirmpassword"
                            label="Confirm Password*"
                            id="confirmpassword"
                            v-model="confirmpassword"
                            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="() => (showPassword = !showPassword)"
                            :type="showPassword ? 'password' : 'text'"
                            :rules="[comparePasswords]">
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                    <span class>
                        <v-checkbox>
                            <template v-slot:label>
                                I wish to receive emails regarding activities involving my account
                            </template>
                        </v-checkbox>
                    </span>

                    <v-layout row>
                        <v-flex xs12>
                            <v-btn block outlined color="brown" type="submit" :disabled="!formIsValid">
                                Register
                            </v-btn>
                        </v-flex>
                    </v-layout>

                    <!-- <v-btn block :disabled="!valid" @click="validate"
                        color="brown" outlined>
                        Submit
                    </v-btn> -->
                </form>
            </v-container>
        </v-container>
    </div>


   


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
            value: String,
            showPassword: String,
            nameRules: [
                v => v.length >= 2 || 'Minimum length is 2 characters',
            ],
            emailRules: [
                v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            userRules: [
                v => v.length >= 8 || 'Minimum length is 8 characters',
                v => /[0-9]/.test(v) || 'Must contain at least 1 digit',
            ],
            pwdRules: [
                v => !!v || 'Please type password.',
                v => (v && v.length >= 6) || 'Minimum length is 6 characters',
                v => /[a-z]/.test(v) || 'Must contain at least 1 lowercase letter',
                v => /[A-Z]/.test(v) || 'Must contain at least 1 uppercase letter',
                v => /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/.test(v) || 'Must contain at least 1 symbol'
            ],
        }
      },
      computed:{
        comparePasswords(){
            return this.password!=this.confirmpassword ? 'Passwords do not match!': ''
        },
        // passwordLength(){
        //     return this.password.length<6 ? 'Password must have at least 6 characters long!' :''
        // },
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
  <style scoped>
  .bground {
    background: url('../assets/bg.png');
    background-size: cover;
    height: 120vh;
    background-position: 20px;
    width: 100%
  }
  </style>
  