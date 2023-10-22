<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="submitForm">
        <h1> Completa tu registro </h1>
        <v-text-field
            v-model="firstName"
            label="Nombre"
            :rules="firstNameRules"
            clearable
            variant="outlined"
        ></v-text-field>

        <v-text-field
            v-model="email"
            label="Correo electronico"
            :rules="emailRules"
            clearable
            variant="outlined"
        ></v-text-field>

        <v-text-field
        v-model="password"
        label="Contraseña"
        type="password"
        :rules="passwordRules"
        required
        clearable
        variant="outlined"
        ></v-text-field>

        <v-text-field
        v-model="confirmPassword"
        label="Confirmar contraseña"
        type="password"
        :rules="confirmPasswordRules"
        required
        clearable
        variant="outlined"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2" color="blue-accent-3" rounded="xl">Registro</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      firstName: '',
      firstNameRules: [
        value => (value && value.length > 3) || 'El nombre debe tener al menos 3 caracteres.',
      ],
      email: '',
      emailRules: [
        value => !!value || 'El correo electrónico es requerido.',
        value => validateEmail(value) || 'Ingresa un correo electrónico válido.',
      ],
      password: '',
      confirmPassword: '',
      passwordRules: [
        value => !!value || 'La contraseña es requerida.',
        value => (value && value.length >= 8) || 'La contraseña debe tener al menos 8 caracteres.',
      ],
      confirmPasswordRules: [
        value => !!value || 'Por favor, confirma tu contraseña.',
        value => value === this.password || 'Las contraseñas no coinciden.',
      ],
    }),
  computed: {
    confirmPasswordRules() {
      return [
        v => !!v || 'Please confirm your password',
        v => v === this.password || 'Passwords do not match',
      ];
    },
  },
  methods: {
    submitForm(e) {
      console.log(e);
    //   this.$router.push('/')
    },
    validateEmail(email) {
        // Utiliza una expresión regular para validar el formato del correo electrónico
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
  },
}
</script>