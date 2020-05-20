<template>
  <div class="questions">
    <div
      class="question"
      v-for="(question,qindex) in questions"
      :key="question.id"
      v-show="currentQuestion==qindex"
    >
      <h3 class="text">{{qindex+1}}{{" - "}}{{question.text}}</h3>
      <component :is="'RenderOption'+question.type" :question="question"></component>
    </div>
  </div>
</template>

<script>
import RenderOptionMulti from "@/components/RenderOptionMulti";
import RenderOptionSingle from "@/components/RenderOptionSingle";
export default {
  props: ["questions", "currentQuestion"],
  components: {
    RenderOptionSingle,
    RenderOptionMulti
  }
};
</script>

<style scoped>
.question {
  display: inline-grid;
}
</style>