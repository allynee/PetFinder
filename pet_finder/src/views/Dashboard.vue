<template>
    <v-container class="py-10">
      <!-- title -->
      <v-row justify="center"><v-col cols="12">
        <div>
        <v-img :src="require('../assets/Dog1Invert.png')" class="d-inline-block mx-3" contain max-height="60" max-width="60"/>
        <span class="text-h4 text-capitalize brown--text">Search for a pet</span>
        </div>
      </v-col></v-row>

        <!-- Filter Bar -->
        <v-row justify="center"><v-col cols="12">  
        <v-expansion-panels flat class="rounded-xl">
        <v-expansion-panel class="rounded-xl">
        <v-expansion-panel-header expand-icon="mdi-filter-variant" class="pa-5 rounded-xl">
          <!-- <v-icon >mdi-filter-variant</v-icon> -->
          <span  class="text-h5 primary--text font-weight-light">Edit Filters</span>
        </v-expansion-panel-header>
  
        <!-- Filter Bar content -->
        <v-expansion-panel-content>
        <v-card flat class="pa-5 rounded-xl"> 
          <v-row>
            <v-col cols="12" md="6" lg="3">
              <v-combobox v-model="petTypesSelected" :items="petTypes" label="Select Pet Type" multiple></v-combobox>
            </v-col>
            <v-col cols="12" md="6" lg="3">
              <v-combobox v-model="petColoursSelected" :items="petColours" label="Select Pet Colour" multiple></v-combobox>
            </v-col>
          </v-row>
        </v-card>
        </v-expansion-panel-content>
        </v-expansion-panel>
        </v-expansion-panels>
  
        <!-- show filters applied -->
        
        <v-card flat class="my-1 brown lighten-5">
          <v-card-subtitle>Current Filters Applied:</v-card-subtitle>
          <v-card-text>
            <v-row>
            <v-chip-group column v-model="petTypesSelected" multiple>
              <v-chip label filter filter-icon="" class="pa-3 mx-1 brown lighten-5" v-for="petType in petTypesSelected" :key="petType" :value="petType">
                  <span> {{ petType }} </span>
                  <v-icon small right>mdi-window-close</v-icon>
              </v-chip>
            </v-chip-group>
            <v-chip-group column v-model="petColoursSelected" multiple>
              <v-chip label filter filter-icon="" class="pa-3 mx-1 brown lighten-5" v-for="petColour in petColoursSelected" :key="petColour" :value="petColour">
                  <span> {{ petColour }} </span>
                  <v-icon small right>mdi-window-close</v-icon>
              </v-chip>
            </v-chip-group>
            <!-- add for other categories -->
          </v-row>
          </v-card-text>
        </v-card>
        </v-col>
        </v-row>
        
        <v-divider></v-divider>

      <!-- Toolbar to toggle between different views -->
        <v-toolbar class="brown lighten-5" flat>
        <template v-slot:extension>
        <v-tabs v-model="tabs" grow class="brown lighten-5">
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#mobile-tabs-1" class="primary--text" v-bind="attrs" v-on="on">
          <v-icon left>mdi-grid</v-icon><br><br>
          <span>Grid Layout</span>
          </v-tab>
          <v-tab href="#mobile-tabs-2" class="primary--text">
            <v-icon left>mdi-format-list-bulleted-square</v-icon>
            <span>List Layout</span>
          </v-tab>
        </v-tabs>
        </template>
        </v-toolbar>
      
      <!-- gridview -->
      <v-tabs-items v-model="tabs">
      <v-tab-item value="mobile-tabs-1" class="brown lighten-5 py-15">

    <v-row justify="center"><v-col cols="12">  
        <!-- Dashboard -->
  
        <v-row class="my-5">
              <v-col cols="12" md="6" lg="4">
              <v-hover v-slot="{ hover }">
              <v-card flat :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" maxwidth="400" class="" outlined v-for="aPet in myPets" :key="aPet.id">
                <!-- img -->
                <v-card-text>
                  <v-img :src="getImgUrl(aPet.petImage)" class="my-2" contain max-height="1500" max-width="1500"/>
                </v-card-text>
                <!-- text -->
                <div class="mx-2">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5 primary--text"> {{aPet.petName}} </v-list-item-title>
                    <v-list-item-subtitle class="secondary--text"> {{ aPet.id }} </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon >
                    <v-icon class="primary--text">mdi-map-marker</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle class="primary--text">Location Lol</v-list-item-subtitle>
                </v-list-item>
      
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon class="primary--text">mdi-calendar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-subtitle class="primary--text"> {{ aPet.missingSince}}</v-list-item-subtitle>
                </v-list-item>
      
                <v-divider></v-divider>
      
                  <v-card-actions>
                    <v-btn depressed class="brown lighten-4 text-capitalize mt-2">
                      <span class="primary--text">view more details</span>
                      <v-icon right class="primary--text">mdi-arrow-top-right</v-icon>
                    </v-btn>
                </v-card-actions>
                </div>
              </v-card>
            </v-hover>
            </v-col>
            </v-row>
    </v-col></v-row>
    </v-tab-item>
    <!-- Data table-->
    <v-tab-item value="mobile-tabs-2" class="brown lighten-5 py-15">
    <template>
      <v-data-table :headers="headers" :items="myPets" :items-per-page="10" 
      class="elevation-0 brown lighten-5 text-primary">
        <template v-slot:[`item.petImage`]="{ item }">
          <div class="p-2">
            <v-img :src='getImgUrl(item.petImage)' contain max-height="250" max-width="250" class="my-5"></v-img>
          </div>
        </template>
      </v-data-table>
    </template>
    </v-tab-item>
    </v-tabs-items>
    </v-container>
  </template>
  
  <script>
  export default {
  data(){
    return {
      // random stuff for website to work
        tabs: null,
        //data table
        headers: [
          { text: "Pet Image", value: "petImage", sortable: false },
          { text: 'Pet Name', value: 'petName' },
          { text: 'Pet Type', value: 'petType' },
          { text: 'Pet Breed', value: 'petBreed' },
          { text: 'Pet Colour', value: 'petColour' },
          { text: 'Pet Gender', value: 'petGender' },
          { text: 'Pet Collar Colour', value: 'collarColour' },
          { text: 'Pet Size', value: 'petSize' },
        ],
        // data
        petTypes: ["Dog","Rabbit","Cat","Bird","Hamster","Fish","Terrapin","Frog","Guinea Pig","Other Pet Types"],
        petTypesSelected: [],
        petColours: ["White","Black","Brown","Orange","Other Colours"],
        petColoursSelected: [],
        collarColours: ["No Collar", "Beige", "Black","Brown", "Grey", "White", "Pink", "Blue", "Yellow", "Red", "Others"],
        collarColoursSelected: [],
        petGenders: ['Male','Female',"Unknown"],
        petGendersSelected: [],
        petSizes: ['Small', 'Medium', 'Large'],
        petSizesSelected: [],
  
        //array of objects
        // (_id, PetName, MissingSince, Type, Breed, Gender, NearestLoc, Zip, Color, Collar, Size)
        allPets: [
          {id: "123456789", petImage: "testimg.png", petName: "Snoop Dog", petType: "Dog", petBreed: "Corgi", petColour: "Brown", missingSince: "20th Jan 2022", petGender: "Male", collarColour: "No Collar", petSize: "Medium"},
        ],
    }
  },
  computed: {
      myPets(){
        return this.allPets.filter(pet => {
          let finalFilter = "";
          // test for each category
          if(this.petTypesSelected.length!=0){
            finalFilter += `${this.petTypesSelected.includes(pet.type)}`;
          }
          if(this.petColoursSelected.length!=0){
            finalFilter += `${this.petColoursSelected.includes(pet.colour)}`;
          }
          // will need to do the same for other categories
  
  
          // check if there are any filters
          if (finalFilter.includes("false")){
            return false;
          }else{
            return true;
          }
          })
      }
  },
  methods: {
    getImgUrl(pic){
      return require('../assets/' + pic)
    }
  }
  }
  
  </script>
  <style scoped>
  .v-card {
    transition: opacity .2s ease-in-out;
  }
  .v-card:not(.on-hover) {
    opacity: 0.95;
   }

</style>