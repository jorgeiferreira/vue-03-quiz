<template>
  <div class="options">
    <div class="option" v-for="(option) in question.options" :key="option.id">
      <label :for="option.id">
        <input
          type="checkbox"
          :name="option.id"
          :id="option.id"
          v-model="answer"
          :value="option.id"
        />
        {{option.value}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  data() {
    return {
      answer: []
    };
  },
  watch: {
    answer(newValue) {
      this.question.answerByUser = newValue.slice();
    }
  }
};
</script>

<style scoped>
</style>