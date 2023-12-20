<template>
  <div class="about">
    <h2>About</h2>
  </div>
  <div class="row" v-if="about">
    <p v-for="aboutMe in about" :key="aboutMe.id">
      {{ aboutMe }}
    </p>

  </div>
</template>
