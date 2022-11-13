<template>
<div>
    <v-container>
    <gmap-map :center="center" :zoom="13" style="width: 100%; height: 500px">
      <GmapCluster>
        <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        </gmap-info-window>

        <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i);">
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
                height: -45
            }
        },

}
},
methods: {
    toggleInfoWindow: function(marker, idx) {
        this.infoWindowPos = marker.position;
        this.infoOptions.content = marker.infoText;
        this.center = marker.position;

        //check if its the same marker that was selected if yes toggle
        if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
        }
        
        //if different marker set infowindow to open and reset current marker index
        else {
            this.infoWinOpen = true;
            this.currentMidx = idx;
        }
    },
    redirect(petid){
        console.log(petid)
        this.$store.dispatch('loadedPet', petid)
        this.$router.push('/SearchAllPets/'+ petid)
    }
},

computed: {
    markers(){
        // console.log(this.allPets)
        let markers = [];
        let lat=1.3691;
        let lng = 103.8454;
        this.allPets.forEach(pet => {
            console.log(pet)
            // console.log(1)
            let petid=pet.petid
            console.log(petid)
            let myLat = pet.petGeoLoc.lat;
            let myLng = pet.petGeoLoc.lng;
            let petObj = {
                position: {
                    lat: myLat,
                    lng: myLng
                },
                infoText: 
                `   
                <div style="display:flex ; flex-wrap: wrap; align-items: center; justify-content: center; 
                width: 225px; height: 300px; background-color: #EFEBE9"; padding:20px;>
                <h2 style="width:100%;text-align: center; margin: 5px">${pet.petName}</h2>
                <span style="width:150px; margin: 5px auto 10px auto; ">
                <img src="${pet.image}" style="max-height:100px;width:100%;"/>
                </span>
                <span style="margin:5px; width:100%; text-align: center"> ${pet.petLocation}</span>

                <btn @click="redirect(${petid})">Click</btn>             

                </div>
                `
                // <span style="background-color:#BCAAA4;padding:5px; margin:5px; width: 120px;"><a href="/SearchAllPets/${pet.petid}">Haiz </a></span>
            };
            markers.push(petObj);
        });
        return markers;
        //                 <button style="background-color:#BCAAA4;padding:5px; margin:5px; width: 120px;"
        //                 onclick="${this.redirect(pet.petid)}"
        // >View More Details</button>
    }
},
} 

</script>
