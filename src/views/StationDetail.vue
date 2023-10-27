<template>
  <v-container>
  <v-row justify="left" class="my-3">
    <span class="font-weight-bold">Home</span> <v-icon icon="mdi-chevron-right"></v-icon> {{ name }}
  </v-row>
  <v-row justify="center">
    <v-col style="height:300px; width:95%">
      <l-map ref="map" v-model:zoom="zoom" :center="[7.76694, -72.225]" :useGlobalLeaflet="false">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker v-if="coordinates !== undefined" :lat-lng="coordinates">
          <l-tooltip :options="{ permanent: true, interactive: true }">
            <div>
              {{ name }}
            </div>
          </l-tooltip>
        </l-marker>
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
            {{ lastUpdate.approxTime ?? '-' }}
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
            {{ lastUpdate.approxVehicle ?? '-' }}
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
            {{ lastUpdate.date ?? '-' }}
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
            <v-btn color="primary" class="mx-auto" rounded="xl" size="large" @click="goToStationReport">Estoy en la estación</v-btn>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import moment from 'moment'
import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
import Menu from '@/components/Menu.vue'
import { getStation } from '@/services/stationServices'
import { minutesToHours } from '@/utils/utils'

export default {
  name: 'StationDetail',
  data: () => ({
    zoom: 11,
    id: undefined,
    diesel: undefined,
    image_path: undefined,
    coordinates: undefined,
    name: undefined,
    lastUpdate: {
      approxVehicle: undefined,
      approxTime: undefined,
      date: undefined
    }
  }),
  components: {
    LTooltip,
    LMap,
    LTileLayer,
    LMarker,
  },
  async mounted() {
    await this.loadData()
  },
  methods: {
    async loadData() {
      this.id = this.$route.params.id
      const { data, status } = await getStation(this.id)
      this.diesel = data.diesel
      this.image_path = data.image_path
      this.coordinates = latLng(data.latitude, data.longitude),
      this.name = data.name
      if(data.latest_report !== undefined && data.latest_report !== null) {
        this.lastUpdate.approxVehicle = data.latest_report.approx_vehicle
        this.lastUpdate.approxTime = minutesToHours(data.estimated_time)
        this.lastUpdate.date = moment(`${data.latest_report.updated_at}Z`).fromNow();
      }
    },
    goToStationReport() {
      this.$router.push({
        name: 'StationReport',
        params: { id: this.id },
        query: {
          name: this.name
        }
      })
    }
  }
}
</script>
<style scoped>
.info-card {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
}
</style>
