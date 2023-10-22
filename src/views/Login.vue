<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="submitForm">
        <h1> Iniciar Sesion </h1>

        <v-text-field
            v-model="email"
            label="Correo electronico"
            :rules="emailRules"
        ></v-text-field>

        <v-text-field
        v-model="password"
        label="Password"
        type="password"
        :rules="passwordRules"
        required
        ></v-text-field>

        <v-btn type="submit" block class="mt-2" color="blue-accent-3" rounded="xl">Inicio de sesion</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      email: '123',
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