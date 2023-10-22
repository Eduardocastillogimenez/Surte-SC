<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="start" no-gutters>
        <v-img
            cover
            class="img_menu"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        ></v-img>
        Surte SC
    </v-row>

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
  </v-footer>
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