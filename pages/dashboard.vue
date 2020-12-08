<template>
  <div class="container">
    <header>
      <nav>
        <nuxt-link to="/"><i class="material-icons">arrow_back</i></nuxt-link>
        <h1 class="title"><span class="fw-normal"> Lawyers </span> List</h1>
      </nav>
    </header>
    <div class="lawyer__list">
      <lawyer
        v-for="(lawyer, index) in lawyers"
        :key="index"
        :lawyer="lawyer"
      />
    </div>
  </div>
</template>

<script>
import lawyer from '../components/lawyer'
export default {
  components: {
    lawyer
  },
  data: () => ({
    lawyers: []
  }),
  created() {
    this.fetchLawyers()
  },
  methods: {
    async signout() {
      await this.$fireAuth.signOut()
      this.$router.push('/')
    },
    async fetchLawyers() {
      const lawyers = await this.$fireStore.collection('lawyers').get()
      if (!lawyers.empty) {
        lawyers.forEach(lawyer => this.lawyers.push(lawyer.data()))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
}
.lawyer__list {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
}
</style>
