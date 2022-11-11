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
                    <v-text-field label="Pet's Name" placeholder="Enter unknown if pet's name is not known"
                    :rules="inputRules" name:pname outlined v-model="petName">
                    </v-text-field>
                </v-col>
            <!-- Last seen Location-->
                <v-col cols="12" md="6">

                    <!-- placeholder="Enter the pet's last seen location..." -->
                    <!-- removed bc there's some weird overlap-->
                    <!-- <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }"> -->
                    <vuetify-google-autocomplete id="search" label="Pet's Last Seen Location" 
                        outlined
                        country="sg"
                        v-model="petLocation"
                        hint="Press the icon to retrieve current location."
                    >
                        <template v-slot:append>
                            <v-tooltip top>
                                <template v-slot:activator="{ on }">
                                    <v-icon v-on="on" @click="getUserLoc">mdi-map-marker</v-icon>
                                </template>
                            Retrieve current location
                            </v-tooltip>
                        </template>
                    </vuetify-google-autocomplete>
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
                    <v-combobox hide-no-data v-model="petBreed" outlined :items="filteredPetBreeds" label="Pet's Breed" placeholder="Select the Pet's Breed..." class="text-brown"></v-combobox>
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
                <v-file-input outlined label="Pet's Image" accept="image/*" placeholder="Upload an Image of the Pet"
                prepend-icon="" append-icon="mdi-camera">
                <!-- <template v-slot:append>
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                                <v-icon v-on="on">mdi-camera</v-icon>
                        </template>
                            Retrieve current location
                    </v-tooltip>
                </template> -->
            </v-file-input>
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


<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCsbcA8EHPhaZbxQ_Gubm_ZhQyy-pcn6JM&libraries=places"></script>

<script>
import AOS from 'aos'
// const { validationMixin, default: Vuelidate } = require('vuelidate')
// const { required} = require('vuelidate/lib/validators')
import db from '../firebase/index'
import { collection, addDoc } from 'firebase/firestore'
//collection ref

// //import gmaps
// import * as VueGoogleMaps from 'vue2-google-maps';


