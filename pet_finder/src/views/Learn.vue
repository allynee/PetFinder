<template>
    <v-container color="brown lighten-5">  
      <v-tabs
        v-model="tab"
        background-color="transparent"
        grow
      >
        <v-tooltip bottom color="brown lighten-3">
        <template v-slot:activator="{ on, attrs }">
            <v-tab
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Information
            </v-tab>
        </template>
        <span>Learn more about different pet breeds!</span>
        </v-tooltip>

        <v-tooltip bottom color="brown lighten-3">
        <template v-slot:activator="{ on, attrs }">
            <v-tab
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            >
            Test your knowledge
            </v-tab>
        </template>
        <span>Test your knowledge with a fun game!</span>
        </v-tooltip>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item class="brown lighten-5">
            <template>
                <p class="mt-11">This page contains images of more than 70 different breeds of dogs and cats to help users identify the breeds of different pets. 
                </p>
                <v-row
                        class="mt-5"
                    >
                        <v-btn @click="called=''" color="brown lighten-4" class="mx-5">
                        All
                        </v-btn>
                        <v-btn @click="callDogs()" color="brown lighten-4" class="mx-5">
                        Dogs
                        </v-btn>
                        <v-btn @click="callCats()" color="brown lighten-4" class="mx-5">
                        Cats
                        </v-btn>
                    </v-row>
                <v-row>
                    <v-col cols="12" md="4" v-for="breed in filteredPets" :key="breed.name">
                        <v-card
                        class="mx-auto my-6 pa-3"
                        max-width="360">
                        <v-responsive>
                            <v-img height="400" :src= "breed.image"
                            ></v-img>
                        </v-responsive>

                        <v-card-title>{{breed.name}}</v-card-title>                
                        </v-card>
                    </v-col>
                </v-row>
            </template>
        </v-tab-item>
        <v-tab-item class="brown lighten-5">
            <p class="mt-11">Test your knowledge on animal breeds by answering 5 questions below!
                </p>
            <v-row
                class="mt-5 d-flex justify-space-between"
            >
                <div>
                    <v-btn @click="called=''" color="brown lighten-4" class="mx-5">
                    All
                    </v-btn>
                    <v-btn @click="callDogs()" color="brown lighten-4" class="mx-5">
                    Dogs
                    </v-btn>
                    <v-btn @click="callCats()" color="brown lighten-4" class="mx-5">
                    Cats
                    </v-btn>
                </div>
                <div class="my-0">
                    <Popup v-if='this.getResults == true'/>
                </div>
            </v-row>
                <template>
                    <div>
                        <v-progress-linear
                            v-model="perc_prog"
                            height="25"
                            class="mt-12"
                            color="brown lighten-3"
                            >
                            <strong>{{ (this.prog) }}/5</strong>
                        </v-progress-linear>
                    </div>
                </template>
            <v-card
            elevation="24"
            max-width="500"
            class="mx-auto mt-15">
                <v-carousel hide-delimiters
                
                >
                <template v-slot:prev="{ on, attrs }">
                <v-btn
                color="brown lighten-4"
                    v-bind="attrs"
                    v-on="on"
                    @click="increaseProg();getPetsList()"
                    fab
                ><v-icon>mdi-chevron-left</v-icon></v-btn>
                </template>
                <template v-slot:next="{ on, attrs }">
                <v-btn
                color="brown lighten-4"
                    v-bind="attrs"
                    v-on="on"
                    @click="increaseProg();getPetsList()"
                    fab
                ><v-icon>mdi-chevron-right</v-icon></v-btn>
                </template>
                <v-carousel-item
                    v-for="breed in filteredPets"
                    :key="breed.name"
                    :src="breed.image"
                    >
                </v-carousel-item>
                </v-carousel>
                <v-list>
                    <v-list-item v-for="pet in getPetsList()"
                        :key="pet">
                                <v-btn
                                block
                                outlined
                                color="primary"
                                class="mx-auto"
                                >
                                {{pet}}
                                </v-btn>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
