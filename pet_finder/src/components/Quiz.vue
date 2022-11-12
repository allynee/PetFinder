<template>
    <v-container class="pt-10">  
        <v-row justify="center">
            <v-col cols="8" align="center">
                <p class="text-h6 font-weight-light brown--text text--darken-2">
                We are currently at question <strong>{{ index + 1 }}</strong> of <strong>{{ randomQuestions.length }}</strong>
                </p>
                <p class="text-h6 font-weight-light brown--text text--darken-2">
                You have <strong>{{ correctAnswers }} correct {{ pluralizeAnswer }}</strong> so far
                </p>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-img :src="currentQuestion.question" contain max-height="300" max-width="300" class="my-5"></v-img>
        </v-row>
        <v-row justify="center" class="mt-5">
            <p class="text-h6 brown--text text--darken-2">What breed is this?</p>
        </v-row>
        <v-row justify="center">
            <v-img v-if="message=='Correct, Good job!'" :src="require('../assets/OrangeCat.png')" contain max-height="150" max-width="150" class="my-5"></v-img>
            <v-img v-if="message=='Incorrect :('" :src="require('../assets/BlackCat.png')" contain max-height="150" max-width="150" class="my-5"></v-img>
            <p class="text-h5 brown--text text--darken-2 mt-10">{{message}}</p>
        </v-row>
        <v-row justify="center">
        <!-- Only first question is displayed -->
        <v-btn x-large tile color="brown lighten-4"
        v-for="answer in currentQuestion.answers"
        :index="index"
        :key="answer"
        :value = "answer"
        v-html="answer"
        @click.prevent="handleClick"
        ></v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
    return {
    message:"",
      questions: [
        // question1
        {   question: "cat47.png",
            correctAnswer: 'Oriental Shorthair Cat',
            answers: ['Oriental Shorthair Cat','Singapura Cat','Pixiebob Cat','Himalayan Cat'],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question2
        {   question: "cat48.png",
            correctAnswer: 'Persian Cat',
            answers: ["Bombay Cat","Egyptian Mau Cat",'Munchkin Cat','Persian Cat'],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question3
        {   question: "dog16.png",
            correctAnswer: "Beagle Dog",
            answers: ["Greyhound Dog","Bichon Frise Dog","Beagle Dog","Yorkshire Terrier Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question4
        {   question: "dog27.png",
            correctAnswer: "Bouvier Flandres Dog",
            answers: ["Borzoi Dog","Golden Retriever Dog","Dobermann Dog","Bouvier Flandres Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question5
        {   question: "dog12.png",
            correctAnswer: "Australian Terrier Dog",
            answers: ["Maltese Dog","Australian Terrier Dog","Basset Bretagne Dog","Shih Tzu Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question6
        {   question: "cat25.png",
            correctAnswer: "Japanese Bobtail Cat",
            answers: ["Japanese Bobtail Cat","Ocicat Cat","Abyssinian Cat","Ragamuffin Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question7
        {   question: "cat35.png",
            correctAnswer: "Tonkinese Cat",
            answers: ["American Curl Cat","Maine Coon Cat","Scottish Fold Cat","Tonkinese Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question8
        {   question: "cat14.png",
            correctAnswer: "Siamese Cat",
            answers: ["Bombay Cat","Siamese Cat","Pixiebob Cat","LaPerm Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question9
        {   question: "dog51.png",
            correctAnswer: "Siberian Husky Dog",
            answers: ["Poodle Dog","Siberian Husky Dog","Yorkshire Terrier Dog","Pug Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question10
        {   question: "dog36.png",
            correctAnswer: "Dobermann Dog",
            answers: ["Dobermann Dog","Boxer Dog","Dalmatian Dog","Pomeranian Dog'"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question11
        {   question: "dog23.png",
            correctAnswer: "Border Collie Dog",
            answers: ["Labrador Dog","Belgian Shepherd Dog","Border Collie Dog","Alaskan Malamute Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question12
        {   question: "dog46.png",
            correctAnswer: "Pug Dog",
            answers: ["Pug Dog","Australian Cattle Dog","Afghan Hound Dog","Bernese Mountain Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question13
        {   question: "dog25.png",
            correctAnswer: "Borzoi Dog",
            answers: ["Borzoi Dog","Welsh Corgi Dog","Bloodhound Dog","French Bulldog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question14
        {   question: "cat24.png",
            correctAnswer: "Havana Brown Cat",
            answers: ["Savannah Cat","Havana Brown Cat","Turkish Van Cat","Japanese Bobtail Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question15
        {   question: "cat51.png",
            correctAnswer: "Singapura Cat",
            answers: ["Egyptian Mau Cat","Ragamuffin Cat","Devon Rex Cat","Singapura Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question16
        {   question: "cat33.png",
            correctAnswer: "Selkirk Rex Cat",
            answers: ["Russian Blue Cat","Selkirk Rex Cat","Persian Cat","Oriental Shorthair Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question17
        {   question: "dog48.png",
            correctAnswer: "Shih Tzu Dog",
            answers: ["Shih Tzu Dog","Maltese Dog","Labrador Dog","Greyhound Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question18
        {   question: "dog20.png",
            correctAnswer: "Bernese Mountain Dog",
            answers: ["Golden Retriever Dog","Alaskan Malamute Dog","Bearded Collie Dog","Bernese Mountain Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question19
        {   question: "dog39.png",
            correctAnswer: "Golden Retriever Dog",
            answers: ["Golden Retriever Dog","Pomeranian Dog","Affenpinscher Dog","Basset Hound Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question20
        {   question: "cat4.png",
            correctAnswer: "Bombay Cat",
            answers: ["Selkirk Rex Cat","Burmese Cat","Bombay Cat","Singapura Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question21
        {   question: "cat4.png",
            correctAnswer: "Ragamuffin Cat",
            answers: ["American Bobtail Cat","Siberian Cat","Scottish Fold Cat","Ragamuffin Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
         // question22
         {   question: "cat7.png",
            correctAnswer: "Himalayan Cat",
            answers: ["Himalayan Cat","Russian Blue Cat","Manx Cat","Bombay Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
         // question23
         {   question: "cat21.png",
            correctAnswer: "Burmese Cat",
            answers: ["Ragdoll Cat","Burmese Cat","Ocicat Cat","Cornish Rex Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question24
        {   question: "cat50.png",
            correctAnswer: "Somali Cat",
            answers: ["Somali Cat","Ragamuffin Cat","Manx Cat","Bombay Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question25
        {   question: "dog45.png",
            correctAnswer: "Poodle Dog",
            answers: ["Poodle Dog","Pug Dog","Great Dane Dog","Dalmatian Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question26
        {   question: "dog31.png",
            correctAnswer: "Brittany Dog",
            answers: ["German Shepherd Dog","Brittany Dog","Greyhound Dog","Shih Tzu Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question27
        {   question: "dog43.png",
            correctAnswer: "Maltese Dog",
            answers: ["Maltese Dog","Pug Dog","Great Dane Dog","Briard Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question28
        {   question: "dog30.png",
            correctAnswer: "British Bulldog",
            answers: ["Cocker Spaniel Dog","Chihuahua Dog","British Bulldog","Boston Terrier Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question29
        {   question: "dog40.png",
            correctAnswer: "American Curl Cat",
            answers: ["Japanese Bobtail Cat","American Curl Cat","Norwegian Forest Cat","Russian Blue Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
         // question30
         {   question: "cat36.png",
            correctAnswer: 'Turkish Van Cat',
            answers: ['Turkish Van Cat',"Savannah Cat","Havana Brown Cat","LaPerm Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question31
        {   question: "cat43.png",
            correctAnswer: 'Egyptian Mau Cat',
            answers: ['Cornish Rex Cat',"Egyptian Mau Cat","Bombay Cat","Abyssinian Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question32
        {   question: "cat20.png",
            correctAnswer: 'Devon Rex Cat',
            answers: ['Chartreux Cat',"Ragamuffin Cat","Munchkin Cat","Devon Rex Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question33
        {   question: "cat29.png",
            correctAnswer: 'Pixiebob Cat',
            answers: ['Pixiebob Cat',"Ragdoll Cat","Siberian Cat","Scottish Fold Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question34
        {   question: "cat20.png",
            correctAnswer: 'Scottish Fold Cat',
            answers: ['Cornish Rex Cat',"Birman Cat","Maine Coon Cat","Scottish Fold Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question35
        {   question: "dog17.png",
            correctAnswer: 'Bearded Collie Dog',
            answers: ['Australian Cattle Dog',"Chihuahua Dog","Bearded Collie Dog","Great Dane Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question36
        {   question: "dog34.png",
            correctAnswer: 'Cocker Spaniel Dog',
            answers: ['Cocker Spaniel Dog',"Dalmatian Dog","Boston Terrier Dog","Australian Kelpie Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question37
        {   question: "dog49.png",
            correctAnswer: 'Welsh Corgi Dog',
            answers: ['Dobermann Dog',"Welsh Corgi Dog","Pomeranian Dog","Bearded Collie Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question38
        {   question: "cat9.png",
            correctAnswer: 'Munchkin Cat',
            answers: ['Pixiebob Cat',"Japanese Bobtail Cat","Burmese Cat","Munchkin Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question39
        {   question: "cat30.png",
            correctAnswer: 'Russian Blue Cat',
            answers: ['Russian Blue Cat',"Exotic Shorthair Cat","Selkirk Rex Cat","Turkish Angora Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question40
        {   question: "cat30.png",
            correctAnswer: 'Russian Blue Cat',
            answers: ['Russian Blue Cat',"Exotic Shorthair Cat","Selkirk Rex Cat","Turkish Angora Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question41
        {   question: "dog35.png",
            correctAnswer: 'Dalmatian Dog',
            answers: ['Greyhound Dog',"Dalmatian Dog","Basset Hound Dog","Yorkshire Terrier Dog"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question42
        {   question: "cat27.png",
            correctAnswer: 'Maine Coon Cat',
            answers: ['Maine Coon Cat',"Manx Cat","Japanese Bobtail Cat","LaPerm Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question43
        {   question: "cat19.png",
            correctAnswer: 'Birman Cat',
            answers: ['Oriental Shorthair Cat',"Egyptian Mau Cat","Birman Cat","Ragdoll Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question44
        {   question: "cat32.png",
            correctAnswer: 'Scottish Fold Cat',
            answers: ['Scottish Fold Cat',"Manx Cat","Devon Rex Cat","Himalayan Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question45
        {   question: "cat32.png",
            correctAnswer: 'Scottish Fold Cat',
            answers: ['Scottish Fold Cat',"Manx Cat","Devon Rex Cat","Himalayan Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        // question46
        {   question: "cat42.png",
            correctAnswer: 'Cornish Rex Cat',
            answers: ['Norwegian Forest Cat',"Himalayan Cat","Cornish Rex Cat","Pixiebob Cat"],
            rightAnswer: null,
            //right answer is true if user answered correctly
            index: 0,
            userAnswer: ""},
        
      ],
      loading: true,
      index: 0,
    };
  },
  computed: {
    randomQuestions(){
      let questionList = [];
      let question = {};
      while(questionList.length<5){
        question = this.questions[Math.floor(Math.random() * this.questions.length)]
        if(!questionList.includes(question)){
          questionList.push(question)
        }
      }
      return questionList;
    },
    pluralizeAnswer() {
      return this.correctAnswers === 1 ? "answer" : "answers";
    },
    correctAnswers() {
       let streakCounter = 0;
       this.randomQuestions.forEach(function (question) {
         if (!question.rightAnswer) {
           return;
         } else if (question.rightAnswer === true) {
           streakCounter++;
         }
       });
       return streakCounter;
   },
   currentQuestion() {
        return this.randomQuestions[this.index];
   },
   quizCompleted() {
      /* Check if all questions have been answered */
      let questionsAnswered = 0;
      this.randomQuestions.forEach(function (question) {
        question.rightAnswer !== null ? questionsAnswered++ : null;
      });
      return questionsAnswered === this.randomQuestions.length;
    },
    score() {
        return {
          allQuestions: this.randomQuestions.length,
          answeredQuestions: this.randomQuestions.reduce((count, currentQuestion) => {
            if (currentQuestion.userAnswer) {
              // userAnswer is set when user has answered a question, no matter if right or wrong
              count++;
            }
            return count;
          }, 0),
          correctlyAnsweredQuestions: this.randomQuestions.reduce(
            (count, currentQuestion) => {
              if (currentQuestion.rightAnswer) {
                // rightAnswer is true, if user answered correctly
                count++;
              }
              return count;
            },
            0
          ),
        };
    }
  },
  methods: {
    getImgUrl(pic){
      return require('../assets/' + pic)
    },
    handleClick(e) {
        this.randomQuestions[this.index].userAnswer = e.target.value;      
      e.target.classList.add("clicked");
      let allButtons = document.querySelectorAll(`[index="${this.index}"]`);
      for (let i = 0; i < allButtons.length; i++) {
        if (allButtons[i] === e.target) continue;
        allButtons[i].setAttribute("disabled", "");
      }
      this.checkCorrectAnswer(e, this.index);
    },
    
    checkCorrectAnswer(e, index) {
      let question = this.randomQuestions[index];
    //   if (question.userAnswer) {
        if (this.index < this.randomQuestions.length - 1) {
          setTimeout(
            function () {
              this.index += 1;
              this.message="";
            }.bind(this),
            3000
          );
        }
        if (question.userAnswer === question.correctAnswer) {
          /* Set class on Button if user answered right, to celebrate right answer with animation joyfulButton */
          this.message="Correct, Good job!"
          e.target.classList.add("rightAnswer");
          /* Set rightAnswer on question to true, computed property can track a streak out of 5 questions */
          this.randomQuestions[index].rightAnswer = true;
        } else {
          /* Mark users answer as wrong answer */
          this.message="Incorrect :("
          e.target.classList.add("wrongAnswer");
          this.randomQuestions[index].rightAnswer = false;

          /* Show right Answer */
          let correctAnswer = question.correctAnswer;
          let allButtons = document.querySelectorAll(`[index="${index}"]`);
          allButtons.forEach(element => {
            if(element.value==correctAnswer){
              element.classList.add("showRightAnswer");
            }
          });
        // }
      }
    },
  },
  watch: {
    quizCompleted(completed) {
      completed &&
        setTimeout(() => {
          this.$emit("quiz-completed", this.score);
        }, 3000);
    },
  },
};
</script>

<style scoped lang="scss">
button {
  padding: 1rem;
  margin: 0.5rem;
  width: 35%;

  &:hover:enabled {
    transform: scale(1.02);
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -1px rgba(0, 0, 0, 0.2);
  }
  &:active:enabled {
    transform: scale(1.05);
  }
  &.rightAnswer {
    animation: flashButton;
    animation-duration: 700ms;
    animation-delay: 200ms;
    animation-iteration-count: 3;
    animation-timing-function: ease-in-out;
    color: black;
    background: linear-gradient(
      210deg,
      rgba(0, 178, 72, 0.25),
      rgba(0, 178, 72, 0.5)
    );
  }
  &.wrongAnswer {
    color: black;
    background: linear-gradient(
      210deg,
      rgba(245, 0, 87, 0.25),
      rgba(245, 0, 87, 0.5)
    );
  }
  &.showRightAnswer {
    animation: flashButton;
    animation-duration: 700ms;
    animation-delay: 200ms;
    animation-iteration-count: 2;
    animation-timing-function: ease-in-out;
    color: black;
    background: linear-gradient(
      210deg,
      rgba(0, 178, 72, 0.25),
      rgba(0, 178, 72, 0.5)
    );
  }
}
@keyframes flashButton {
  0% {
    opacity: 1;
    transform: scale(1.01);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
