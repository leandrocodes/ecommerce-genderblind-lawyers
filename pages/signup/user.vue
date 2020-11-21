<template>
  <div class="container">
    <header>
      <nav>
        <nuxt-link to="/"><i class="material-icons">arrow_back</i></nuxt-link>
        <h1 class="title"><span class="fw-normal">Sign</span> Up</h1>
      </nav>

      <img src="../../assets/images/signup-form.svg" alt="Sign Up Picture" />
    </header>

    <main>
      <form @submit.prevent="signUp">
        <label for="nome" class="mt-4">Nome completo:</label>
        <input
          id="nome"
          v-model="user.name"
          placeholder="João Silva"
          type="text"
          name="name"
        />
        <label for="email" class="mt-4">Email:</label>
        <input
          id="email"
          v-model="user.email"
          placeholder="joaosilva@gmail.com"
          type="email"
          name="email"
        />
        <label for="phone" class="mt-4">Telefone:</label>
        <input
          id="phone"
          v-model="user.phone"
          placeholder="(67) 99123-4567"
          type="number"
          name="phone number"
        />
        <label for="password" class="mt-4">Senha:</label>
        <input
          id="password"
          v-model="user.password"
          placeholder="********"
          type="password"
          name="password"
        />
        <label for="password" class="mt-4">Confirmar senha:</label>
        <input
          id="password"
          v-model="user.password"
          placeholder="********"
          type="password"
          name="password"
        />
        <input type="submit" :value="inputValue" class="mt-4" />
      </form>
    </main>
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

.container {
  background-color: rgba($color: $primary, $alpha: 0.15);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 1rem;
}

header {
  max-height: 70vh;
  width: 100%;
  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.25rem;
    h1 {
      width: 100%;
      text-align: center;
    }
  }
  img {
    min-width: 80vw;
    display: block;
    margin: 2rem auto;
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
      color: $secondary;
      &::placeholder {
        color: rgba($color: $secondary, $alpha: 0.65);
        // color: $secondary;
      }
      &:focus {
        outline: none;
        padding: 1.1rem;
        font-size: 1rem;
      }
    }
    input[type='submit'] {
      background-color: $secondary;
      color: $linen;
      font-weight: bold;
      width: 50%;
      margin-left: auto;
    }
    label {
      margin-left: 1.5rem;
      color: $secondary;
      font-weight: bold;
    }
  }
}
</style>
