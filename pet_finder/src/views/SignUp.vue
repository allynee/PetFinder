<template>
    
    <v-container class="brown lighten-5 pa-5" style="width:40%">
        <span class="text-h6 text-capitalize grey--text text--lighten-1">Create your account.</span><br/>
        <v-row class="mb-7 ml-1 mt-1">
            <span class="text-h4 text-capitalize brown--text">Join thousands of pet lovers.</span>
        </v-row>

        <v-form v-model="isFormValid">
            <v-row>
                <v-col
                    cols="12"
                    xs="12"
                    >
                    <v-text-field
                        label="First Name *"
                        placeholder="Enter First Name"
                        :rules = "fnameRules"
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                    xs="12"
                    >
                    <v-text-field
                        label="Last Name"
                        placeholder="Enter Last Name"
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                    xs="12"
                    >
                    <v-text-field
                        label="Username *"
                        placeholder="Enter Username"
                        :rules = "userRules"
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                    xs="12"
                    >
                    <v-text-field
                        label="Email *"
                        placeholder="Enter Email"
                        :rules = "emailRules"
                        outlined
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                    xs="12"
                    >
                    <v-text-field
                        label="Password *"
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
                    xs="12"
                    >
                    <v-text-field
                        label="Confirm Password *"
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
                <span class="ml-4 mb-16">
                    <v-checkbox>
                        <template v-slot:label>
                            I wish to receive emails regarding activities involving my account
                        </template>
                    </v-checkbox>
                </span>
            </v-row>
        </v-form>
            
        <div>
            <v-btn block :disabled="!isFormValid"
                class="mb-4 " color="brown" outlined>
                Submit
            </v-btn>
        </div>
    </v-container>
</template>

<script>
// import useValidate from '@vuelidate/core'
// import { required } from '@vuelidate/validators'

export default {
// mixins: [validationMixin],
//  validations: {
// confirmPassword: { sameAsPassword: sameAs("password") }},
data(){
    return {
        password: '',
        confirmPassword: '',
        value: String,
        showPassword: String,
        isFormValid: false,
        userRules: [
            v => v.length >= 8 || 'Minimum length is 8 characters',
            v => /[0-9]/.test(v) || 'Must contain at least 1 digit',
        ],
        fnameRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
        ],
        emailRules: [
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ],
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
        validations() {
    return {
    //   email: { required },
    //   password: {
    //     password: { required },
    //     confirm: { required },
    //   },
    }
  },
    }
},
methods: {
    checkPassword(invalid) { 
        // correct: false
        if (true == invalid) {
        this.validPassword = false;
        } else {
        this.validPassword = true;
        }
    },
    
},
computed: {
    
  }
}
</script>