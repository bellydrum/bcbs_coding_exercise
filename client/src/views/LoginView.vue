<template>
  <div>
    <h1>Log In</h1>
    <div>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/forms/LoginForm.vue'

export default {
  name: 'LoginView.vue',
  components: {
    LoginForm
  }
}

</script>