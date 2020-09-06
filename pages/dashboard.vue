<template>
  <div class="container">
    <h1 class="title">Dashboard</h1>
    <nav>
      <ul>
        <li>
          <button @click="signout">Sign Out</button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    async signout() {
      await this.$fireAuth.signOut()
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
