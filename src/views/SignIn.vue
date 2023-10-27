<template>
  <v-sheet width="330" class="mx-auto">
    <v-form fast-fail ref="register_form" @submit.prevent="submitForm">
        <h1 class="text-center mb-11">¡Completa tu registro!</h1>
        <v-text-field
          class="mb-2"
          v-model="userName"
          label="Nombre de usuario"
          :rules="userNameRules"
          clearable
          variant="outlined"
        ></v-text-field>

        <v-text-field
          class="mb-2"
          v-model="email"
          label="Correo electronico"
          :rules="emailRules"
          clearable
          variant="outlined"
        ></v-text-field>

        <v-text-field
          class="mb-2"
          v-model="password"
          label="Contraseña"
          type="password"
          :rules="passwordRules"
          required
          clearable
          variant="outlined"
        ></v-text-field>

        <v-text-field
          class="mb-2"
          v-model="confirmPassword"
          label="Confirmar contraseña"
          type="password"
          :rules="confirmPasswordRules"
          required
          clearable
          variant="outlined"
        ></v-text-field>

        <v-btn
          type="submit"
          block
          class="mt-2"
          color="blue-accent-3"
          rounded="lg"
          size="large"
        >
          Registro
        </v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import { registerUser } from '@/services/authServices'

export default {
  data: () => ({
    userName: '',
    userNameRules: [
      value => (value && value.length > 3) || 'El nombre debe tener al menos 3 caracteres.',
    ],
    email: '',
    emailRules: [
      value => !!value || 'El correo electrónico es requerido.',
      value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Ingresa un correo electrónico válido.',
    ],
    password: '',
    confirmPassword: '',
    passwordRules: [
      value => !!value || 'La contraseña es requerida.',
      value => (value && value.length >= 8) || 'La contraseña debe tener al menos 8 caracteres.',
    ]
  }),
  computed: {
    confirmPasswordRules() {
      return [
        value => !!value || 'Por favor, confirma tu contraseña.',
        value => (value === this.password) || 'Las contraseñas no coinciden.'
      ];
    },
  },
  methods: {
    async submitForm() {
      const { data, status } = await registerUser({
        username: this.userName,
        email: this.email,
        password: this.password,
      })
      if(status === 201) {
        this.$toast.success('Usuario registrado con éxito')
        this.$router.push({ name: 'Login' })
      }
    },
  },
}
</script>
