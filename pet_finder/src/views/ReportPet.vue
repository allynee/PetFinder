<template>
<div class="white pa-15">
    <v-container class="brown lighten-5 pa-10">
        <!-- top -->
        <v-row align="center" class="text-center mb-10">
            <v-col cols="12">
                <v-img :src="require('../assets/DogCat.png')" class="my-3" contain height="150"/>
            </v-col>
            <v-col cols="12">
                <h1 class="text-h4 brown--text text-center">Report a Lost/Found Pet</h1>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-form class="px-3 my-5" ref="form" @submit.prevent="submit">
            <v-row class="my-5">
            <!-- Choose btwn lost and found -->
            <!-- small screen -->
            <v-col cols="12" class="hidden-md-and-up">
                <v-btn rounded depressed large color="brown lighten-4 mx-5" @click="setOptions">
                    <v-checkbox v-model="checkedBox" label="Lost Pet" value="Lost Pet" required></v-checkbox>
                </v-btn>
            </v-col>
            <v-col cols="12" class="hidden-md-and-up">
                <v-btn rounded depressed large color="brown lighten-4 mx-5" @click="setOptions">
                    <v-checkbox v-model="checkedBox" label="Found Pet" value="Found Pet" required></v-checkbox>
                </v-btn>
            </v-col>
            <!-- mid screen -->
            <v-col cols="12" align="center">
                <h2 class="text-h6 brown--text font-weight-light">I am reporting a...</h2>
            </v-col>
            <v-col cols="12" md="6" align="center" align-content-md="end">
                    <v-btn rounded depressed large color="brown lighten-4 mx-5" @click="setOptions">
                        <v-checkbox v-model="checkedBox" label="Lost Pet" value="Lost Pet" required></v-checkbox>
                    </v-btn>
            </v-col>
            <v-col cols="12" md="6" align-content="center" align-content-md="start">
                <v-btn rounded depressed large color="brown lighten-4 mx-5" @click="setOptions">
                    <v-checkbox v-model="checkedBox" label="Found Pet" value="Found Pet" required></v-checkbox>
                </v-btn>
            </v-col>
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
                    <v-text-field
                            label="Pet's Last Seen Location"
                            placeholder="Enter the pet's last seen location..."
                            :rules="inputRules"
                            v-model=loc
                            outlined
                    ></v-text-field>
                </v-col>
            <!-- Date -->
            <v-col cols="12" md="6">
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :return-value.sync="date"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label="Pet's Last Seen Date"
                                outlined
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                            >
                            <v-spacer></v-spacer>
                            <v-btn
                                text
                                color="primary"
                                @click="menu = false"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(date)"
                            >
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
</div>
</template>

<script>
// const { validationMixin, default: Vuelidate } = require('vuelidate')
// const { required} = require('vuelidate/lib/validators')

export default {
data(){
  return {
    checkedBox: [],
    petTypes: ["Dog","Rabbit","Cat","Bird","Hamster","Fish","Terrapin","Frog","Guinea Pig","Other Pet Types"], 
    petColours: ["Beige", "Black", "Brown", "Grey", "White", "Others"],
    collarColours: ["Beige", "Black","Brown", "Grey", "White", "Others"],
    petGenders: ['Male','Female'],
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
    //   no methods for now
    submitForm() {
        this.v$.validate()

    },
    setOptions (e) {
        this.checkedBox = [e.target.value];
    },
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