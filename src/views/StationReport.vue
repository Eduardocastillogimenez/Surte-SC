<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          readonly
          model-value="Estación de Servicio Los Augustinos"
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
            3h 30 min
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <div class="text-body-1 font-weight-regular">Permitenos estimar mejor el tiempo restante</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <v-btn color="amber-lighten-1" class="mx-auto" rounded="xl" size="large">¡Danos acceso a tu ubicación!</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <v-btn color="primary" class="mx-auto" rounded="xl" size="large">Enviar</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'StationReport',
  data: () => ({
    carCounter: 100
  }),
  components: {
  },
  methods: {
    addCar(carNumber) {
      this.carCounter += carNumber
    },
    removeCars(carNumber) {
      this.carCounter -= carNumber
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
