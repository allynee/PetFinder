<template>
    <div class="white pa-15">
        <v-container class="brown lighten-5 pa-10">
            <div class="display-1 mb-5">My Petfinder</div>
                <v-tabs
                v-model="tab"
                background-color="brown lighten-5"
                icons-and-text
                >
                <v-tabs-slider></v-tabs-slider>

                <v-tab>
                    About Me
                    <v-icon style="color:rgb(196,164,132)">mdi-account</v-icon>
                </v-tab>

                <v-tab>
                    Account Settings
                    <v-icon style="color:rgb(196,164,132)">mdi-cog</v-icon>
                </v-tab>

                <v-tab>
                    Liked Pets
                    <v-icon style="color:rgb(196,164,132)">mdi-heart</v-icon>
                </v-tab>
                <v-tab>
                    My Pets
                    <v-icon style="color:rgb(196,164,132)">mdi-paw</v-icon>
                </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-form class="px-3 my-5">
                        <p class="brown--text text-uppercase font-weight-bold">what is your name?</p>
                        <v-row justify="center mb-3">
                            <v-col cols="12" md="6" class="margin-bottom: 5px;">
                                <v-text-field label="First Name" value="person's name when he signed up (otherwise blank)"
                                outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field label="Last Name" value="person's name when he signed up (otherwise blank)"
                                outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field label="Username" value="person's username when he signed up"
                                outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                            </v-col>
                        </v-row>
                        <p class="brown--text text-uppercase font-weight-bold">how can you be reached?</p>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field label="Email" value="person's email when he signed up"
                                outlined>
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field label="Phone Number" value=" "
                                outlined>
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-tab-item>
                <v-tab-item>
                    <v-form ref="form" v-model="valid" class="px-3 my-5">
                        <p class="brown--text text-uppercase font-weight-bold">Email</p>
                        <v-row class="mb-5">
                            <v-col cols="12" md="4">
                                <p>person's email they signed up with</p>
                            </v-col>
                            <v-col cols="12" md="2">
                                <v-btn outlined flat class="brown--text text-uppercase" v-on:click="this">change</v-btn>
                            </v-col>
                        </v-row>
                        <p class="brown--text text-uppercase font-weight-bold">change password</p>
                        <v-row>
                            <v-col
                            cols="12" md="6"
                                    >
                                    <v-text-field
                                        label="Password"
                                        placeholder="Enter Password"
                                        v-model = "password"
                                        :rules = "pwdRules"
                                        :value="myPass"
                                        :append-icon="value ? 'mdi-eye-off' : 'mdi-eye'"
                                        @click:append="() => (value = !value)"
                                        :type="value ? 'password' : 'text'"
                                        outlined
                                    ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                                md="6"
                                >
                                <v-text-field
                                    label="Confirm Password"
                                    v-model="confirmPassword"
                                    placeholder="Type Confirm Password"
                                    :rules="cfmpwdRules"
                                    :value="mycfmPass"
                                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                    @click:append="() => (showPassword = !showPassword)"
                                    :type="showPassword ? 'password' : 'text'"
                                    outlined
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-btn block :disabled="!valid" @click="validate"
                            class="mb-4 " color="brown" outlined>
                            Update Password
                        </v-btn>
                    </v-form>
                </v-tab-item>
                <v-tab-item>
                    <!-- <v-container>
                        <v-row dense>
                            <v-col cols="12">
                                <v-card
                                    color="#D1C3B7"
                                    dark
                                >
                                    <v-card-title class="text-h5 black--text">
                                    "Dogs near Boon Lay"
                                    </v-card-title>

                                    <v-card-subtitle>
                                        <v-checkbox style="border-radius:100%" color="black" >
                                            <template v-slot:label>
                                                <div class="black--text">
                                                    Send me daily emails when new pets are added
                                                </div>
                                            </template>
                                        </v-checkbox>
                                    </v-card-subtitle>

                                    <v-card-actions>
                                    <v-btn text >
                                        Launch Search
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container> -->
                </v-tab-item>
            </v-tabs-items>
        </v-container>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        valid: true,
        tab: null,
        password: '',
        confirmPassword: '',
        value: String,
        showPassword: String,
        pwdRules: [
            v => !!v || 'Please type password.',
            v => (v && v.length >= 6) || 'Minimum length is 6 characters',
            v => /[a-z]/.test(v) || 'Must contain at least 1 lowercase letter',
            v => /[A-Z]/.test(v) || 'Must contain at least 1 uppercase letter',
            v => /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/.test(v) || 'Must contain at least 1 symbol'
        ],
        cfmpwdRules: [
            v => !!v || 'Please type confirm password.',
            v => v === this.password || 'The passwords do not match.'
        ],
      }
    },
    methods: {
        validate () {
            this.$refs.form.validate()
        },
    },
  }
</script>