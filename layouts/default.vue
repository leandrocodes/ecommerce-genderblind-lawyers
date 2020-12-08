<template>
  <div>
    <Nuxt v-if="!loading" />
    <div v-else class="loading">Carregando...</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true
  }),
  async beforeCreate() {
    await this.$fireAuth.onAuthStateChanged(async user => {
      if (user) {
        const doc = await this.$fireStore
          .collection('lawyers')
          .doc(user.uid)
          .get()
        if (doc.exists) this.$router.replace('/lawyer')
        else this.$router.replace('/dashboard')
      }
      this.loading = false
    })
  }
}
</script>

<style lang="scss">
.loading {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 3rem;
  color: $secondary;
}
</style>
