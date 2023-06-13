<template>
  <div>
    <label>Email: </label>
    <input type="text" v-model="email" />
  </div>
  <div>
    <label>Password: </label>
    <input type="password" v-model="password" />
  </div>
  <div>
    <button @click="submitLogin" type='submit' class="btn btn-primary">Login</button>
    <router-link to="/register" class="btn btn-link">Register</router-link>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';
import userService from '@/services/UserService.js'

export default {
  name: 'LoginForm.vue',
  computed: {
    ...mapFields([
      'user.email',
      'user.password'
    ]),
  },
  methods: {
    async submitLogin() {
      const username = this.$store.state.user.email
      const password = this.$store.state.user.password

      await userService.validateUser(username, password)
    },
  }
}
</script>