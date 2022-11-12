<template>
    <nav>
        <!-- left side of app bar -->
        <v-app-bar flat app class="px-2">

            <!-- hamburger bar/navigation drawer for small screens -->
            <v-app-bar-nav-icon class="brown--text hidden-md-and-up" @click="hamburger=!hamburger"></v-app-bar-nav-icon>


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

        <div class="hidden-sm-only">
        <v-btn plain depressed color="primary" 
        v-for="link in links" :key="link.text" :to="link.route" 
        class="font-weight-bold hidden-sm-only">
            <v-icon small left>{{link.icon}}</v-icon>
            <span plain color="primary" class="text-body-2 font-weight-bold">{{ link.text }}</span>
        </v-btn>
        </div>
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
                {text: 'Report Pet', route:'/ReportPet', icon: 'mdi-dog-side'},
                {text: 'Search Pet', route:'/SearchAllPets', icon: 'mdi-magnify'},
                // {text: 'Map View', route:'/MyMap', icon: 'mdi-rabbit'},
                {text: 'Map of all pets', route:'/MyMap', icon: 'mdi-map-outline'},
                // {text: 'Matched Pets', route:'/Inbox', icon: 'mdi-paw'},
                {text: 'Learn More', route:'/Learn', icon: 'mdi-book-outline'},
                {text: 'Account', route:'/Account', icon: 'mdi-account'}
            ]
        }
    }
}
</script>