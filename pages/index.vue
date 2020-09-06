<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$fireAuth.onAuthStateChanged(user => {
      if (user) this.$router.push('/dashboard')
    })
  }
}
</script>

<style></style>
