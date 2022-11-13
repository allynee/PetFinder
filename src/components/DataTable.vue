<template>
    <v-container class="py-5">

        <!-- Search Bar -->
        <v-text-field v-model="search" append-icon="mdi-magnify"
        label="Search for your pet's name..." class="mb-15"></v-text-field>


        <!-- loading loading-text="Loading... Please wait" -->
    <v-data-table 
    :headers="headers" :items="pets" :items-per-page="5" 
    :search="search"
    class="elevation-0 brown lighten-5 text-primary text-center">

        <template v-slot:[`item.petName`]="{ item }">
          <v-list class="brown lighten-5 text-primary">
            <v-list-item class="p-0">
              <v-chip :class="{'green': isGreen(item.petStatus), 'red': !isGreen(item.petStatus), 'lighten-3' : true ,'py-2':true}">{{item.petStatus}}</v-chip>  
            </v-list-item>
            <v-list-item class="mx-1 my-2">
                <span class="text-h5">{{item.petName}}</span>
            </v-list-item>
            <v-list-item>
              <v-btn depressed small class="brown lighten-4 text-capitalize my-3" @click="redirect(item.petid)">
                <span class="primary--text">view pet profile</span>
                <v-icon right class="primary--text">mdi-arrow-top-right</v-icon>
              </v-btn>
            </v-list-item>
          </v-list>

        </template>

        <template v-slot:[`item.image`]="{ item }">
            <v-img :src='item.image' contain max-height="150" max-width="250" class="my-10"></v-img> 
        </template>

        <template v-slot:[`item.petBreed`]="{ item }">
            <v-list class="brown lighten-5 text-primary">
              <v-list-item class="my-0 py-0">
                <v-icon small left>mdi-paw</v-icon>
                <span class="text-caption">Pet Breed: {{item.petBreed}}</span>
              </v-list-item>
              <v-list-item>
                <v-icon small left>mdi-paw</v-icon>
                <span class="text-caption">Pet Color: {{item.petColor}}</span>
              </v-list-item>
              <v-list-item>
                <v-icon small left>mdi-paw</v-icon>
                <span class="text-caption">Gender: {{item.petGender}}</span>
              </v-list-item>
              <v-list-item>
                <v-icon small left>mdi-paw</v-icon>
                <span class="text-caption">Size: {{item.petSize}}</span>
              </v-list-item>
              <v-list-item>
                <v-icon small left>mdi-paw</v-icon>
                <span class="text-caption">Collar Color: {{item.collarColor}}</span>
              </v-list-item>
            </v-list>
        </template>
      </v-data-table>
    </v-container>
</template>

<script>
   export default {
    props: {
      pets: Array,
    },
    data(){
        return{
        search: "",
        //data table
        headers: [
          { text: 'Name', value: 'petName' },
          { text: "Photo", value: "image", sortable: false },
          { text: 'Last Seen Date', value: 'petDate' },
          { text: 'Last Seen Location', value: 'petLocation' },
          { text: 'Pet Details', value: 'petBreed' },
        ],
        }
    },
    methods: {
      redirect(petid){
            this.$store.dispatch('loadedPet', petid)
            this.$router.push('/SearchAllPets/'+ petid)
      },
      isGreen(petstatus){
            if(petstatus=="Found Pet"){
                return true
            }else{
                return false
            }
      }
    },
    computed: {

    },

   };
   </script>