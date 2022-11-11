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
  
        <!-- Filter Bar content i.e. the diff filters-->
        <v-expansion-panel-content>
        <v-card flat class="pa-5 rounded-xl"> 

          <!-- All, Lost, or Found -->
          <v-row justify="center" class="my-2">
                
                <v-radio-group v-model="petStatus">
                <v-col cols="12" align="center">
                  <v-btn rounded depressed color="brown lighten-5 mx-4">
                        <v-radio label="All Pets" value="All" required ></v-radio>
                    </v-btn> 
                        <v-btn rounded depressed color="brown lighten-5 mx-4">
                            <v-radio label="Lost Pets" value="Lost" required ></v-radio>
                        </v-btn> 
                        <v-btn rounded depressed color="brown lighten-5 mx-4" >
                            <v-radio label="Found Pets" value="Found" required ></v-radio>
                        </v-btn>
                </v-col>
                </v-radio-group>
          </v-row>

         
          <v-row>
             <!-- Pet Type -->
            <v-col cols="12" md="6" lg="4">
              <v-combobox outlined v-model="petTypesSelected" :items="petTypes" label="Select Pet Types" multiple></v-combobox>
            </v-col>
            <!-- Pet Breed -->
            <v-col cols="12" md="6" lg="4">
              <v-combobox hide-no-data v-model="petBreedsSelected" outlined :items="petBreeds" label="Select Pet Breeds" class="text-brown" multiple></v-combobox>
            </v-col>
            <!-- Pet Colour -->
            <v-col cols="12" md="6" lg="4">
              <v-combobox outlined v-model="petColoursSelected" :items="petColours" label="Select Pet Colours" multiple></v-combobox>
            </v-col>

            <!-- Collar Colour -->
            <v-col cols="12" md="6" lg="4">
              <v-combobox outlined v-model="collarColoursSelected" :items="collarColours" label="Select Collar Colours" multiple></v-combobox>
            </v-col>
            <!-- Pet Size -->
            <v-col cols="12" md="6" lg="4">
              <v-combobox outlined v-model="petSizesSelected" :items="petSizes" label="Select Pet Sizes" multiple></v-combobox>
            </v-col>
            <!-- Pet Gender -->
            <v-col cols="12" md="6" lg="4">
              <v-combobox outlined v-model="petGendersSelected" :items="petGenders" label="Select Pet Colours" multiple></v-combobox>
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
      
      <!-- Grid and List View -->
      <v-row class="my-5 pa-5">
      <v-btn depressed class="brown lighten-4 mr-5" @click="grid=true">
        <v-icon left>mdi-grid</v-icon>
            <span>Grid Layout</span>
      </v-btn>
      <v-btn depressed class="brown lighten-4" @click="grid=false">
        <v-icon left>mdi-format-list-bulleted-square</v-icon>
            <span>List Layout</span>
      </v-btn>
      </v-row>
      
      <!-- gridview -->
      <div v-show="grid">
      <v-row class="my-5">
        <!-- Dashboard -->
        <v-col cols="12" md="6" lg="4">
            <PetCard v-for="aPet in myPets" :key="aPet.id" :aPet="aPet"></PetCard>
        </v-col>
      </v-row>
      </div>
    <!-- Data table-->
      <DataTable :pets="myPets" v-show="!grid"></DataTable>
    </v-container>
  </template>
  
  <script>
  import DataTable from "../components/DataTable.vue"
  import PetCard from "../components/PetCard.vue"

  export default {
  components: { DataTable, PetCard},
  data(){
    return {
      grid: true,
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
        petStatus: "",
        petTypes: ["Dog","Rabbit","Cat","Bird","Hamster","Fish","Terrapin","Frog","Guinea Pig","Other Pet Types"],
        petTypesSelected: [],
        petBreedsSelected: [],
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
          {id: "123456789", petImage: "testimg.png", 
          petName: "Snoop Dog", petType: "Dog", petBreed: "Corgi", 
          petColour: "Brown", missingSince: "20th Jan 2022", 
          petGender: "Male", collarColour: "No Collar", 
          petSize: "Medium", petStatus: "Lost"},
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
      },
  },
  methods: {

  }
  }
  
</script>