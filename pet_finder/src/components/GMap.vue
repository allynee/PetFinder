<template>
    <v-container>
        <GmapMap :center="myCoordinates"
                :zoom="zoom"
                style="max-width:100%;height:100%;"
                ref="mapRef"
                @dragend="handleDrag"></GmapMap>
        <!-- :center="{lat: 10, lng:10}" -->
    </v-container>
</template>

<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCsbcA8EHPhaZbxQ_Gubm_ZhQyy-pcn6JM&libraries=places"></script>

<script>
    export default{
        // props: {
        //     score: Object,
        // },
        // Chnage my coordinates to a prop
        data(){
            return{
                map: null,
                myCoordinates:{
                    lat: 0,
                    lng: 0
                },
                zoom: 7,
            }
        },
        created(){
            //does user have saved center? use it instead of default
            if(localStorage.center){
                this.myCoordinates = JSON.parse(localStorage.center);
            }else{
                this.$getLocation({})
                .then(coordinates => {
                    this.myCoordinates = coordinates;
                })
                .catch(error=>alert(error));
            }
             //does user have saved zoom? use it instead of default
            if(localStorage.zoom){
                this.zoom = parseInt(localStorage.zoom);
            }
        },
        mounted(){
            // fire anyth inside after component loaded, and attach to vue instance
            // good for code that requires component to be ready
            this.$refs.mapRef.$mapPromise.then(map=>this.map = map);
        },
        methods: {
            handleDrag(){
                //get center and zoom level, store in local storage
                let center = {
                    lat: this.map.getCenter().lat(),
                    lng: this.map.getCenter().lng()
                };
                let zoom = this.map.getZoom();

                localStorage.center = JSON.stringify(center);
                localStorage.zoom = JSON.stringify(zoom);
            }
        },
        computed: {
            mapCoordinates(){
                if(!this.map){
                    return {
                        lat: 0,
                        lng: 0
                    };
                }

                return{
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4),
                }
            }
        }
    }

</script>