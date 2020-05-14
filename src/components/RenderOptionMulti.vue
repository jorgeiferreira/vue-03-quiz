<template>
  <div>
    <div class="options" v-for="(option) in question.options" :key="option.id">
      <div class="option">
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
    </div>
  </div>
</template>

<script>
export default {
  props: ["question"],
  mounted() {
    this.question.answerByUser = [];
  }
};
</script>

<style scoped>
</style>