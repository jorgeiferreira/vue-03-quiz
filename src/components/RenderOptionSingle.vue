<template>
  <div>
    <div class="options" v-for="(option) in question.options" :key="option.id">
      <div class="option">
        <label :for="option.id">
          <input
            type="radio"
            :name="question.id"
            :id="option.id"
            v-model="answer"
            :value="option.id"
          />
          {{option.value}}
        </label>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ["question"],
  //need to create answer data property and use watch to update question.asnwerByUser
  //the only way I found to update answerByUser realtime, otherwise it will be update when rendering the next question
  //probably because is not using v-model on the dynamic component.
  data() {
    return {
      answer: ""
    };
  },
  watch: {
    answer(newValue) {
      this.question.answerByUser = [newValue];
    }
  }
};
</script>

<style scoped>
</style>