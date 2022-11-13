<!-- Welcome page -->

<template>
  <div class="white darken-3">
    <v-container class="py-10">
      <v-row justify="center" class="my-5">
        <v-col cols="9" align="center">
        <h1 class="text-md-h1 text-sm-h2 brown--text text--darken-2 font-weight-light" data-aos="fade-down">
              Is Your Pet Lost?
        </h1>
        </v-col>
      </v-row>
      <v-row justify="center" class="my-5">
        <v-cols cols="12" align="center" data-aos="fade-left">
          <!-- <div data-aos="fade-left"> -->
          <video-background :src="require(`@/assets/test.mp4`)" style="height: 300px; width: 300px">
          </video-background>
          <!-- </div> -->
        </v-cols>
      </v-row>
      <v-row justify="center" class="">
        <v-col cols="8" align="center" >
        <h1 class="text-h4 brown--text text--darken-2 font-weight-bold">We're here to help.</h1>
        <br>
        <p class="text-h6 font-weight-light brown--text text--darken-1 mb-11">
          FindPetNOW is an online platform that supports you in your journey <br>of finding your lost pet. 
          Report your lost dog, cat, terrapin and other pets<br> today to boost the chances
          of finding your lost pet. 
        </p>
        <p class="text-h6 brown--text text--darken-1">
          Ready to get started?
        </p>
        <v-btn elevation="2" :href=href @click.prevent="scroll" class="pa-8 brown lighten-4" style="font-size: 16px;">Let's Go!</v-btn>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" align="center"> 
          <!-- <p class="text-body-2 font-weight-light brown--text text--darken-5">To report your lost pet,</p> -->
          <!-- <v-btn x-large color="brown lighten-3">Join now</v-btn> -->
        </v-col>
      </v-row>

    </v-container>

    <v-container class="container-fluid pa-15 mb-10" id="sect1">
      <v-row justify="space-between">
        <v-col cols="12" lg="4" class="" data-aos="fade-up">
              <v-img :src="require('../assets/ReadingDog.png')" class="my-3"
              contain height="200"/>
              <div class="mb-5 text-h4 brown--text text--darken-4 font-weight-bold text-center">
                Report
              </div>
              <p class="text-h6 text-center font-weight-light brown--text text--darken-1">
                Fill out a form to report your missing pet or somebody else's pet you found. Return back to this site to check for updates every three days. 
              </p>
              <v-btn to="/ReportPet" class="pa-8 brown lighten-4" style="font-size: 16px;display:flex;justify-content:center">Report Now</v-btn>
        </v-col> 
        <v-col cols="12" lg="4" class="" data-aos="fade-up">
              <v-img :src="require('../assets/LearnDog.png')" class="my-3"
              contain height="200"/>
              <div class="mb-5 text-h4 brown--text text--darken-4 font-weight-bold text-center">
                Learn
              </div>
              <p class="text-h6 text-center font-weight-light brown--text text--darken-1">
                Curious to learn more about our furry friends? Head over to "Learn" where there are informational cards and a fun quiz to test your knowledge!
              </p>
              <v-btn to="/Learn?tab=one" class="pa-8 brown lighten-4" style="font-size: 16px;display:flex;justify-content:center">Learn Now</v-btn>
        </v-col>
        <v-col cols="12" lg="4" class="" data-aos="fade-up">
              <v-img :src="require('../assets/DetectiveDog.png')" class="my-3"
              contain height="200"/>
              <div class="mb-5 text-h4 brown--text text--darken-4 font-weight-bold text-center">
                Search
              </div>
              <p class="text-h6 text-center font-weight-light brown--text text--darken-1">
                Browse all the pets and check to see if yours is there. If you see your pet, reclaim it by contacting the individual who posted the information.
              </p>
              <v-btn to="/SearchAllPets" class="pa-8 brown lighten-4" style="font-size: 16px;display:flex;justify-content:center">Search Now</v-btn>
        </v-col> 
      </v-row>
    </v-container>

    <!-- user reviews -->
    <v-container data-aos="fade-up" class="brown lighten-4 mb-15 pa-15">
      <p class="mb-5 text-h4 white--text font-weight-bold">
        Our Users Say...
      </p>
      <v-row>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto brown lighten-5"
            max-width="400"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">You guys are awesome</span>
            </v-card-title>

            <v-card-text class="text-h6 font-weight-bold">
              Brilliant site. Thanks for the efficient service. Will recommend to my family. 
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="blue darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Sean Sev</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">25</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">5</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto brown lighten-5"
            max-width="400"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">Would highly recommend</span>
            </v-card-title>

            <v-card-text class="text-h6 font-weight-bold">
              Was informed that my dog had been found within just a matter of days !!
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="purple darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evan You</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">31</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">90</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto brown lighten-5"
            max-width="400"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">Thumbs up to Find Pet NOW</span>
            </v-card-title>

            <v-card-text class="text-h6 font-weight-bold">
              Love being able to see all the pets near my location and accessing them so easily!  
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="pink darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Polly Pit</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">78</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">12</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto brown lighten-5"
            max-width="400"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">Very easy to register</span>
            </v-card-title>

            <v-card-text class="text-h6 font-weight-bold">
              Very easy to register. The whole process was done in a couple of minutes. 
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="green darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Nette Net</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">109</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">82</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto brown lighten-5"
            max-width="400"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">Instant results!</span>
            </v-card-title>

            <v-card-text class="text-h6 font-weight-bold">
              When they say Find Pet NOW, they really mean NOW!!! Only took 2 days to get Mochi back!
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Yu Yuan</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">16</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">50</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            class="mx-auto brown lighten-5"
            max-width="400"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">Easy to use</span>
            </v-card-title>

            <v-card-text class="text-h6 font-weight-bold">
              Really quick and easy to follow the instructions. Was able to get my Coco home within a few days!
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="orange darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>Evie Ele</v-list-item-title>
                </v-list-item-content>

                <v-row
                  align="center"
                  justify="end"
                >
                  <v-icon class="mr-1">
                    mdi-heart
                  </v-icon>
                  <span class="subheading mr-2">99</span>
                  <span class="mr-1">·</span>
                  <v-icon class="mr-1">
                    mdi-share-variant
                  </v-icon>
                  <span class="subheading">12</span>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- want to be a part of this -->
    <v-container data-aos="fade-up" class="brown lighten-5 my-6 pa-15">
      <p class="text-h2 text-center font-weight-light black--text text--darken-1">
        Want to be a part of this?</p>
      <p class="text-h5 text-center font-weight-light black--text text--darken-1">
        Sign up for an account. It's free anyway.
      </p>
      <p style="margin-top:50px;margin-bottom:50px" class="text-h6 text-center font-weight-light black--text text--darken-1">
        Sign up now to get instant access to hundreds of lost pets waiting to be reclaimed by their owner. 
      </p>
      <v-btn to="/Register" class="pa-8 brown lighten-4" style="font-size: 16px;display:flex;justify-content:center;">Sign Up</v-btn>
    </v-container>

    <v-row justify ="center" align="center">
      <v-col cols="12" lg="9">
      </v-col>
      <v-col cols="12" lg="3">
        <video-background :src="require(`@/assets/test.mp4`)" style="height: 200px; width: 200px">
        </video-background>
      </v-col>
    </v-row>

<!-- scroll to top button -->
<v-btn v-scroll="onScroll" v-show="fab" fab fixed bottom right color="brown lighten-4" @click="toTop">
  <v-icon>mdi-chevron-up</v-icon>
</v-btn>
</div>
</template>

<script>
  import AOS from 'aos'
  export default {
    name: 'HelloWorld',
    mounted() {
      AOS.init({
        duration: 1600,
      })
    },
    data() {
      return{
      href: '#sect1',
      fab: false,
      }
    },
    methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    },
    scroll() {
                // For older browsers, consider pulling in a polyfill.
                // https://www.npmjs.com/package/smoothscroll-polyfill
        document.querySelector(this.href)
                .scrollIntoView({ behavior: 'smooth' });
    }
  }
  }
</script>
