<template>
  <div class="quiz-view">
    <div>
      <h2 class="quiz-title">{{quiz.title}}</h2>
    </div>
    <div v-show="quizStarted===false">
      <button @click="startQuiz">Start</button>
    </div>
    <div v-show="quizStarted===true">
      <div v-for="question in quiz.questions" :key="question.id">
        <div v-show="question.visible===true">
          <h3>{{question.text}}</h3>
          <ul v-for="(option,index) in question.options" :key="index">
            <li>{{option}}</li>
          </ul>
        </div>
      </div>
      <div class="nav-question-button">
        <button v-show="showPreviousButton" @click="goToPreviousQuestion">Previous question</button>
        <button v-show="showNextBotton" @click="goToNextQuestion">Next question</button>
        <button>I Give Up</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      quiz: {},
      quizStarted: false,
      currentQuestion: 0,
      totalQuestions: 0
    };
  },
  mounted: function() {
    var quizId = this.$route.params.id;
    var quiz = this.$store.getters.getQuizById(quizId);
    this.totalQuestions = quiz.questions.length;
    if (this.totalQuestions > 0) {
      quiz.questions.forEach(question => {
        question.visible = false;
      });
      quiz.questions[0].visible = true;
    }
    this.quiz = quiz;
  },
  computed: {
    showPreviousButton: function() {
      return this.currentQuestion > 0;
    },
    showNextBotton: function() {
      return this.currentQuestion < this.totalQuestions - 1;
    }
  },
  methods: {
    startQuiz: function() {
      this.quizStarted = true;
    },
    goToPreviousQuestion: function() {
      if (!this.quiz) return;
      this.quiz.questions[this.currentQuestion].visible = false;
      this.currentQuestion = this.currentQuestion - 1;
      this.quiz.questions[this.currentQuestion].visible = true;
    },
    goToNextQuestion: function() {
      if (!this.quiz) return;
      this.quiz.questions[this.currentQuestion].visible = false;
      this.currentQuestion = this.currentQuestion + 1;
      this.quiz.questions[this.currentQuestion].visible = true;
    }
  }
};
</script>

<style scoped>
</style>