<template>
    <v-container class="brown lighten-5 pa-5">
        <v-row wrap>
            <v-col cols="12">
                <h1 class="text-h4 text-capitalize brown--text text-center">REPORT A LOST/FOUND PET</h1>
                    <v-form class="px-3" ref="form" @submit.prevent="submit">
                        <!-- <div class="container"> -->
                            <v-row wrap>
                                <v-col
                                cols="12"
                                xs="12"
                                sm="6"
                                >
                                <v-btn
                                    depressed
                                    elevation="2"
                                    rounded
                                    large
                                    class="my-8"
                                    color="brown lighten-4"
                                    >
                                    <v-checkbox
                                    v-model="checkbox"
                                    label="Lost Pet"
                                    type="checkbox"
                                    required
                                    ></v-checkbox>
                                </v-btn>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col
                                cols="12"
                                xs="12"
                                sm="6"
                                class="d-flex justify-end"
                                >
                                <v-btn
                                depressed
                                elevation="2"
                                rounded
                                large
                                class="my-8"
                                color="brown lighten-4"
                                >
                                    <v-checkbox
                                    v-model="checkbox"
                                    label="Found Pet"
                                    type="checkbox"
                                    required
                                    ></v-checkbox>
                                </v-btn>
                                </v-col>
<!-- text fields start -->
                                <v-col
                                cols="12"
                                xs="12"
                                md="6"
                                >
                                <v-text-field
                                    label="Pet's name"
                                    placeholder="Type the pet's name ..."
                                    :rules="inputRules"
                                    name:pname
                                    outlined
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                xs="12"
                                md="6"
                                >
                                <v-text-field
                                    label="Last seen location"
                                    placeholder="Type the pet's last seen location ..."
                                    :rules="inputRules"
                                    v-model=loc
                                    outlined
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                xs="12"
                                md="6"
                                >
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
                                        label="Last seen date"
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

                                <v-col
                                cols="12"
                                xs="12"
                                md="6"
                                >
                                <v-text-field
                                    label="Zip"
                                    placeholder="Zip of location"
                                    :rules =zipRule
                                    name=zip
                                    outlined
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                xs="12"
                                md="6"
                                >
                                <v-text-field
                                    label="Type"
                                    placeholder="Type the pet's type ..."
                                    large
                                    :rules=inputRules
                                    outlined
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                xs="12"
                                md="6"
                                >
                                <v-text-field
                                    label="Breed"
                                    placeholder="Type the pet's breed ..."
                                    large
                                    :rules=inputRules
                                    outlined
                                ></v-text-field>
                                </v-col>
                            </v-row>
<!-- dropdowns -->          
                            <!-- <v-row class="d-flex justify-space-between">
                                <v-col
                                cols="12"
                                xs="12"
                                sm="6"
                                md="3"
                                lg="3"
                                > -->
                            <v-card flat class="brown lighten-5 pa-5
                            d-flex justify-space-between mb-6">
                            <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary lighten-2"
                                v-bind="attrs"
                                v-on="on"
                                class="px-2"
                                outlined
                                large
                                >
                                Pet Colour
                                <v-icon right>
                                    mdi-arrow-down
                                </v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                v-for="(petColor) in petColors"
                                :key="petColor"
                                >
                                <v-list-item-title>{{ petColor}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                            <!-- </v-col> -->

                            <!-- <v-col
                            cols="12"
                            xs="12"
                            sm="6"
                            md="3"
                            lg="3"
                            > -->
                            <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary lighten-2"
                                v-bind="attrs"
                                v-on="on"
                                class="px-2"
                                outlined
                                large
                                >
                                collar color
                                <v-icon right>
                                    mdi-arrow-down
                                </v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                v-for="(collarColor) in collarColors"
                                :key="collarColor"
                                >
                                <v-list-item-title>{{ collarColor}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                            <!-- </v-col> -->

                            <!-- <v-col
                            cols="12"
                            xs="12"
                            sm="6"
                            md="3"
                            lg="3"
                            > -->
                            <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary lighten-2"
                                v-bind="attrs"
                                v-on="on"
                                large
                                class="px-2"
                                outlined
                                >
                                Pet size
                                <v-icon right>
                                    mdi-arrow-down
                                </v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                v-for="(petSize) in petSizes"
                                :key="petSize"
                                >
                                <v-list-item-title>{{ petSize}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                            <!-- </v-col> -->

                            <!-- <v-col
                            cols="12"
                            xs="12"
                            sm="6"
                            md="3"
                            lg="3"
                            > -->
                            <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                color="primary lighten-2"
                                v-bind="attrs"
                                v-on="on"
                                large
                                class="px-2"
                                outlined
                                >
                                Pet Gender
                                <v-icon right>
                                    mdi-arrow-down
                                </v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                v-for="(petGender) in petGenders"
                                :key="petGender"
                                >
                                <v-list-item-title>{{ petGender}}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            </v-menu>
                            <!-- </v-col> -->
                            </v-card>

                            <div class="text-center mx-auto mt-9">
                                    <template>
                                    <v-file-input
                                        label="Image of Pet"
                                        filled
                                        prepend-icon="mdi-camera"
                                    ></v-file-input>
                                    </template>
                            </div>

                            <!-- </v-row> -->
                            <v-btn block 
                                class="mb-4 " color="brown" outlined>
                                Submit
                            </v-btn>
                    </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// const { validationMixin, default: Vuelidate } = require('vuelidate')
// const { required} = require('vuelidate/lib/validators')

export default {
data(){
  return {
      //no data for now
    //   petTypes: ["Bird","Cat","Dog","Fish","Guinea Pig","Hamster","Terrapin","Others"],
      petColors: ["Beige", "Black", "Brown", "Grey", "White", "Others"],
      collarColors: ["Beige", "Black","Brown", "Grey", "White", "Others"],
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

    }
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