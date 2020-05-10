<template>
  <div class="home">
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
