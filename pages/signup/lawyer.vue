<template>
  <div class="container">
    <h1 class="title">Sign Up</h1>

    <nav>
      <ul>
        <li>
          <nuxt-link to="/signup"> Back </nuxt-link>
        </li>
      </ul>
    </nav>

    <section>
      <form @submit.prevent="signUp">
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
        <input type="submit" value="Create User" />
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
    }
  }),
  methods: {
    async signUp() {
      const { email, password } = this.user
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(email, password)
        await this.$fireStore.collection('users').add({
          name: 'Asda',
          surname: 'Fjkl'
        })
        // console.log(id)
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
    }
  }
}
</script>

<style></style>
