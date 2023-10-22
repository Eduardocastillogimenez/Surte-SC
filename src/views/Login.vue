<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent="submitForm">
        <v-text-field
            v-model="firstName"
            label="Nombre"
            :rules="firstNameRules"
        ></v-text-field>

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

        <v-text-field
        v-model="confirmPassword"
        label="Confirm Password"
        type="password"
        :rules="[confirmPasswordRules, passwordConfirmationRule]"
        required
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      firstName: '',
      firstNameRules: [
        value => {
          if (value?.length > 3) return true

          return 'First name must be at least 3 characters.'
        },
      ],
      email: '123',
      emailRules: [
        value => {
          if (/[^0-9]/.test(value)) return true

          return 'email can not contain digits.'
        },
      ],
      password: '',
      confirmPassword: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters',
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
      console.log(e)
    },
  },
}
</script>