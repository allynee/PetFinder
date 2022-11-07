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
        <v-form class="px-3 my-5" ref="form" @submit.prevent="submit" data-aos="fade-down">
            <v-row justify="center" class="my-5">
            <!-- Choose btwn lost and found -->
            <v-col cols="12">
                <h1 class="text-h6 brown--text text-center font-weight-light ">I am reporting a...</h1>
            </v-col>
            <v-radio-group v-model="radioGroup">
            <v-col cols="12" align="center">
                <v-btn rounded depressed large color="brown lighten-4 mx-4">
                    <v-radio label="Lost Pet" value="Lost Pet" required></v-radio>
                </v-btn>
                <v-btn rounded depressed large color="brown lighten-4 mx-4" >
                    <v-radio label="Found Pet" value="Found Pet" required></v-radio>
                </v-btn>
            </v-col>
            </v-radio-group>
            </v-row>
            <v-row justify="center mb-3">
            <!-- Pet's Name -->
                <v-col cols="12" md="6">
                    <v-text-field label="Pet's Name" placeholder="Enter the pet's name..."
                    :rules="inputRules" name:pname outlined>
                    </v-text-field>
                </v-col>
            <!-- Last seen Location-->
                <v-col cols="12" md="6">
                    <vuetify-google-autocomplete id="searc" label="Pet's Last Seen Location" append-icon="mdi-map-marker" outlined
                        placeholder="Enter the pet's last seen location..."
                        
                        country="sg"
                        :rules="inputRules"
                        v-model=loc
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
                    <v-combobox outlined :items="petTypes" label="Pet's Type" placeholder="Select the Pet's Type..." class="text-brown"></v-combobox>
                </v-col>
            <!-- Breed -->
                <v-col cols="12" md="6">
                    <v-combobox outlined :items="petTypes" label="Pet's Breed" placeholder="Select the Pet's Colour(s)..." multiple class="text-brown"></v-combobox>
                </v-col>
            <!-- Colour -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="petColours" label="Pet's Colour" placeholder="Select the Pet's Colour(s)..." multiple class="text-brown"></v-combobox>
            </v-col>
            <!-- Collar colour -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="collarColours" label="Pet's Collar Colour" placeholder="Select the Pet's Collar Colour..." class="text-brown"></v-combobox>
            </v-col>
            <!-- Size -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="petSizes" label="Pet's Size" placeholder="Select the Pet's Size.." class="text-brown"></v-combobox>
            </v-col>
            <!-- Gender -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="petGenders" label="Pet's Gender" placeholder="Select the Pet's Gender..." class="text-brown"></v-combobox>
            </v-col>
            <!-- Submit Photo -->
            <v-col cols="12" md="6">
                <v-file-input outlined label="Pet's Image" 
                    placeholder="Upload an Image of the Pet"
                                prepend-icon="mdi-camera"
                ><v-icon>mdi-camera</v-icon></v-file-input>
            </v-col>
            </v-row>
            <!-- Submit -->
            <v-row align="center" justify="center" class="mt-5">
                <v-col cols="12" align="center">
                    <v-btn x-large depressed color="brown lighten-4">
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


export default {

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
      inputRules: [
            v => v.length >= 3 || 'Minimum length is 3 characters'
        ],
        zipRule: [
            v => Number.isInteger(Number(v)) || 'Zip must be numeric',
            v => v.length == 6 || 'Zip length must be 6 characters'
        ]
  }
},
validations (){
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
},
methods: {
    submitForm() {
        this.v$.validate()

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
    // get user current location
    // getUserLoc(){
    //     if(navigator.geolocation){
    //         navigator.geolocation.getCurrentPosition(position=>{
    //             console.log(position.coords.latitude);
    //             console.log(position.coords.longitude);
    //         },
    //         error=>{
    //             console.log(error.message);
    //         })
    //     }else{
    //         console.log("Your browser does not support geolocation API ");
    //     }
    // },
    // // functions for scrolling to top
    // onScroll (e) {
    //   if (typeof window === 'undefined') return
    //   const top = window.pageYOffset ||   e.target.scrollTop || 0
    //   this.fab = top > 20
    // },
    // toTop () {
    //   this.$vuetify.goTo(0)
    // }
},
computed: {
      fromDateDisp() {
        return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
        // format date, apply validations, etc. Example below.
        // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
      },
},
}

</script>
<!-- <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCsbcA8EHPhaZbxQ_Gubm_ZhQyy-pcn6JM&libraries=places"></script> -->

<!-- <script>
    
    google.maps.event.addDomListener(window,'load',initialize)
    function initialize(){
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById('search'));
            google.maps.event.addListener(autocomplete, 'place_changed', function(){
                var place = autocomplete.getPlace();
                var location = place.formatted_address;
                var lat = place.geometry.location.lat();
                var long = place.geometry.location.lng();
                console.log(lat,long)
            })
    }
</script> -->