<template>
  <div class="home">
    <h2>Test your knowledge</h2>
    <h4>Take one of the following quiz</h4>
    <ShowQuizList />
  </div>
</template>

<script>
// @ is an alias to /src
import ShowQuizList from "@/components/ShowQuizList.vue";

export default {
  name: "Home",
  components: {
    ShowQuizList
  }
};
</script>
<style scroped>
.home {
  width: 60%;
  display: inline-block;
  text-align: left;
}
</style>
