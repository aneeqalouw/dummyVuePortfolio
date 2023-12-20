<template>
  <div class="home">
    <h1>Home</h1>
  </div>
  <div class="row" v-if="about">
    <p v-for="aboutMe in about" :key="aboutMe.id">
      {{ aboutMe }}
    </p>

  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
    
  },
  computed: {
    about(){
      return this.$store.state.about
    }

  },
  mounted() {
    this.$store.dispatch('fetchAbout')
  }
}
</script>
