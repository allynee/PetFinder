<template>
<div>
    <v-container>
    <gmap-map :center="center" :zoom="13" style="width: 100%; height: 500px">
      <GmapCluster>
        <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        </gmap-info-window>

        <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i); center=m.position">
        </gmap-marker>
      </GmapCluster>
    </gmap-map>
<!--  @click="center=m.position" -->
    </v-container>
</div>
</template> 

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/markerclustererplus/2.1.4/markerclusterer.js"></script> -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCsbcA8EHPhaZbxQ_Gubm_ZhQyy-pcn6JM&libraries=places"></script>

<script>
import GmapCluster from 'vue2-google-maps/dist/components/cluster';

export default{
components:{GmapCluster},
props: {
    allPets: Array,
},
data(){
    return{
        center: {
            lat: 1.3521,
            lng: 103.8198
        },

        // info window nonsense
        infoWindowPos: null,
        infoWinOpen: false,
        currentMidx: null,
        infoOptions: { 
            content: "",
            //help info window sit above our marker
            pixelOffset: {
                width: 0,
                height: -35
            }
        },

        // markers
        // markers: [{
        //     position: {
        //       lat: 1.3691,
        //       lng: 103.8454
        //     },
        //     infoText: '<strong>Marker 1</strong>'
        //   }, {
        //     position: {
        //       lat: 1.3526,
        //       lng: 103.8352
        //     },
        //     infoText: `<strong>${this.allPets[0].petName}</strong>`
        //   }, 
        // //   {
        // //     position: {
        // //       lat: this.allPets[0].petGeoLoc.lat,
        // //       lng: this.allPets[0].petGeoLoc.lng
        // //     },
        // //     infoText: `<strong>${this.allPets[0].petName}.</strong>`
        // //   }
        // ]
}
},
methods: {
    toggleInfoWindow: function(marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoOptions.content = marker.infoText;

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
        }
        
        //if different marker set infowindow to open and reset current marker index
        else {
            this.infoWinOpen = true;
            this.currentMidx = idx;
        }
    }
},
computed: {
    markers(){
        let markers = [];
        let lat=1.3691;
        let lng = 103.8454;
        this.allPets.forEach(pet => {
            // let myLat = pet.petGeoLoc.lat;
            // let myLng = pet.petGeoLoc.lng;
            let petObj = {
                position: {
                    lat: lat,
                    lng: lng
                },
                infoText: 
                `   
                <h2>${pet.petName}</h2>
                <br>
                <img src="${pet.image}" style="max-height:100px;max-width: 100px "/>
                <br>
                <span> ${pet.petLocation}</span>
                `
            };
            markers.push(petObj);
            lat+=0.001
            lng+=0.001
        });
        return markers;
    }
},
} 

// markers: [
    //{
//       position: {
//               lat: 1.3691,
//               lng: 103.8454
//             },
//             infoText: '<strong>Marker 1</strong>'
//           }, {
//             position: {
//               lat: 1.3526,
//               lng: 103.8352
//             },
//             infoText: '<strong>Marker 2</strong>'
//           }, {
//             position: {
//               lat: 2,
//               lng: 101
//             },
//             infoText: '<strong>Marker 3</strong>'
//           }]
// }
</script>
