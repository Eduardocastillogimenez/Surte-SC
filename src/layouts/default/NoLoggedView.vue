<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column justify-center align-center no-login">
        <img src="src/assets/logo.svg" class="no-login__main-logo my-4">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
</script>

<style scoped>
.no-login {
  height: 100vh;
}
.no-login__main-logo {
  @apply mx-auto;
  width: 100px;
  height: 100px;
}
</style>
