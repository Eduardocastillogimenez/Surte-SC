<template>
  <v-app-bar flat class="light-blue-lighten-5" color="blue-accent-3">
    <v-app-bar-title>
      <div class="d-flex align-center">
        <img src="@/assets/logo.png" class="mr-2">
        Surte Sc
      </div>
    </v-app-bar-title>

    <v-row justify="end" no-gutters class="d-sm-flex d-none">
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
    
    <v-btn
      class="d-sm-none"
      color="light-blue-lighten-5"
      @click.stop="drawer = !drawer"
    >
      <v-icon>mdi-format-align-justify</v-icon>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
  >
    <v-list-item
      prepend-avatar="@/assets/logo.png"
      title="Surte Sc"
    ></v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        v-for="link in links"
        :key="link"
        :value="link"
        :href="getLinkUrl(link)"
      >
        {{ link }}
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'Mi ubicacion',
        'Cerrar sesion',
      ],
      drawer: null,
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
