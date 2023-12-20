<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/">
        <img src="https://drive.google.com/uc?id=1k3W1PyqkbquVY6yArubVyJHCxKRyanV5" alt="logo" class="img-fluid w-25">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/" class="nav-link active">
            Home
        </router-link>
        <router-link to="/about" class="nav-link active">
            About
        </router-link>
        <router-link to="/resume" class="nav-link active">
            Resume
        </router-link>
        <router-link to="/projects" class="nav-link active">
            Projects
        </router-link>
        <router-link to="/testimonials" class="nav-link active">
            Testimonials
        </router-link>
        <router-link to="/contact" class="nav-link active">
            Contact me
        </router-link>
      </div>
    </div>
  </div>
</nav>
</template>


<script>
    export default {
        
        
    }
</script>

<style scoped>

</style>