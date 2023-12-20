import { createStore } from 'vuex'
const dataUrl = 'https://aneeqalouw.github.io/dummyVuePortfolioData/data/'
export default createStore({
  state: {
    about: null,
    education: null,
    skills: null,
    projects:  null,
    testimonials: null,
  },
  getters: {
  },
  mutations: {
    setAbout(state, value){
      state.about = value
    },
    setEducation(state, value){
      state.education = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setProjects(state, value){
      state.projects = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
  },
  actions: {
    async fetchAbout(context){
      let result = await fetch(dataUrl)
      let {about} = await result.json()
      context.commit('setAbout', about)
    }
  },
  modules: {
  }
})
