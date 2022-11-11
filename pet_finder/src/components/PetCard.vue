<template>
<div>
<v-hover v-slot="{ hover }">
<v-card flat :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" maxwidth="400" class="" outlined>
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
</div>
</template>

<script>
export default {
    props: {
      aPet: Object,
    },
    data(){

    },
    methods: {
        getImgUrl(pic){
        return require('../assets/' + pic)
        },
    },
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