export default {

name:'reportpet',


mounted() {
    AOS.init({
    duration: 1000,
    });
},
data(){
  return {
    userCoordinates:{
                    lat: 0,
                    lng: 0
                },
    myGeocoder: null,
    fab: false,
    radioGroup: 1,
    petTypes: ["Dog","Rabbit","Cat","Bird","Hamster","Terrapin","Guinea Pig","Other Pet Types"], 
    defaultBreed: {header: "Please select Pet Type first"},
    weirdTypes: {header: "No need to select breed for Other Pet Types"},
    petBreeds: ['Affenpinscher Dog', 'Afghan Hound Dog', 'Alaskan Malamute Dog', 'Australian Kelpie Dog', 
    'Australian Terrier Dog', 
    'Basenji Dog',
    'Basset Bretagne Dog',
            'Basset Hound Dog',
            'Beagle Dog',
            'Bearded Collie Dog',
            'Belgian Shepherd Dog',
            'Bernese Mountain Dog',
            'Bichon Frise Dog',
            'Bloodhound Dog',
            'Border Collie Dog',
            'Border Terrier Dog',
            'Borzoi Dog',
            'Boston Terrier Dog',
            'Bouvier Flandres Dog',
            'Boxer Dog',
            'Briard Dog',
            'British Bulldog',
            'Brittany Dog',
            'Chihuahua Dog',
            'Cocker Spaniel Dog',
            'Dalmatian Dog',
            'Doberman Dog',
            'French Bulldog',
            'German Shepherd Dog',
            'Golden Retriever Dog',
            'Great Dane Dog',
            'Greyhound Dog',
            'Labrador Dog',
            'Maltese Dog',
            'Pomeranian Dog',
            'Poodle Dog',
            'Pug Dog',
            'Shih Tzu Dog',
            'Siberian Husky Dog',
            'Welsh Corgi Dog',
            'Yorkshire Terrier Dog',
            'Abyssinian Cat', 
            'American Bobtail Cat', 
            'American Curl Cat',
            'Birman Cat',
            'Bombay Cat',
            'Burmese Cat',
            'Chartreux Cat',
            'Cornish Rex Cat', 
            'Devon Rex Cat',
            'Egyptian Mau Cat',
            'Exotic Shorthair Cat',
            'Havana Brown Cat',
            'Himalayan Cat',
            'Japanese Bobtail Cat',
            'LaPerm Cat',
            'Maine Coon Cat',
            'Manx Cat',
            'Munchkin Cat',
            'Norwegian Forest Cat','Ocicat Cat',
            'Oriental Shorthair Cat',
            'Persian Cat',
            'Pixiebob Cat',
            'Ragamuffin Cat',
            'Ragdoll Cat',
            'Russian Blue Cat',
            'Savannah Cat',
            'Scottish Fold Cat',
            'Selkirk Rex Cat',
            'Siamese Cat',
            'Siberian Cat',
            'Singapura Cat',
            'Somali Cat',
            'Tonkinese Cat',
            'Turkish Angora Cat',
            'Turkish Van Cat',
            'Holland Lop Rabbit',
            "Lionhead Rabbit",
            "Rex Rabbit",
            "Mini Lop Rabbit",
            "Dutch Rabbit",
            "Netherland Dwarf Rabbit",
            "Polish Rabbit",
            "Dwarf Hotot Rabbit",
            "Dove Bird",
            "Zebra Finch Bird",
            "Canary Bird",
            "Ring-Necked Parakeet Bird",
            "Cockatiel Bird",
            "Peach-Faced Lovebird Bird",
            "Budgerigar Bird",
            "Red Eared Sliders Terrapin",
            "Abyssinian Guinea Pig",
            "American Guinea Pig",
            "Baldwin Guinea Pig",
            "Coronet Guinea Pig",
            "Peruvian Guinea Pig",
            "Rex Guinea Pig",
            "Sheltie Guinea Pig",
            "Skinny Guinea Pig",
            "Teddy Guinea Pig",
            "Texel Guinea Pig",
            "White-crested Guinea Pig",
            "Syrian Hamster", "Winter White Hamster", "Hybrid Dwarf Hamster", 
            "Campbell Hamster", "Roborovski Hamster" 
        
        ],

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
            // console.log(doc)
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
            // console.log(doc)
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
        // if(localStorage.center){
        //         this.myCoordinates = JSON.parse(localStorage.center);
        // }else{
                // this.$getLocation({})
                // .then(coordinates => {
                //     this.petLocation = "Retrieving your current location...";
                //     this.userCoordinates = coordinates;
                //     this.geocodeLatLng();
                // })
                // .catch(this.petLocation = "There was an error. Please key in your address manually instead!");
        // }
        this.petLocation = "Retrieving your current location...";
        if(navigator.geolocation){

                navigator.geolocation.getCurrentPosition(position=>{
                this.userCoordinates.lat = position.coords.latitude
                this.userCoordinates.lng = position.coords.longitude
                this.geocodeLatLng();
            },
            error=>{
                this.petLocation = "There was an error. Please key in your address manually instead!"
            })
            
        }else{
            this.petLocation = "Your browser does not support geolocation API. Please key in your address manually instead!";
        }
    },
    //geocode my lat lng to an address
    geocodeLatLng(){
        this.myGeocoder = new google.maps.Geocoder();
        const latlng = {
        lat: this.userCoordinates.lat,
        lng: this.userCoordinates.lng
        };
        this.myGeocoder
        .geocode({ location: latlng })
        .then((response) => {
        if (response.results[0]) {
            this.petLocation = response.results[0].formatted_address;
        } else {
            this.petLocation = "No results found.";
        }
        })
        .catch((e) => this.petLocation = "There was an error. Please key in your address manually instead!");
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
    filteredPetBreeds () {
        if(this.petType==""){
            return this.defaultBreed;
        }
        if(this.petType=="Other Pet Types"){
            return this.weirdTypes
        }
        // if (!this.petType.includes("Dog") || !this.petType.includes("Cat") ) {
        //     return this.weirdTypes;
        // }
        if(this.petType){
            return this.petBreeds.filter(e => e.includes(this.petType))
        }
            return this.petBreeds
    },
    formIsValid() {
        return this.formType!='' && 
        this.petName!='' && 
        this.petType!='' && 
        this.petColor!='' && 
        this.petGender!=''&& 
        this.collarColor!=''&& 
        // this.petBreed!=''&& 
        this.petSize!=''&&
        this.petLocation!=''&&
        this.date!=null
        //left with validation for image and date
    },
},
}
</script>
