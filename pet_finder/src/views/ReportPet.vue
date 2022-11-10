<template>
<div class="white pa-15">
    <v-container class="brown lighten-5 pa-10">
        <!-- top -->
        <v-row justify="center" class="text-center mb-10" data-aos="fade-down">
            <v-col cols="12">
                <v-img :src="require('../assets/DogCat.png')" class="my-3" contain height="150"/>
            </v-col>
            <v-col cols="12">
                <h1 class="text-h4 brown--text text-center">Report a Lost/Found Pet</h1>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-form class="px-3 my-5" ref="form" @submit.prevent="submitForm" data-aos="fade-down">
            <v-row justify="center" class="my-5">
            <!-- Choose btwn lost and found -->
            <v-col cols="12">
                <h1 class="text-h6 brown--text text-center font-weight-light ">I am reporting a...</h1>
            </v-col>
            <v-radio-group v-model="formType">
            <v-col cols="12" align="center">
                
                    <v-btn rounded depressed large color="brown lighten-4 mx-4">
                        <v-radio label="Lost Pet" value="Lost Pet" required ></v-radio>
                    </v-btn> 
                    <v-btn rounded depressed large color="brown lighten-4 mx-4" >
                        <v-radio label="Found Pet" value="Found Pet" required ></v-radio>
                    </v-btn>
             
            </v-col>
            </v-radio-group>
            </v-row>
            <v-row justify="center mb-3">
            <!-- Pet's Name -->
                <v-col cols="12" md="6">
                    <v-text-field label="Pet's Name" placeholder="Enter unknown if pet's name is not known..."
                    :rules="inputRules" name:pname outlined v-model="petName">
                    </v-text-field>
                </v-col>
            <!-- Last seen Location-->
                <v-col cols="12" md="6">

                    <!-- placeholder="Enter the pet's last seen location..." -->
                    <!-- removed bc there's some weird overlap-->
                    <vuetify-google-autocomplete id="search" label="Pet's Last Seen Location" append-icon="mdi-map-marker" outlined
                        country="sg"
                        :rules="inputRules"
                        v-model="petLocation"
                        @click:append="getUserLoc"
                    >
                        </vuetify-google-autocomplete>
                        <!-- @placechanged="getAddressData" -->

                </v-col>
            <!-- Date -->
            <v-col cols="12" md="6">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                            transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Pet's Last Seen Date" outlined
                                v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                        Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                        OK
                    </v-btn>
                    </v-date-picker>
                    </v-menu>
                </v-col>
            <!-- Pet type-->
                <v-col cols="12" md="6">
                    <v-combobox v-model="petType" outlined :items="petTypes" label="Pet's Type" placeholder="Select the Pet's Type..." class="text-brown"></v-combobox>
                </v-col>
            <!-- Breed -->
                <v-col cols="12" md="6">
                    <v-combobox v-model="petBreed" outlined :items="petTypes" label="Pet's Breed" placeholder="Select the Pet's Colour(s)..." multiple class="text-brown"></v-combobox>
                </v-col>
            <!-- Colour -->
            <v-col cols="12" md="6">
                <v-combobox v-model="petColor" outlined :items="petColours" label="Pet's Colour" placeholder="Select the Pet's Colour(s)..." multiple class="text-brown"></v-combobox>
            </v-col>
            <!-- Collar colour -->
            <v-col cols="12" md="6">
                <v-combobox v-model="collarColor" outlined :items="collarColours" label="Pet's Collar Colour" placeholder="Select the Pet's Collar Colour..." class="text-brown"></v-combobox>
            </v-col>
            <!-- Size -->
            <v-col cols="12" md="6">
                <v-combobox v-model="petSize" outlined :items="petSizes" label="Pet's Size" placeholder="Select the Pet's Size.." class="text-brown"></v-combobox>
            </v-col>
            <!-- Gender -->
            <v-col cols="12" md="6">
                <v-combobox v-model="petGender" outlined :items="petGenders" label="Pet's Gender" placeholder="Select the Pet's Gender..." class="text-brown"></v-combobox>
            </v-col>
            <!-- Submit Photo -->
            <v-col cols="12" md="6">
                <v-file-input outlined label="Pet's Image" accept="image/*"
                    placeholder="Upload an Image of the Pet"
                                prepend-icon="mdi-camera"
                ><v-icon>mdi-camera</v-icon></v-file-input>
            </v-col>
            </v-row>
            <!-- Submit -->
            <v-row align="center" justify="center" class="mt-5">
                <v-col cols="12" align="center">
                    <v-btn x-large depressed color="brown lighten-4" type="submit" :disabled="!formIsValid" >
                        Submit
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
    <!-- scroll to top button -->
    <v-btn v-scroll="onScroll" v-show="fab" fab fixed bottom right color="brown lighten-4" @click="toTop">
    <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
