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

            <v-row justify="center" class="my-5">
            <!-- Choose btwn lost and found -->
            <v-col cols="12"> 
                <h1 class="text-h6 brown--text text-center font-weight-light ">I am reporting a...</h1>
            </v-col>
            <v-radio-group v-model="radioGroup">
            <v-col cols="12" align="center">
                <v-btn rounded depressed large color="brown lighten-4 mx-4">
                    <v-radio label="Lost Pet" value="Lost Pet"></v-radio>
                </v-btn>
                <v-btn rounded depressed large color="brown lighten-4 mx-4">
                    <v-radio label="Found Pet" value="Found Pet"></v-radio>
                </v-btn>
            </v-col>
            </v-radio-group>
            </v-row>
        <v-form ref="form" v-model="valid" class="px-3 my-5" data-aos="fade-down">
            <v-row justify="center mb-3">
            <!-- Pet's Name -->
                <v-col cols="12" md="6">
                    <v-text-field label="Pet's Name" placeholder="Enter the pet's name..."
                    outlined>
                    </v-text-field>
                </v-col>
            <!-- Last seen Location-->
                <!-- <v-col cols="12" md="6">
                    <vuetify-google-autocomplete id="searc" label="Pet's Last Seen Location*" append-icon="mdi-map-marker" outlined
                        placeholder="Enter the pet's last seen location..."
                        
                        country="sg"
                        :rules="mapRule"
                        v-model=loc
                        @click:append="getUserLoc"
                    >
                        </vuetify-google-autocomplete>
                        @placechanged="getAddressData" -->
                <!-- </v-col> --> 
            <!-- Date -->
            <v-col cols="12" md="6">
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
                            transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field v-model="date" label="Pet's Last Seen Date*" outlined :rules="calRule"
                                v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="date" :min="new Date().toISOString()" no-title scrollable>
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
                    <v-combobox outlined :items="petTypes" :rules="typeRule" label="Pet's Type*" placeholder="Select the Pet's Type..." class="text-brown"></v-combobox>
                </v-col>
            <!-- Breed -->
                <v-col cols="12" md="6">
                    <v-text-field outlined type="text" label="Pet's Breed" placeholder="Type the Pet's Breed..." multiple class="text-brown"></v-text-field>
                </v-col>
            <!-- Colour -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="petColours" :rules="colorRule" label="Pet's Colour*" placeholder="Select the Pet's Colour(s)..." multiple class="text-brown"></v-combobox>
            </v-col>
            <!-- Collar colour -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="collarColours" :rules="collarColorRule" label="Pet's Collar Colour*" placeholder="Select the Pet's Collar Colour..." class="text-brown"></v-combobox>
            </v-col>
            <!-- Size -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="petSizes" :rules="sizeRule" label="Pet's Size*" placeholder="Select the Pet's Size.." class="text-brown"></v-combobox>
            </v-col>
            <!-- Gender -->
            <v-col cols="12" md="6">
                <v-combobox outlined :items="petGenders" :rules="genderRule" label="Pet's Gender*" placeholder="Select the Pet's Gender..." class="text-brown"></v-combobox>
            </v-col>
            <!-- Submit Photo -->
            <v-col cols="12" md="6">
                <v-file-input outlined label="Pet's Image" 
                    placeholder="Upload an Image of the Pet"
                    prepend-icon="mdi-camera" 
                    :rules="fileRule"
                ><v-icon>mdi-camera</v-icon></v-file-input>
                <!-- @change="checkFileType" -->
            </v-col>
            </v-row>
            <!-- Submit -->
            <v-btn block :disabled="!valid" @click="validate"
                class="mb-4 " color="brown" outlined>
                Submit
            </v-btn>
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


export default {

mounted() {
    AOS.init({
    duration: 1000,
    });
    this.$refs.address.focus();
},
data(){
  return {
    valid: true,
    menu: '',
    radioGroup:"Lost Pet",
    date:"",
    address: "",
    fab: false,
    petTypes: ["Dog","Rabbit","Cat","Bird","Hamster","Fish","Terrapin","Frog","Guinea Pig","Other Pet Types"], 
    petColours: ["Beige", "Black", "Brown", "Grey", "White", "Others"],
    collarColours: ["No Collar", "Beige", "Black","Brown", "Grey", "White", "Pink", "Blue", "Yellow", "Red", "Others"],
    petGenders: ['Male','Female',"Unknown"],
    petSizes: ['Small', 'Medium', 'Large'],
    colour: [1,4],
    fromDateMenu: false,
    fromDateVal: null,
    minDate: "2019-07-04",
    colorRule: [
        v => v.length >= 1 || "Pet's colour cannot be empty"
    ],
    collarColorRule: [
        v => !!v || "Pet's collar colour cannot be empty"
    ],
    genderRule: [
        v => !!v || "Pet's gender cannot be empty"
    ],
    sizeRule:[
        v => !!v || "Pet's size cannot be empty"
    ],
    fileRule: [
        v => this.checkFileType(v) == true || 'Image must be .jpeg or .png'
    ],
    calRule: [
        v => v.length == 10 || 'Date cannot be empty'
    ],
    typeRule: [
        v => !!v || "Pet's type cannot be empty"
    ],
    mapRule: [
        v => v.length >= 1 || "Last seen location cannot be empty"
    ]

  }
},

methods: {
    validate () {
        this.$refs.form.validate()
      },
    checkFileType(e){
        console.log(e)
        if(e['type']==='image/jpeg' || e['type']==='image/png'){
            return true
        }
        else {
            return false
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
    //   fromDateDisp() {
    //     return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    //     // format date, apply validations, etc. Example below.
    //     // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
    //   },
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