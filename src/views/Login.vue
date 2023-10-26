<template>
  <v-sheet width="330" class="mx-auto">
    <v-form fast-fail @submit.prevent="submitForm">
      <h1 class="text-center mb-11">¡Iniciar Sesión!</h1>

      <v-text-field
        class="mb-2"
        v-model="email"
        label="Correo electronico"
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
  export default {
    data: () => ({
      email: '',
      emailRules: [
        value => {
          if (/[^0-9]/.test(value)) return true

          return 'email can not contain digits.'
        },
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
      ],
    }),
  computed: {
  },
  methods: {
    submitForm(e) {
      console.log(e);
      this.$router.push('/')
    },
  },
}
</script>
