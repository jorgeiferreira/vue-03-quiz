<template>
  <div>
    <div class="questions" v-for="(question,qindex) in questions" :key="question.id">
      <div class="question" v-show="currentQuestion==qindex">
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
  props: ["questions", "currentQuestion"],
  components: {
    RenderOptionSingle,
    RenderOptionMulti
  }
};
</script>

<style scoped>
</style>