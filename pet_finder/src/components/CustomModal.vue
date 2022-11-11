<template>
    <transition name="modal">
      <v-container>
        <v-row justify="center" class="my-10">
          <h1 class="text-md-h1 text-sm-h2 brown--text text--darken-1 font-weight-light" data-aos="fade-down">
            Congratulations!
          </h1>
        </v-row>
        <v-row justify="center">
        <v-img :src="require('../assets/OrangeCat.png')" contain max-height="300" max-width="300" class="my-5"></v-img>
        </v-row>
        <v-row justify="center">
          <p class="text-md-h4 text-sm-h5 font-weight-light brown--text text--darken-2">You've completed the Quiz</p>
        </v-row>
        <v-row justify="center">
          <p class="text-h6 font-weight-light brown--text text--darken-2">
            Your scored: <strong>{{Math.floor((score.correctlyAnsweredQuestions / score.allQuestions) *100)}}% </strong></p>
        </v-row>
        <v-row justify="center">
            <p class="text-h6 font-weight-light brown--text text--darken-2">You answered
                  <strong>{{ score.correctlyAnsweredQuestions }}</strong> out of
                  <strong>{{ score.allQuestions }}</strong>
                questions correctly. Good job! 
              </p>
        </v-row>
        <v-row justify="center" class="mt-10">
          <v-btn x-large flat @click="$emit('reload')" color="brown lighten-4">Play Again</v-btn>
        </v-row>


      <!-- <div class="container py-10">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">

              </div>
            </div>
    
            <div class="modal-body">
              <div id="score"> -->
                <!-- You answered
                <span class="highlight">
                  {{
                    Math.floor(
                      (score.correctlyAnsweredQuestions / score.allQuestions) *
                        100
                    )
                  }}
                  % correctly!
                </span> -->
                <!-- Answered
                <span class="highlight">
                  {{ score.correctlyAnsweredQuestions }} out of
                  {{ score.allQuestions }}
                </span>
                questions. -->

                
              <!-- </div>
            </div> -->
            
            <!-- <div class="modal-footer"> -->
              <!-- <v-btn x-large flat id="play-again" class="button-footer" @click="$emit('reload')></v-btn>

              <v-btn x-large flat id="play-again" class="button-footer" @click="$emit('reload')">
                Play Again!
            </v-btn>  -->

              <!-- <button
                id="close-button"
                class="button-footer"
                @click="$emit('close')"
              >
                Close
              </button> -->
            <!-- </div>
          </div>
        </div>
      </div>
    </div> -->
    </v-container>
    </transition>
   </template>
    
   <script>
   export default {
    props: {
      score: Object,
    },
   };
   </script>