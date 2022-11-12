<template>
    <v-container class="py-5">

        <!-- Search Bar -->
        <v-text-field v-model="search" append-icon="mdi-magnify"
        label="Search for your pet's name..." class="mb-15"></v-text-field>


        <!-- loading loading-text="Loading... Please wait" -->
    <v-data-table 
    :headers="headers" :items="pets" :items-per-page="10" 
    :search="search"
      class="elevation-0 brown lighten-5 text-primary text-center">
        <template v-slot:[`item.petImage`]="{ item }">
          <div class="p-2">
            <v-img :src='getImgUrl(item.petImage)' contain max-height="250" max-width="225" class="my-5"></v-img>
          </div>
        </template>
      </v-data-table>
    </v-container>
</template>

<script>
   export default {
    props: {
      pets: Object,
    },
    data(){
        return{
        search: "",
        //data table
        headers: [
          { text: "Pet Image", value: "petImage", sortable: false },
          { text: 'Pet Name', value: 'petName' },
          { text: 'Last Seen Date', value: 'missingSince' },
          { text: 'Last Seen Location', value: 'petLoc' },
          { text: 'Pet Type', value: 'petType' },
          { text: 'Pet Breed', value: 'petBreed' },
          { text: 'Pet Colour', value: 'petColour' },
          { text: 'Pet Gender', value: 'petGender' },
          { text: 'Pet Collar Colour', value: 'collarColour' },
          { text: 'Pet Size', value: 'petSize' },
          { text: 'Pet Status', value: 'petStatus' },
        ],
        }
    },
    methods: {
        getImgUrl(pic){
        return require('../assets/' + pic)
        },
    },

   };
   </script>