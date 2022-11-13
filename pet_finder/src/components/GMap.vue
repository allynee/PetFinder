<template>
    <v-container>
        <GmapMap :center="petGeoLoc" :zoom="15" style="max-width:100%;height:100%;">
        
        <gmap-info-window :options="infoOptions" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        </gmap-info-window>
        
        <GmapMarker :clickable="true"
                :position="petGeoLoc"
                :draggable="true" @click="infoWinOpen=true"></GmapMarker>
        </GmapMap>
    </v-container>
</template>

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCsbcA8EHPhaZbxQ_Gubm_ZhQyy-pcn6JM&libraries=places"></script>

<script>
    export default{
        props: {
            petGeoLoc: Object,
            petLoc: String,
        },
        // Chnage my coordinates to a prop
        data(){
            return{
            // info window nonsense
            infoWinOpen: false,
            infoOptions: { 
                content: this.petLoc,
                //help info window sit above our marker
                pixelOffset: {
                    width: 0,
                    height: -35
                },
                position: this.petGeoLoc
            },
            }
        },
        computed: {
        }
    }

</script>