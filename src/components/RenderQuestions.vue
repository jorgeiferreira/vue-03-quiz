<template>
  <div>
    <div class="questions" v-for="(question,qindex) in quiz.questions" :key="question.id">
      <div class="question" v-show="question.visible===true">
        <h3 class="text">{{qindex+1}}{{" - "}}{{question.text}}</h3>
        <component :is="'RenderOption'+question.type" :question="question"></component>
      </div>
    </div>
  </div>
</template>

<script>
import RenderOptionMulti from "@/components/RenderOptionMulti";
import RenderOptionSingle from "@/components/RenderOptionSingle";
export default {
  props: ["quiz"],
  components: {
    RenderOptionSingle,
    RenderOptionMulti
  }
};
</script>

<style scoped>
</style>