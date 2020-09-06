<template>
  <div class="container">
    <h1 class="title">Sign In</h1>

    <nav>
      <ul>
        <li>
          <nuxt-link to="/"> Back </nuxt-link>
        </li>
      </ul>
    </nav>

    <section>
      <form @submit.prevent="login">
        <input
          id="email"
          v-model="user.email"
          placeholder="Email"
          type="email"
          name="email"
        />
        <input
          id="password"
          v-model="user.password"
          placeholder="Password"
          type="password"
          name="password"
        />
        <input type="submit" :value="submitButton" />
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    isLoading: false
  }),
  computed: {
    submitButton() {
      return this.isLoading ? 'Carregando...' : 'Login'
    }
  },
  methods: {
    async login() {
      this.isLoading = true
      const { email, password } = this.user
      try {
        await this.$fireAuth.signInWithEmailAndPassword(email, password)
        this.$router.push('/dashboard')
        this.isLoading = false
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }
}
</script>

<style></style>
