<template>
  <div>
    <ul v-for="quiz in getQuizList" :key="quiz.id">
      <router-link :to="{name:'TakeQuiz', params:{id:quiz.id}}">{{quiz.title}}</router-link>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getQuizList"])
  }
};
</script>

<style scoped>
</style>