</template>

<script>
import Popup from '../components/Popup.vue'
export default {
    components: {Popup},
  data () {
    return {
      tab: null,
      breeds: [
            {name:'Affenpinscher Dog', image:'dog1.png', pet:'dog'},
            {name:'Afghan Hound Dog', image:'dog2.png', pet:'dog'},
            {name:'Alaskan Malamute Dog', image:'dog5.png', pet:'dog'},
            {name:'Australian Cattle Dog', image:'dog7.png', pet:'dog'},
            {name:'Australian Kelpie Dog', image:'dog8.png', pet:'dog'},
            {name:'Australian Terrier Dog', image:'dog12.png', pet:'dog'},
            {name:'Basenji Dog', image:'dog13.png', pet:'dog'},
            {name:'Basset Bretagne Dog', image:'dog14.png', pet:'dog'},
            {name:'Basset Hound Dog', image:'dog15.png', pet:'dog'},
            {name:'Beagle Dog', image:'dog16.png', pet:'dog'},
            {name:'Bearded Collie Dog', image:'dog17.png', pet:'dog'},
            {name:'Belgian Shepherd Dog', image:'dog19.png', pet:'dog'},
            {name:'Bernese Mountain Dog', image:'dog20.png', pet:'dog'},
            {name:'Bichon Frise Dog', image:'dog21.png', pet:'dog'},
            {name:'Bloodhound Dog', image:'dog22.png', pet:'dog'},
            {name:'Border Collie Dog', image:'dog23.png', pet:'dog'},
            {name:'Border Terrier Dog', image:'dog24.png', pet:'dog'},
            {name:'Borzoi Dog', image:'dog25.png', pet:'dog'},
            {name:'Boston Terrier Dog', image:'dog26.png', pet:'dog'},
            {name:'Bouvier Flandres Dog', image:'dog27.png', pet:'dog'},
            {name:'Boxer Dog', image:'dog28.png', pet:'dog'},
            {name:'Briard Dog', image:'dog29.png', pet:'dog'},
            {name:'British Bulldog', image:'dog30.png', pet:'dog'},
            {name:'Brittany Dog', image:'dog31.png', pet:'dog'},
            {name:'Chihuahua Dog', image:'dog33.png', pet:'dog'},
            {name:'Cocker Spaniel Dog', image:'dog34.png', pet:'dog'},
            {name:'Dalmatian Dog', image:'dog35.png', pet:'dog'},
            {name:'Doberman Dog',image:'dog36.png', pet:'dog'},
            {name:'French Bulldog', image:'dog37.png', pet:'dog'},
            {name:'German Shepherd Dog', image:'dog38.png', pet:'dog'},
            {name:'Golden Retriever Dog', image:'dog39.png', pet:'dog'},
            {name:'Great Dane Dog', image:'dog40.png', pet:'dog'},
            {name:'Greyhound Dog', image:'dog41.png', pet:'dog'},
            {name:'Labrador Dog', image:'dog42.png', pet:'dog'},
            {name:'Maltese Dog', image:'dog43.png', pet:'dog'},
            {name:'Pomeranian Dog', image:'dog44.png', pet:'dog'},
            {name:'Poodle Dog',image:'dog45.png', pet:'dog'},
            {name:'Pug Dog', image:'dog46.png', pet:'dog'},
            {name:'Shih Tzu Dog', image:'dog48.png', pet:'dog'},
            {name:'Siberian Husky Dog', image:'dog51.png', pet:'dog'},
            {name:'Welsh Corgi Dog', image:'dog49.png', pet:'dog'},
            {name:'Yorkshire Terrier Dog', image:'dog50.png', pet:'dog'},
            
            {name:'Abyssinian Cat', image:'cat39.png', pet:'cat'},
            {name:'American Bobtail Cat', image:'cat2.png', pet:'cat'},
            {name:'American Curl Cat',image:'cat40.png', pet:'cat'},
            {name:'Birman Cat',image:'cat19.png',pet:'cat'},
            {name:'Bombay Cat',image:'cat4.png', pet:'cat'},
            {name:'Burmese Cat',image:'cat21.png',pet:'cat'},
            {name:'Chartreux Cat',image:'cat41.png', pet:'cat'},
            {name:'Cornish Rex Cat', image:'cat42.png', pet:'cat'},
            {name:'Devon Rex Cat',image:'cat20.png',pet:'cat'},
            {name:'Egyptian Mau Cat',image:'cat43.png', pet:'cat'},
            {name:'Exotic Shorthair Cat',image:'cat44.png',pet:'cat'},
            {name:'Havana Brown Cat',image:'cat24.png',pet:'cat'},
            {name:'Himalayan Cat',image:'cat7.png', pet:'cat'},
            {name:'Japanese Bobtail Cat',image:'cat25.png',pet:'cat'},
            {name:'LaPerm Cat',image:'cat26.png',pet:'cat'},
            {name:'Maine Coon Cat',image:'cat27.png',pet:'cat'},
            {name:'Manx Cat',image:'cat45.png', pet:'cat'},
            {name:'Munchkin Cat',image:'cat9.png', pet:'cat'},
            {name:'Norwegian Forest Cat',image:'cat46.png', pet:'cat'},
            {name:'Ocicat Cat',image:'cat10.png', pet:'cat'},
            {name:'Oriental Shorthair Cat', image:'cat47.png',pet:'cat'},
            {name:'Persian Cat',image:'cat48.png', pet:'cat'},
            {name:'Pixiebob Cat',image:'cat29.png',pet:'cat'},
            {name:'Ragamuffin Cat',image:'cat12.png', pet:'cat'},
            {name:'Ragdoll Cat',image:'cat49.png', pet:'cat'},
            {name:'Russian Blue Cat',image:'cat30.png',pet:'cat'},
            {name:'Savannah Cat',image:'cat31.png',pet:'cat'},
            {name:'Scottish Fold Cat',image:'cat32.png',pet:'cat'},
            {name:'Selkirk Rex Cat',image:'cat33.png',pet:'cat'},
            {name:'Siamese Cat',image:'cat14.png', pet:'cat'},
            {name:'Siberian Cat',image:'cat15.png', pet:'cat'},
            {name:'Singapura Cat',image:'cat51.png', pet:'cat'},
            {name:'Somali Cat',image:'cat50.png', pet:'cat'},
            {name:'Tonkinese Cat',image:'cat35.png',pet:'cat'},
            {name:'Turkish Angora Cat',image:'cat18.png', pet:'cat'},
            {name:'Turkish Van Cat',image:'cat36.png',pet:'cat'}


        ],
        called: '',
        petBreed: '',
        prog: 1,
        perc_prog: 20,
        getResults: false,
    }
  },
  methods: {
    callDogs() 
    {this.called = "dog";},
    callCats() 
    {this.called = "cat";},
    currImg()
    {this.petBreed == this.breed.name},
    increaseProg()
    {   console.log('y')
        if (this.prog == 5){
            this.prog = 1
            this.perc_prog = 20
            this.getResults = false
        }
        else if (this.prog == 4){
            this.getResults = true
            this.prog += 1
            this.perc_prog += 20
        }
        else{
            this.prog += 1
            this.perc_prog += 20
        }
    },
    getPetsList() {
        var petsList = [];
        for(var i=0; i<3;i++){
            var id = Math.ceil(Math.random()*this.breeds.length)
            var petName = this.breeds[id].name
            petsList.push(petName)
        }
        petsList.push(this.petBreed)
        return petsList.sort((a, b) => a < b ? -1 : 1)
    },
        
    
},
  computed: {
    filteredPets() {
        if (this.called === 'dog'){
            return this.breeds.filter(breed => breed.pet === 'dog');
        }
        else if (this.called === 'cat'){
            return this.breeds.filter(breed => breed.pet === 'cat');
        }
        else {
            return this.breeds;
        }
    },

    // trigPopUp() {

    // }
  }
}
</script>