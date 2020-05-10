import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quizList: [
      {
        id: 1,
        tags: "js, vuejs, vuex",
        title: "VueJs Basic Quiz",
        description: "Test your vue js knowledge",
        minScore: 80,
        questions: [
          { id: 1, text: "What is vuejs?", type: "single", options: ["C# library", "js library", "movie", "place"], answers: [1] },
          { id: 2, text: "What is key in vuejs?", type: "multi", options: ["option 1", "option 2", "option 3", "option 4"], answer: [2, 3] },
          { id: 3, text: "What is key in vuejs? 3", type: "multi", options: ["option 1", "option 2", "option 3", "option 4"], answer: [2, 3] }
        ]
      },
      {
        id: 2,
        tags: "js, vuejs, vuex",
        title: "VueJs Intermedia Quiz",
        description: "Test your vue js knowledge",
        minScore: 80,
        questions: [
          { id: 1, text: "What is vuejs? 2", type: "single", options: ["C# library", "js library", "movie", "place"], answers: [1] },
          { id: 2, text: "What is key in vuejs? 2", type: "multi", options: ["option 1", "option 2", "option 3", "option 4"], answer: [2, 3] }
        ]
      },
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
