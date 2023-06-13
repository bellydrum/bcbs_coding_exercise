<template>
  <div>
    <label>Username: {{ username }}</label>
    <input type="text" v-model="username" />
  </div>
  <div>
    <label>Password: </label>
    <input type="password" v-model="password" />
  </div>
  <div>
    <label>Email: </label>
    <input type="text" v-model="email" />
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
      'user.username',
      'user.password'
    ]),
  },
  methods: {
    submitLogin() {
      const username = this.$store.state.user.username
      const password = this.$store.state.user.password
      userService.validateUser(username, password)
    },
  }
}
</script>