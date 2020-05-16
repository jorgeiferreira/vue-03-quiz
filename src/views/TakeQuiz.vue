<template>
  <div class="quiz-view">
    <div>
      <h2 class="quiz-title">{{quiz.title}}</h2>
      <h3>Total Questions: {{totalQuestions}}</h3>
    </div>
    <div :class="result" v-show="reviewModeOn">
      <h3>Score: {{score}}</h3>
      <h3>Result: {{result}}</h3>
    </div>
    <div v-show="quizStarted===false" class="nav-question-button">
      <button @click="startQuiz">Start</button>
    </div>
    <div v-show="quizStarted===true">
      <RenderQuestions :questions="quiz.questions" :currentQuestion="currentQuestion"></RenderQuestions>
      <div class="nav-question-button">
        <button :disabled="disablePreviousButton" @click="goToPreviousQuestion">Previous question</button>
        <button :disabled="disableNextButton" @click="goToNextQuestion">Next question</button>
        <button @click="finishQuiz">Finish</button>
      </div>
    </div>
  </div>
</template>

<script>
import RenderQuestions from "@/components/RenderQuestions.vue";
export default {
  components: {
    RenderQuestions
  },
  data() {
    return {
      quiz: {},
      quizStarted: false,
      currentQuestion: 0,
      totalQuestions: 0,
      score: 0,
      result: "",
      reviewModeOn: false
    };
  },
  mounted: function() {
    var quizId = this.$route.params.id;
    var quiz = this.$store.getters.getQuizById(quizId);
    this.totalQuestions = quiz.questions.length;
    this.quiz = quiz;
  },
  computed: {
    disablePreviousButton: function() {
      return this.currentQuestion <= 0;
    },
    disableNextButton: function() {
      return this.currentQuestion >= this.totalQuestions - 1;
    }
  },
  methods: {
    startQuiz: function() {
      this.quizStarted = true;
    },
    goToPreviousQuestion: function() {
      this.currentQuestion = this.currentQuestion - 1;
    },
    goToNextQuestion: function() {
      this.currentQuestion = this.currentQuestion + 1;
    },
    finishQuiz: function() {
      let pointPerQuestion = 100 / this.totalQuestions;
      let finalScore = 0;
      this.quiz.questions.forEach(question => {
        let pointPerCorrectAnswer =
          pointPerQuestion / question.correctAnswers.length;
        let questionScore = 0;
        if (!question.answerByUser) return;
        question.answerByUser.forEach(userAnswerId => {
          var answerIsCorrrect =
            question.correctAnswers.findIndex(
              correctAnswerId => correctAnswerId === userAnswerId
            ) > -1;
          if (answerIsCorrrect) {
            questionScore += pointPerCorrectAnswer;
          } else if (question.allowNegativeScore === true) {
            questionScore -= pointPerCorrectAnswer;
          }
        });
        question.score = questionScore;
        finalScore += questionScore;
      });
      this.score = finalScore;
      this.result = finalScore < this.quiz.minScore ? "Failed" : "Passed";
      this.reviewModeOn = true;
    }
  }
};
</script>

<style scoped>
.quiz-view {
  width: 60%;
  display: inline-block;
  text-align: left;
}
.quiz-view .Failed {
  color: red;
}

.quiz-view .Passed {
  color: green;
}
.nav-question-button button {
  height: 30px;
  border-radius: 10px;
  font-size: medium;
  margin-right: 10px;
  margin-top: 20px;
  border-color: lightblue;
}
</style>