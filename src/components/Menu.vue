<template>
  <v-app-bar flat class="light-blue-lighten-5" color="blue-accent-3">
    <v-app-bar-title>
      <div class="d-flex align-center">
        <img src="src/assets/logo.png" class="mr-2">
        Surte Sc
      </div>
    </v-app-bar-title>

    <v-row justify="end" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
        :href="getLinkUrl(link)"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-app-bar>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Mi ubicacion',
        'Cerrar sesion',
      ],
    }),
    methods: {
        getLinkUrl(link) {
            if (link === 'Mi ubicacion') {
                return '/miUbicacion';
            } else if (link === 'Cerrar sesion') {
                return '/cerrarSesion';
            } else {
                return '/';
            }
        },
    },
  }
</script>

<style>
.img_menu{
    width: 10px;
    height: 50px;
}
</style>
