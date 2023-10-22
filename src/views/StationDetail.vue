<template>
  <Menu/>
  <v-container>
  <v-row justify="center">
    <v-col style="height:300px; width:95%">
      <l-map ref="map" v-model:zoom="zoom" :center="[7.76694, -72.225]" :useGlobalLeaflet="false">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
      </l-map>
    </v-col>
  </v-row>
    <v-row>
      <v-col>
        <v-card class="info-card">
          <v-card-title class="d-flex justify-center">
            <v-icon icon="mdi-timer"></v-icon>
          </v-card-title>
          <v-card-subtitle class="d-flex justify-center font-weight-medium">
            Tiempo Estimado
          </v-card-subtitle>
          <v-card-item class="d-flex justify-center text-h4 font-weight-bold">
            3h
          </v-card-item>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="info-card">
          <v-card-title class="d-flex justify-center">
            <v-icon icon="mdi-timer"></v-icon>
          </v-card-title>
          <v-card-subtitle class="d-flex justify-center font-weight-medium">
            Vehículos en fila
          </v-card-subtitle>
          <v-card-item class="d-flex justify-center text-h4 font-weight-bold">
            100
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="info-card">
          <v-card-title class="d-flex justify-center">
            <v-icon icon="mdi-car"></v-icon>
          </v-card-title>
          <v-card-subtitle class="d-flex justify-center font-weight-medium">
            Última vez actualizada
          </v-card-subtitle>
          <v-card-item class="d-flex justify-center text-h4 font-weight-bold">
            3h 30 min
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="info-card">
          <v-card-title class="d-flex flex-column justify-center align-center">
            <div class="text-body-1 font-weight-regular">¿Estás en la Estación de Servicio?</div>
            <div class="text-body-1 font-weight-bold mt-2">Coméntanos cuántos autos hay por delante</div>
          </v-card-title>
          <v-card-subtitle class="d-flex justify-center font-weight-bold">
          </v-card-subtitle>
          <v-card-item class="d-flex justify-center">
            <v-btn color="primary" class="mx-auto" rounded="xl" size="large">Estoy en la estación</v-btn>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import Menu from '@/components/Menu.vue'

export default {
  name: 'StationDetail',
  data: () => ({
    zoom: 11
  }),
  components: {
    LMap,
    LTileLayer,
  },
}
</script>
<style scoped>
.info-card {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}
</style>
