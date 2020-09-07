<template>
  <div class="container">
    <template v-if="isLoading">
      <h1>Carregando...</h1>
    </template>
    <template v-else>
      <div class="title">
        <h2 class="fw-normal">Gender Blinders</h2>
        <h1 class="fw-bold">Lawyers</h1>
      </div>
      <!-- <h1 class="title">Gender Blinders <span>Lawyers</span></h1> -->

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

<style lang="scss" scoped>
.title {
  margin-top: 2rem;
  h1,
  h2 {
    text-align: center;
  }
  h2 {
    font-size: 1.75rem;
  }
  h1 {
    font-size: 3.25rem;
  }
}
</style>
