<template>
  <div class="container">
    <vheader :title="['Sign', 'In']" :image="'sign-in'" />

    <main class="form__section">
      <form @submit.prevent="login">
        <label for="email" class="mt-4">Email:</label>
        <input
          id="email"
          v-model="user.email"
          placeholder="joaosilva@gmail.com"
          type="email"
          name="email"
        />
        <label for="email" class="mt-4">Password:</label>
        <input
          id="password"
          v-model="user.password"
          placeholder="*******"
          type="password"
          name="password"
        />
        <input type="submit" :value="submitButton" />
      </form>
    </main>
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
        const { user } = await this.$fireAuth.signInWithEmailAndPassword(
          email,
          password
        )
        const doc = await this.$fireStore
          .collection('lawyers')
          .doc(user.uid)
          .get()
        if (doc.exists) this.$router.push('/lawyer')
        else this.$router.push('/dashboard')
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
      this.isLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: rgba($color: $primary, $alpha: 0.15);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 1rem;
}
</style>
