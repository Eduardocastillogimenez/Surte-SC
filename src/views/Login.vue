<template>
  <v-sheet width="330" class="mx-auto">
    <v-form fast-fail @submit.prevent="submitForm">
      <h1 class="text-center mb-11">¡Iniciar Sesión!</h1>

      <v-text-field
        class="mb-2"
        v-model="email"
        label="Correo electrónico"
        :rules="emailRules"
        clearable
        variant="outlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        label="Password"
        type="password"
        :rules="passwordRules"
        required
        clearable
        variant="outlined"
      ></v-text-field>

      <v-btn
        block
        class="mt-6"
        color="yellow-accent-4"
        rounded="lg"
        size="large"
        @click="goToRegister"
      >
        Ir a registro
      </v-btn>

      <v-btn
        type="submit"
        block
        class="mt-6"
        color="blue-accent-3"
        rounded="lg"
        size="large"
      >
        Inicio de sesion
      </v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { loginUser } from '@/services/authServices'

  export default {
    data: () => ({
      email: '',
      emailRules: [
        value => !!value || 'El correo electrónico es requerido.',
        value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Ingresa un correo electrónico válido.',
      ],
      password: '',
      passwordRules: [
        value => !!value || 'La contraseña es requerida.',
        value => (value && value.length >= 8) || 'La contraseña debe tener al menos 8 caracteres.',
      ]
    }),
  computed: {
  },
  methods: {
    async submitForm(e) {
      const { data, status } = await loginUser({
        email: this.email,
        password: this.password
      })
      this.$router.push({ path: '/app' })
    },
    goToRegister() {
      this.$router.push({ path: '/signIn' })
    }
  },
}
</script>
