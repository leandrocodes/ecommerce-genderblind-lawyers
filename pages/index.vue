<template>
  <div class="container">
    <template v-if="isLoading">
      <h1>Carregando...</h1>
    </template>
    <template v-else>
      <h1 class="title">Gender Blinders</h1>

      <nav>
        <ul>
          <li>
            <nuxt-link to="/signup"> Sign Up </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/signin"> Sign In </nuxt-link>
          </li>
        </ul>
      </nav>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoading: true
  }),
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) this.$router.push('/dashboard')
      else this.isLoading = false
    })
  }
}
</script>

<style></style>
