<template>
  <div class="quiz-view">
    <div>
      <h2 class="quiz-title">{{quiz.title}}</h2>
      <h3>Total de preguntas: {{totalQuestions}}</h3>
    </div>
    <div v-show="quizStarted===false" class="nav-question-button">
      <button @click="startQuiz">Start</button>
    </div>
    <div v-show="quizStarted===true">
      <RenderQuestions :quiz="quiz"></RenderQuestions>
      <div class="nav-question-button">
        <button v-show="showPreviousButton" @click="goToPreviousQuestion">Previous question</button>
        <button v-show="showNextBotton" @click="goToNextQuestion">Next question</button>
        <button>Finish</button>
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
      this.quiz.questions[this.currentQuestion].visible = false;
      this.currentQuestion = this.currentQuestion - 1;
      this.quiz.questions[this.currentQuestion].visible = true;
    },
    goToNextQuestion: function() {
      this.quiz.questions[this.currentQuestion].visible = false;
      this.currentQuestion = this.currentQuestion + 1;
      this.quiz.questions[this.currentQuestion].visible = true;
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
.nav-question-button button {
  height: 30px;
  border-radius: 10px;
  font-size: medium;
  margin-right: 10px;
  margin-top: 20px;
  border-color: lightblue;
}
</style>