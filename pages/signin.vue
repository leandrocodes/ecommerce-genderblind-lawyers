<template>
  <div class="container">
    <header>
      <nav>
        <nuxt-link to="/"><i class="material-icons">arrow_back</i></nuxt-link>
        <h1 class="title"><span class="fw-normal">Sign</span> In</h1>
      </nav>

      <img src="../assets/images/sign-in.svg" alt="Sign In Picture" />
    </header>

    <main>
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
}

header {
  nav {
    display: flex;
    justify-content: flex-start;
    .material-icons {
      font-size: 2.25rem;
      max-width: 15vw;
    }
    h1 {
      width: 100%;
      text-align: center;
    }
  }
  img {
    min-width: 80vw;
    margin: 2rem 0;
  }
}

main {
  background-color: white;
  min-height: 50vh;
  min-width: 100vw;
  form {
    margin-top: 1.25rem;
    display: flex;
    flex-direction: column;
    input {
      border: 2px solid $secondary;
      margin: 1.25rem 1.5rem;
      border-radius: 55px;
      padding: 1rem;
      transition: all 150ms ease-in-out;
      &::placeholder {
        color: $secondary;
      }
      &:focus {
        outline: none;
        padding: 1.1rem;
        font-size: 1rem;
      }
    }
    input[type='submit'] {
      position: fixed;
      bottom: 0;
      background-color: $secondary;
      color: $linen;
      font-weight: bold;
      width: 100%;
      max-width: calc(100vw - 2.5rem);
    }
  }
}
</style>
