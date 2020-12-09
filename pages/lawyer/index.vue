<template>
  <div class="container">
    <header>
      <nav>
        <nuxt-link to="/"><i class="material-icons">arrow_back</i></nuxt-link>
        <h1 class="title"><span class="fw-normal">Lawyer</span> Desk</h1>
      </nav>
    </header>
    <div class="lawyer__list">
      <user v-for="(user, index) in users" :key="index" :user="user" />
    </div>
  </div>
</template>

<script>
import user from '../../components/user'
export default {
  components: {
    user
  },
  data: () => ({
    users: []
  }),
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      const users = await this.$fireStore.collection('users').get()
      if (!users.empty) {
        users.forEach(user => {
          this.users.push(user.data())
        })
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
