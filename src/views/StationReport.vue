<template>
  <v-container>
    <v-row justify="left" class="my-3">
      <span class="font-weight-bold">Home</span> <v-icon icon="mdi-chevron-right"></v-icon> Añadir información
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          readonly
          :model-value="name"
          label="Estación de Servicio"
          variant="outlined"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-end pr-0">
        <v-btn
          color="primary"
          class="minus-button"
          rounded="0"
          size="large"
          @click="removeCars(1)">-</v-btn>
      </v-col>
      <v-col class="px-0">
        <v-card class="info-card">
          <v-card-title class="d-flex justify-center">
            <v-icon icon="mdi-car"></v-icon>
          </v-card-title>
          <v-card-subtitle class="d-flex justify-center font-weight-medium">
            Vehiculos en fila
          </v-card-subtitle>
          <v-card-item class="d-flex justify-center text-h4 font-weight-bold">
            {{ carCounter }}
          </v-card-item>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-start pl-0">
        <v-btn
          color="primary"
          class="plus-button"
          rounded="0"
          size="large"
          @click="addCar(1)"
        >+</v-btn>
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
            {{ getEstimatedTime }}
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <v-btn color="primary" class="mx-auto" rounded="xl" size="large" @click="updateReport">Enviar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createReport } from '@/services/stationServices'
import Menu from '@/components/Menu.vue'
import { minutesToHours } from '@/utils/utils'

export default {
  name: 'StationReport',
  data: () => ({
    carCounter: 100,
    id: undefined,
    name: ''
  }),
  components: {
  },
  mounted() {
    this.id = this.$route.params.id
    this.name = this.$route.query.name;
  },
  computed: {
    getEstimatedTime() {
      return minutesToHours( this.carCounter * 3)
    }
  },
  methods: {
    addCar(carNumber) {
      this.carCounter += carNumber
    },
    removeCars(carNumber) {
      this.carCounter -= carNumber
    },
    async updateReport() {
      const { data, status } = await createReport({
        approx_vehicle: this.carCounter,
        vehicle_type: "CARRO",
        type: 'QUEUED',
        gas_stations_id: this.id,
        user_id: 2
      })
      if(status === 200) {
        this.$toast.success('Reporte registrado con éxito')
        this.$router.push({ name: 'StationDetail', params: { id: this.id } })
      }
    }
  },
}
</script>
<style scoped>
.info-card {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 10px !important;
}

.plus-button {
  border-radius: 0 20px 20px 0 !important;
}

.minus-button {
  border-radius: 20px 0 0 20px !important;
}

.plus-button, .minus-button {
  height: 100%;
}
</style>
