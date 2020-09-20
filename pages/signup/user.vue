<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>

    <nav>
      <ul>
        <li>
          <nuxt-link to="/"> Back </nuxt-link>
        </li>
      </ul>
    </nav>

    <section class="form__section d-flex jc-center">
      <form class="d-flex fd-column" @submit.prevent="signUp">
        <label for="nome" class="mt-4">Nome completo:</label>
        <input
          id="nome"
          v-model="user.name"
          placeholder="Nome"
          type="text"
          name="name"
        />
        <label for="email" class="mt-4">Email:</label>
        <input
          id="email"
          v-model="user.email"
          placeholder="Email"
          type="email"
          name="email"
        />
        <label for="phone" class="mt-4">Telefone:</label>
        <input
          id="phone"
          v-model="user.phone"
          placeholder="Telefone"
          type="number"
          name="phone number"
        />
        <label for="password" class="mt-4">Senha:</label>
        <input
          id="password"
          v-model="user.password"
          placeholder="Password"
          type="password"
          name="password"
        />
        <input type="submit" :value="inputValue" class="mt-4" />
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: '',
      phone: '',
      email: '',
      password: ''
    },
    inputValue: 'Register'
  }),
  methods: {
    async signUp() {
      this.inputValue = 'Carregando...'
      const { email, password } = this.user
      try {
        const { user } = await this.$fireAuth.createUserWithEmailAndPassword(
          email,
          password
        )
        await this.$fireStore.collection('users').doc(user.uid).set({
          name: this.user.name,
          phone: this.user.phone
        })
        this.$router.push({ name: 'dashboard' })
        this.inputValue = 'Register'
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form__section {
  form {
    width: 30vw;
  }
}
</style>
