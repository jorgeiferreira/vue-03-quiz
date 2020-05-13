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
      <div class="questions" v-for="(question,qindex) in quiz.questions" :key="question.id">
        <div class="question" v-show="question.visible===true">
          <h3 class="text">{{qindex +1}}{{" - "}}{{question.text}}</h3>
          <div class="options" v-for="(option) in question.options" :key="option.id">
            <div v-if="question.type=='multi'" class="option">
              <label :for="option.id">
                <input
                  type="checkbox"
                  :name="option.id"
                  :id="option.id"
                  v-model="question.answerByUser"
                  :value="option.id"
                />
                {{option.value}}
              </label>
            </div>
            <div v-if="question.type=='single'" class="option">
              <label :for="option.id">
                <input
                  type="radio"
                  :name="question.id"
                  :id="option.id"
                  v-model="question.answerByUser"
                  :value="option.id"
                />
                {{option.value}}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-question-button">
        <button v-show="showPreviousButton" @click="goToPreviousQuestion">Previous question</button>
        <button v-show="showNextBotton" @click="goToNextQuestion">Next question</button>
        <button>Finish</button>
      </div>
    </div>
  </div>
</template>

<script>
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
        if (question.type == "single") {
          question.answerByUser = [];
        }
        if (question.type == "multi") {
          question.answerByUser = [];
        }
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