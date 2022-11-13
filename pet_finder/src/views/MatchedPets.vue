<template>
    <v-container class="pa-15">
            <v-row justify="center" class="text-center mb-10" data-aos="fade-down">
                <v-col cols="12">
                    <v-img :src="require('../assets/elephant.png')" contain height="150"/>
                </v-col>
                <v-col cols="12">
                    <h1 class="text-h4 brown--text text-center">My Recommended Pets</h1>
                </v-col>
                <v-col cols="8" align="center" >
                    <p class="text-h6 font-weight-light brown--text text--darken-2">
                        View below to see pets which are similar to those you have reported lost or found.
                    </p>
                </v-col>
            </v-row>
            <v-divider></v-divider>
    </v-container>
</template>