</div>
</template>


<script>
import AOS from 'aos'
// const { validationMixin, default: Vuelidate } = require('vuelidate')
// const { required} = require('vuelidate/lib/validators')
import db from '../firebase/index'
import { collection, addDoc } from 'firebase/firestore'
//collection ref




export default {

name:'reportpet',



mounted() {
    AOS.init({
    duration: 1000,
    });
    this.$refs.address.focus();
},
data(){
  return {
    address: "",
    fab: false,
    radioGroup: 1,
    petTypes: ["Dog","Rabbit","Cat","Bird","Hamster","Fish","Terrapin","Frog","Guinea Pig","Other Pet Types"], 
    petColours: ["Beige", "Black", "Brown", "Grey", "White", "Others"],
    collarColours: ["No Collar", "Beige", "Black","Brown", "Grey", "White", "Pink", "Blue", "Yellow", "Red", "Others"],
    petGenders: ['Male','Female',"Unknown"],
    petSizes: ['Small', 'Medium', 'Large'],
    colour: [1,4],
    fromDateMenu: false,
    fromDateVal: null,
    minDate: "2019-07-04",

        
    //bind form data to submitted_pet 
    formType:'',
    petLocation:'',
    petName:'',
    petType:'',
    petColor:'',
    petGender:'',
    collarColor:'',
    petBreed:'',
    petSize:'',
    date:null,
    //use this.date to access date (string format)
    //left with img


    inputRules: [
            v => v.length >= 3 || 'Minimum length is 3 characters'
        ],
        zipRule: [
            v => Number.isInteger(Number(v)) || 'Zip must be numeric',
            v => v.length == 6 || 'Zip length must be 6 characters'
        ],

  }
},
// validations (){
    // return {
    //     pname: {required},
    //     loc: {required},
    //     missingSince: {required},
    //     zip: {required},
    //     petType: {required},
    //     petCol: {required},
    //     petColCol: {required},
    //     breed: {required},
    //     gen: {required},
    //     petSize: {required}
    // }
// },
methods: {
    submitForm() {
        if (this.formType=='Lost Pet'){
            const doc= {
                petName:this.petName,
                petLocation: this.petLocation,
                petDate: this.date,
                petType: this.petType,
                petBreed: this.petBreed[0],
                petColor:this.petColor[0],
                collarColor:this.collarColor,
                petSize:this.petSize,
                petGender:this.petGender,
                //left image
            }
            console.log(doc)
            const docRef= addDoc(collection(db, 'LostPets'), doc)
            .then( ()=> {
                alert('Lost pet listed with ID', docRef.id)
            })
            .catch( (err)=>{
                console.log(err)
                alert("Failed to add lost pet. Please check the fields and try again!")
            })
        }

        else{
            const doc= {
                petName:this.petName,
                petLocation: this.petLocation,
                petDate: this.date,
                petType: this.petType,
                petBreed: this.petBreed[0],
                petColor:this.petColor[0],
                collarColor:this.collarColor,
                petSize:this.petSize,
                petGender:this.petGender,
                //left image
            }
            console.log(doc)
            const docRef= addDoc(collection(db, 'FoundPets'), doc)
            .then( ()=> {
                alert('Found pet listed with ID', docRef.id)
            })
            .catch( (err)=>{
                console.log(err)
                alert("Failed to add found pet. Please check the fields and try again!")
            })
        }
        

    },
    // get user current location
    getUserLoc(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                console.log(position.coords.latitude);
                console.log(position.coords.longitude);
            },
            error=>{
                console.log(error.message);
            })
        }else{
            console.log("Your browser does not support geolocation API ");
        }
    },
    // functions for scrolling to top
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
},
computed: {
    //   fromDateDisp() {
    //     return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    //     // format date, apply validations, etc. Example below.
    //     // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    //   },
    formIsValid() {
        return this.formType!='' && 
        this.petName!='' && 
        this.petType!='' && 
        this.petColor!='' && 
        this.petGender!=''&& 
        this.collarColor!=''&& 
        this.petBreed!=''&& 
        this.petSize!=''&&
        this.petLocation!=''&&
        this.date!=null
        //left with validation for image and date
    },
}
}

</script>