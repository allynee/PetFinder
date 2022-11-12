<template>
    <v-container class="py-15">
        <v-row class="">
            <v-card
                class="mx-auto"
                outlined
            >
                <p :class="bgColor()">
                    {{this.petStatus}} Pet
                </p>
                <!-- <v-img :src="getImgUrl(aPet.petImage)"></v-img>  -->
                <v-img src="../../public/cat1.png" max-height="250" max-width="250" class="py-15"></v-img>
            </v-card>
        </v-row>

        <v-row>
            <p class="text-h6 brown--text font-weight-light mx-auto">aPet.petName</p>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-subheader>PET INFORMATION</v-subheader>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(item, i) in items"
                        :key="i"
                    >
                        <v-list-item-content>
                        <v-list-item-title v-text="item.cont"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content>
                        <v-list-item v-text="item.text"></v-list-item>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="12" md="6">
                <v-subheader>DETAILS</v-subheader>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(detail, i) in details"
                        :key="i"
                    >
                        <v-list-item-content>
                        <v-list-item-title v-text="detail.cont"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content>
                        <v-list-item v-text="detail.text"></v-list-item>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" md="6">
                <v-subheader>OWNER INFORMATION</v-subheader>
                <v-list
                    nav
                    dense
                >
                    <v-list-item-group
                    v-model="selectedItem"
                    color="primary"
                    >
                    <v-list-item
                        v-for="(ownerDetail, i) in ownerDetails"
                        :key="i"
                    >
                        <v-list-item-content>
                        <v-list-item-title v-text="ownerDetail.cont"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content>
                        <v-list-item v-text="ownerDetail.text"></v-list-item>
                        </v-list-item-content>
                    </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col cols="12" md="6">
                <v-subheader>MAP</v-subheader>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default{
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
            getImgUrl(pic){
            return require('../assets/' + pic)
            },
            bgColor(){
                if (this.petStatus == 'Found'){
                    return "text-h4 green lighten-3 font-weight-bold text-center mb-4 pt-4 pb-4"
                }
                else {
                    console.log(this.petStatus)
                    return "text-h4 red lighten-3 font-weight-bold text-center mb-4 pt-4 pb-4"
                }
                
            }
        },
        computed: {

        }
    }
</script>