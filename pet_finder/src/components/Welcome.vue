<!-- Welcome page -->

<template>
  <div class="white">
    <v-container class="py-10">
      <v-row justify="center" class="my-6">
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
      <v-row justify="center" class="my-6">
        <v-col cols="8" align="center" >
        <h1 class="text-h4 brown--text text--darken-2 font-weight-bold">We're here to help.</h1>
        <br>
        <p class="text-h6 font-weight-light brown--text text--darken-1">
          FindPetNow is an online platform that aims to support you in bringing your lost pet back home. 
          Here, we have a community of pet-lovers that blablbalbalbalbalbalbalblablabblablabla.
        </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" align="center"> 
          <!-- <p class="text-body-2 font-weight-light brown--text text--darken-5">To report your lost pet,</p> -->
          <!-- <v-btn x-large color="brown lighten-3">Join now</v-btn> -->
        </v-col>
      </v-row>

    </v-container>


    <v-container class="">
      <v-row justify="space-between" class="brown lighten-5 my-5 pa-15">
        <v-col cols="6" align="left" class="" data-aos="fade-up">
              <div class="mb-5 text-h4 brown--text text--darken-4 font-weight-bold">
                Browse All Lost and Found Pets
              </div>
              <p class="text-h6 font-weight-light brown--text text--darken-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestias quos harum tenetur adipisci provident praesentium beatae dolor quidem nihil dicta, soluta eum, et dolorum laborum, hic eos! Explicabo, deserunt.
              </p>
        </v-col>  
        <v-col cols="5" data-aos="fade-up">
          <p>** Placeholder image, will replace with video</p>
          <v-img :src="require('../assets/Placeholder1.png')" class="my-3" contain/>
        </v-col> 
      </v-row>
 
      <v-row justify="space-between" class="my-8">
        <v-col cols="7" align="left" class="pa-0" data-aos="fade-up">
            <div class="brown lighten-3 mr-8 pa-15">
              <div class="mb-5 text-h4 white--text font-weight-bold">
                2nd block of content
              </div>
              <p class="text-h6 font-weight-light white--text text--darken-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestias quos harum tenetur adipisci provident praesentium beatae dolor quidem nihil dicta, soluta eum, et dolorum laborum, hic eos! Explicabo, deserunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus repellendus esse dicta non dolorum qui iusto harum molestias quos. Expedita laudantium corrupti laborum molestias veniam totam alias quisquam nesciunt!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti rerum error mollitia sit, nihil corporis quibusdam impedit, provident unde, commodi accusantium tenetur quidem dolor. Unde quia assumenda dolor eligendi incidunt?
              </p>
            </div>
        </v-col>  
        <v-col cols="5" class="brown lighten-3" data-aos="fade-up">
          <div class="brown lighten-3 mr-5 pa-15">
              <div class="mb-5 text-h4 white--text text--darken-4 font-weight-bold">
                3rd block of content
              </div>
              <p class="text-h6 font-weight-light white--text text--darken-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate molestias quos harum tenetur adipisci provident praesentium beatae dolor quidem nihil dicta, soluta eum, et dolorum laborum, hic eos! Explicabo, deserunt.
              </p>
            </div>
        </v-col> 
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center" class="my-15">
        <v-col cols="12" align="center" ><h1>old dumpies below</h1></v-col>
      </v-row>
    </v-container>

    <v-container>
        <v-row align="center" justify="center" class="">
          <v-col cols="8" class="">
            <h1 class="text-h3 mb-3 primary--text font-weight-medium" data-aos="fade-down">
              Welcome to FindPetNow!
            </h1>
            <br>
            <p class="text-h6 font-weight-light brown--text text--darken-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam in possimus, maiores odit mollitia voluptas perferendis saepe voluptates accusantium quod omnis eos nisi ad dolorum neque quasi, facere magni soluta.
            </p>
          </v-col>
          <v-col cols="4" class="text-center">
            <v-img :src="require('../assets/Dog1.png')" class="my-3" contain height="600"/>
          </v-col>
        </v-row>
        <br><br><br><br><br>
    </v-container> 

  <v-container class="my-10">
    <v-row align="center" class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/Dog1.png')"
          class="my-3"
          contain
          height="350"
        />
      </v-col>

      <v-col class="mb-4 brown--text text--darken-3">
        <h1 class="display-2 font-weight-bold mb-3" data-aos="fade-down">
          Welcome to FindPetNow!
        </h1>

        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="white py-10 py-2">
    <v-row justify ="center" align="center">
      <v-col cols="12" lg="9">
        <h1 class="display-2 font-weight-bold mb-3 brown--text item" data-aos="fade-right">Just testing Lol</h1>
      </v-col>
      <v-col cols="12" lg="3">
        <video-background :src="require(`@/assets/test.mp4`)" style="height: 200px; width: 200px">
        </video-background>
      </v-col>
    </v-row>
</v-container>

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
    data: () => ({
      fab: false,
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
    methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  }
  }
</script>
