<template>
    <v-container class="py-10">
    <v-row justify="center"><v-col cols="12" md="11" lg="10" xl="9">
        <div>
        <v-img :src="require('../assets/Dog1Invert.png')" class="d-inline-block mx-3" contain max-height="60" max-width="60"/>
        <span class="text-h4 text-capitalize brown--text">Search for a pet</span>
        </div>
        <br>
  
        <!-- Filter Bar -->
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
              <v-combobox v-model="coloursSelected" :items="colours" label="Select Pet Colour" multiple></v-combobox>
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
            <v-chip-group column v-model="coloursSelected" multiple>
              <v-chip label filter filter-icon="" class="pa-3 mx-1 brown lighten-5" v-for="colour in coloursSelected" :key="colour" :value="colour">
                  <span> {{ colour }} </span>
                  <v-icon small right>mdi-window-close</v-icon>
              </v-chip>
            </v-chip-group>
            <!-- add for other categories -->
          </v-row>
          </v-card-text>
        </v-card>
        
  
        <v-divider></v-divider>
  
        <!-- Dashboard -->
        <br>
  
        <v-row>
              <v-col cols="12" md="6" lg="3">
  
              <v-card flat maxwidth="400" class="py-5 px-2" outlined v-for="aPet in myPets" :key="aPet.id">
                <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5 primary--text"> {{aPet.petName}} </v-list-item-title>
                    <v-list-item-subtitle class="secondary--text"> {{ aPet.id }} </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text>
                  <v-img :src="require('../assets/testimg.png')" class="my-3" contain max-height="600" max-width="1000"/>
                </v-card-text>
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
                    <v-btn depressed color="brown lighten-4 text-capitalize mt-2">
                      <span class="primary--text">view more details</span>
                      <v-icon right class="primary--text">mdi-arrow-top-right</v-icon>
                    </v-btn>
                </v-card-actions>
              </v-card>
              </v-col>
  
            </v-row>
    </v-col></v-row>
    </v-container>
  </template>
  
  <script>
  export default {
  data(){
    return {
        petTypes: ["Dog","Rabbit","Cat","Bird","Hamster","Fish","Terrapin","Frog","Guinea Pig","Other Pet Types"],
        petTypesSelected: [],
        colours: ["White","Black","Brown","Orange","Other Colours"],
        coloursSelected: [],
  
        //array of objects
        // (_id, PetName, MissingSince, Type, Breed, Gender, NearestLoc, Zip, Color, Collar, Size)
        allPets: [
          {id: "123456789", petName: "Snoop Dog", type: "Dog", colour: "Brown", missingSince: "20th Jan 2022", },
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
          if(this.coloursSelected.length!=0){
            finalFilter += `${this.coloursSelected.includes(pet.colour)}`;
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
  
  }
  
  </script>