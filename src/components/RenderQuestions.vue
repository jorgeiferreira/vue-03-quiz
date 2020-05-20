
<template>
  <div class="questions">
    <transition-group
      name="list"
      class="question-transitions"
      :enter-active-class="enterClass"
      :leave-active-class="leaveClass"
    >
      <div
        class="question"
        v-for="(question,qindex) in questions"
        :key="question.id"
        v-show="currentQuestion==qindex"
      >
        <h3 class="text">{{qindex+1}}{{" - "}}{{question.text}}</h3>
        <component :is="'RenderOption'+question.type" :question="question"></component>
      </div>
    </transition-group>
  </div>
</template>

<script>
import RenderOptionMulti from "@/components/RenderOptionMulti";
import RenderOptionSingle from "@/components/RenderOptionSingle";
export default {
  props: ["questions", "currentQuestion", "enterClass", "leaveClass"],
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
.question-transitions {
  display: inline-flex;
  width: max-content;
}
</style>