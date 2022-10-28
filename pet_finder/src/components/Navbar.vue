<template>
    <nav>
        <!-- left side of app bar -->
        <v-app-bar flat app class="px-2">
            <v-btn plain color="brown" to="/">
            <v-img :src="require('../assets/Dog1Invert.png')" class="mr-2" max-height="40" max-width="40" contain/>
            <v-app-bar-title class="text-no-wrap">
                <div>
                <!-- <v-icon left>mdi-paw</v-icon> -->
                <span class="font-weight-regular">findpet</span>
                <span class="font-weight-bold">now</span>
                </div>
            </v-app-bar-title>
            </v-btn>

        <v-spacer></v-spacer>

        <!-- right side of app bar -->
        <div class="mx-10">
        <v-btn plain color="primary" class="mx-3 font-weight-bold" to="/ReportPet">
            <span>Report Pet</span>
        </v-btn>

        <v-btn plain color="primary" class="mx-3 font-weight-bold" to="/Learn">
            <span>Learn</span>
        </v-btn>

        <!-- drop down search -->
        <v-menu bottom :offset-y=true>
            <template v-slot:activator="{ on, attrs }">
                <v-btn plain color="primary" dark v-bind="attrs" v-on="on" class="mx-3 font-weight-bold">
                    <span>Search</span>
                    <v-icon>mdi-menu-down</v-icon>
                </v-btn>
            </template>

            <!-- dropdown items. LINKS TO BE ADDED -->
            <v-list>
                <v-list-item color="primary" to="/Dashboard">
                <v-list-item-title >View All Pets</v-list-item-title>
                </v-list-item>
                <v-list-item color="primary" to="/MyMap">
                <v-list-item-title>Map</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <!-- Inbox -->
            <v-btn plain color="primary" class="mx-3 font-weight-bold" to="/Inbox">
                <span>Inbox</span>
            </v-btn>
        
        </div>
        <!-- Profile Drop down-->
        <v-menu bottom :offset-y=true>
            <template v-slot:activator="{ on, attrs }">
                <v-btn fab small elevation="1" color="brown lighten-4" v-bind="attrs" v-on="on" class="ml-5">
                <v-icon>mdi-account</v-icon>
            </v-btn>
            </template>

            <!-- dropdown items. LINKS TO BE ADDED -->
            <v-list>
                <v-list-item>
                <v-list-item-title>Help Me 1</v-list-item-title>
                </v-list-item>
                <v-list-item>
                <v-list-item-title>Help Me 2</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        </v-app-bar>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            showDropdown: false,
            links: [
                {text: 'ReportPet', route:'/ReportPet'},
                {text: 'Dashboard', route:'/Dashboard'},
                {text: 'Map', route:'/Map'},
                {text: 'Inbox', route:'/Inbox'}
            ]
        }
    }
}
</script>