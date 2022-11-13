<template>
    <!-- <v-dialog width="100px">
        <v-btn flat slot="activator">
            <v-card>
                <v-card-title class="blue lighten-2">
                    <h4>Add a New Project</h4>
                </v-card-title>
                <v-card-text>
                    <v-form class="px-3">
                        <v-text-field label="title"></v-text-field>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-btn>
    </v-dialog> -->
    <v-dialog
      v-model="dialog"
      width="600"
    >
    <!-- <div class="container mx-auto"> -->
        <template v-slot:activator="{ on, attrs }">
            <div class="container mx-0 my-0 pt-0 pr-4" style="text-align:center;margin:0">
                <v-btn
                color="brown lighten-1 white--text"
                elevation="4"
                class="pa-10"
                dark
                v-bind="attrs"
                v-on="on"
                rounded
                bigger
                >
                Get Your score!
                <v-icon>mdi-party-popper</v-icon>
                </v-btn>
            </div>
      </template>
    <!-- </div> -->

      <v-card>
        <v-card-title class="text-h5 brown lighten-4">
          Congratulations! Your score is: *insert*/5
        </v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    max-width="290"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                        :value="formattedDate"
                        clearable
                        label="Due date"
                        prepend-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="date = date"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        @change="menu1 = false"
                    >date</v-date-picker>
                </v-menu>
                <v-spacer></v-spacer>
                <v-btn text class="success mx-0 mt-3" @click="submit">Add project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

</template>

<script>
// import format from 'date-fns/format'
export default {
    data(){
        return{
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ]
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()){
                console.log(this.title, this.content)
            }
        }
    },
    // computed: {
    //     formattedDate() {
    //         return this.due ? format(this.due, 'Do MMM YYY') : ''
    //     }
    // }

}
</script>