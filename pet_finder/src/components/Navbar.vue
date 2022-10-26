<template>
    <nav>
        <!-- left side of app bar -->
        <v-app-bar flat app class="px-2">
            <v-app-bar-nav-icon class="brown--text hidden-md-and-up" @click="hamburger=!hamburger"></v-app-bar-nav-icon>
            <!-- hamburger bar/navigation drawer for small screels -->
            <!-- logo -->
            <v-btn plain color="brown" to="/">
            <v-img :src="require('../assets/Dog1Invert.png')" class="mr-2" max-height="40" max-width="40" contain/>
            <v-app-bar-title class="text-no-wrap">
                <div>
                <span class="font-weight-regular">findpet</span>
                <span class="font-weight-bold">now</span>
                </div>
            </v-app-bar-title>
            </v-btn>

        <v-spacer></v-spacer>

        <!-- right side of app bar -->
        <div class="mx-10">
        <v-btn plain color="primary" class="mx-3 font-weight-bold hidden-sm-only" to="/ReportPet">
            <span>Report Pet</span>
        </v-btn>

        <!-- drop down search -->
        <v-menu bottom :offset-y=true>
            <template v-slot:activator="{ on, attrs }">
                <v-btn plain color="primary" dark v-bind="attrs" v-on="on" class="mx-3 font-weight-bold hidden-sm-only">
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
            <v-btn plain color="primary" class="mx-3 font-weight-bold hidden-sm-only" to="/Inbox">
                <span>Matched Pets</span>
            </v-btn>
        
        </div>
        <!-- Profile Drop down-->
        <v-menu bottom :offset-y=true>
            <template v-slot:activator="{ on, attrs }">
                <v-btn fab small elevation="1" color="brown lighten-4 hidden-sm-only" v-bind="attrs" v-on="on" class="ml-5">
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

        <!-- navigation drawer -->
        <v-navigation-drawer v-if="!$vuetify.breakpoint.mdAndUp" v-model="hamburger" app temporary>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                                Menu
                        </v-list-item-title>
                        <br><br>
                        <v-list-item-subtitle>
                                Select a page to visit
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
             <v-divider></v-divider>

                <v-list class="hidden-md-and-up">
                    <v-list-item v-for="link in links" :key="link.text" :to="link.route">
                        <v-list-item-action>
                            <v-icon>{{link.icon}}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
    data(){
        return{
            showDropdown: false,
            hamburger: false,
            links: [
                {text: 'Home', route: '/', icon: 'mdi-home'},
                {text: 'Report a pet', route:'/ReportPet', icon: 'mdi-dog-side'},
                {text: 'View all pets', route:'/Dashboard', icon: 'mdi-magnify'},
                {text: 'Matched pets', route:'/Inbox', icon: 'mdi-paw'},
                {text: 'My Account', route:'/', icon: 'mdi-account'}
            ]
        }
    }
}
</script>