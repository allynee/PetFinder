<template>
    <div class="white pa-15">
        <v-row></v-row>
        <v-container class="brown lighten-5 pa-0">
            <div :class="bgColor()">{{loadedPet.petStatus}}</div>
            <v-row class="mt-10">
                <v-card class="mx-auto" outlined>
                    <!-- <p :class="bgColor()">
                        {{this.petStatus}} Pet
                    </p> -->
                    <!-- <v-img :src="getImgUrl(aPet.petImage)"></v-img>  -->
                    <v-img :src="loadedPet.image" max-height="250" max-width="250" class="pt-15"></v-img>
                </v-card>
            </v-row>
            <h1 class="text-h5 primary--text text-center my-10">{{loadedPet.petname}}</h1>
    
            <v-container class="pa-10">
            <!-- Pet Info -->
            <v-row>
            <v-col cols="12" md="6" class="px-5">
                <v-container>
                    <v-row class="px-3"> PET INFORMATION</v-row>
                    <v-row>
                    <v-col cols="12">
                    <v-card outlined>
                        <v-list dense>
                        <div v-for="(item, i) in items"  :key="i">
                            <v-list-item class="ma-0">
                                <v-list-item-content>
                                <v-list-item-title v-text="item.cont"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content>
                                <v-list-item v-text="item.text"></v-list-item>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider v-show="i!=items.length-1"></v-divider>
                        </div>
                        </v-list>
                    </v-card>
                    </v-col>
                    </v-row>
                </v-container>
            </v-col>
    
            <!-- Map -->
            <v-col cols="12" md="6" class="px-5">
                <v-container>
                    <v-row class="px-3 mb-1"> LAST SEEN LOCATION</v-row>
                    <MyMap style="width:100%;height:400px;"></MyMap>
                </v-container>
            </v-col>
    
            <!-- Report Details -->
    
            <v-col cols="12" md="6" class="px-5">
                <v-container>
                    <v-row class="px-3"> REPORT DETAILS </v-row>
                    <v-row>
                    <v-col cols="12">
                    <v-card outlined>
                        <v-list dense>
                        <div v-for="(detail, i) in details"  :key="i">
                            <v-list-item class="ma-0">
                                <v-list-item-content>
                                <v-list-item-title v-text="detail.cont"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content>
                                <v-list-item v-text="detail.text"></v-list-item>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider v-show="i!=details.length-1"></v-divider>
                        </div>
                        </v-list>
                    </v-card>
                    </v-col>
                    </v-row>
                </v-container>
            </v-col>
    
            <!-- Owner Information -->
    
            <v-col cols="12" md="6" class="px-5">
                <v-container>
                    <v-row class="px-3"> CONTACT DETAILS </v-row>
                    <v-row>
                    <v-col cols="12">
                    <v-card outlined>
                        <v-list dense>
                        <div v-for="(ownerDetail, i) in ownerDetails" :key="i">
                            <v-list-item class="ma-0">
                                <v-list-item-content>
                                <v-list-item-title v-text="ownerDetail.cont"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-content>
                                <v-list-item v-text="ownerDetail.text"></v-list-item>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider v-show="i!=ownerDetails.length-1"></v-divider>
                        </div>
                        </v-list>
                    </v-card>
                    </v-col>
                    </v-row>
                </v-container>
            </v-col>
            </v-row>
        </v-container>
        </v-container>
    </div>
    </template>
    
    <script>
    import MyMap from "../components/GMap.vue";
        export default{
            components: {MyMap},
            props: {
                aPet: Object,
                
            },
            data(){
                return{
                    petStatus: 'Found',
                    items: [
                        { text: 'aPet.petType', cont: 'Type'},
                        { text: 'aPet.petBreed', cont: 'Breed'},
                        { text: 'aPet.petColour', cont: 'Colour'},
                        { text: 'aPet.collarColour', cont: 'Collar Colour'},
                        { text: 'aPet.petSize', cont: 'Size' },
                        { text: 'aPet.petGender', cont: 'Gender'},
                    ],
                    details: [
                        {text: 'aPet.lastSeenLocation',cont:'Last Seen Location'},
                        {text: 'aPet.missingSince',cont:'Last Seen Date'}
                    ],
                    ownerDetails: [
                        {text: 'aPet.lastSeenLocation',cont:'Username'},
                        {text: 'aPet.missingSince',cont:'Email'},
                        {text: 'aPet.missingSince',cont:'Phone Number'},
                    ]
                }
            },
            methods: {
                // getImgUrl(pic){
                // return require('../assets/' + pic)
                // },
                bgColor(){
                    if (this.petStatus == 'Found Pet'){
                        return "text-h5 green lighten-3 font-weight-medium text-center mb-4 py-3"
                    }
                    else {
                        console.log(this.petStatus)
                        return "text-h5 red lighten-3 font-weight-medium text-center mb-4 py-3"
                    }
                    
                }
            },
            computed: {
                loadedPet(){
                    return this.$store.getters.loadedpet
                }
            }
        }
    </script>