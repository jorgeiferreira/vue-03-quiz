import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quizList: [
      {
        id: "ab51be23-2f7e-4366-beca-0b54fe89bc3c",
        tags: "js, vuejs, vuex",
        title: "VueJs Basic Quiz",
        description: "Test your vue js knowledge",
        minScore: 70,
        questions: [
          {
            id: "d36aa176-a242-491e-8dd1-79301ff7f37b",
            text: "Who created vue?",
            type: "Single",
            allowNegativeScore: false,
            correctAnswers: ["bf36c632-ec93-40cc-9c45-b805676980c6"],
            options: [
              { id: "5aba5db3-b066-47cf-ae1e-48f48e758e1b", value: "Bill Gate" },
              { id: "83abbca2-1fc7-46da-969c-5a66512627bf", value: "Jon Skeet" },
              { id: "bf36c632-ec93-40cc-9c45-b805676980c6", value: "Evan You" },
              { id: "9ced4e3e-d97a-4742-a2ac-a211694108da", value: "Chuck Norris" }
            ]
          },

          {
            id: "4436e025-c945-43a4-a388-171fe195afcb",
            text: "Why use Vuejs?",
            type: "Multi",
            allowNegativeScore: true,
            correctAnswers: ["789a3fe8-3733-409c-b87c-e664ffa021f4", "7c17eb94-fc01-400d-9549-114875550d0f", "b33932cc-2a96-4c5a-a255-805f58b71c81", "843e60ff-0e7c-4685-93b8-680a11a95c2c", "101e83db-e0ad-4b69-9888-b76fa869fa12"],
            options: [
              { id: "789a3fe8-3733-409c-b87c-e664ffa021f4", value: "Quick to learn" },
              { id: "7c17eb94-fc01-400d-9549-114875550d0f", value: "Reactive data binding" },
              { id: "b33932cc-2a96-4c5a-a255-805f58b71c81", value: "Components" },
              { id: "843e60ff-0e7c-4685-93b8-680a11a95c2c", value: "Good Documentation" },
              { id: "101e83db-e0ad-4b69-9888-b76fa869fa12", value: "Growing Comunity" },
            ]
          },

          {
            id: "507e65ea-22f4-4642-88c4-30034384d374",
            text: "Which are recomended Official plugins?",
            type: "Multi",
            allowNegativeScore: true,
            correctAnswers: ["a666acbd-88b0-4c14-a095-d2951d14736f", "05eb175b-a346-4c7b-bdf4-ad68c060cd2e", "83c0652e-0127-4197-8936-da1614c444d5", "9ced4e3e-d97a-4742-a2ac-a211694108da"],
            options: [
              { id: "a666acbd-88b0-4c14-a095-d2951d14736f", value: "Vue Router" },
              { id: "05eb175b-a346-4c7b-bdf4-ad68c060cd2e", value: "Vuex" },
              { id: "83c0652e-0127-4197-8936-da1614c444d5", value: "Dev Tools" },
              { id: "9ced4e3e-d97a-4742-a2ac-a211694108da", value: "Vue-cli" },
              { id: "3cfc3188-e957-4eff-9d3c-ad0bcd044387", value: "jQuery" },
            ]
          },

          {
            id: "556b3b1e-7a41-4d15-8021-78a4f6c6caa0",
            text: "Which of the following is not a vuejs directives?",
            type: "Single",
            allowNegativeScore: false,
            correctAnswers: ["6012c287-b7d5-47e2-a3d5-c10cb844ceb0"],
            options: [
              { id: "6012c287-b7d5-47e2-a3d5-c10cb844ceb0", value: "v-code" },
              { id: "2903fadc-3a38-48d3-a800-bed8657cc1e7", value: "v-show" },
              { id: "4329b4d3-62be-4668-9308-1eca98d7732a", value: "v-else" },
              { id: "03994e0e-ceab-4423-9436-aefa22ca582e", value: "v-bind" }
            ]
          },
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getQuizList: (state) => {
      return state.quizList
    },
    getQuizById: (state) => (id) => {
      return state.quizList.filter(quiz => quiz.id == id).shift();
    }
  }
})
