<template>
    <v-container class="py-10">
    <v-data-table :headers="headers" :items="pets" :items-per-page="10" 
      class="elevation-0 brown lighten-5 text-primary">
        <template v-slot:[`item.petImage`]="{ item }">
          <div class="p-2">
            <v-img :src='getImgUrl(item.petImage)' contain max-height="250" max-width="250" class="my-5"></v-img>
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
        }
    },
    methods: {
        getImgUrl(pic){
        return require('../assets/' + pic)
        },
    },

   };
   </script>