<template>
   <v-container>
      <p class="text-h6 text-center font-weight-light brown--text text--darken-1">
        To view the location where pets were lost/found, refer to our map below!
      </p>
      <Map></Map>
   </v-container>
</template>
        
<script>
import Map from "../components/Map";

    export default {
      name: "MyMap",
      components: {Map},
      data(){
        return {
          //no data for now
          
        }
      },
      methods: {
          //no methods for now
      }
    }
</script>