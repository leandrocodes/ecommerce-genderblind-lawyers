<template>
  <div class="container">
    <vheader :title="['Sign', 'Up']" :image="'signup-form'" />

    <main class="form__section">
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
          placeholder="(67) 99839-4205"
          type="number"
          name="phone number"
        />
        <label for="subscription" class="mt-4">Inscrição:</label>
        <input
          id="subscription"
          v-model="user.subscription"
          placeholder="MS123456"
          type="text"
          name="subscription"
        />
        <label for="password" class="mt-4">Senha:</label>
        <input
          id="password"
          v-model="user.password"
          placeholder="Password"
          type="password"
          name="password"
        />
        <input type="submit" :value="inputValue" class="mt-4" />
      </form>
    </main>
  </div>
</template>

<script>
import vheader from '@/components/ui/vheader'
export default {
  components: {
    vheader
  },
  data: () => ({
    user: {
      name: '',
      email: '',
      phone: '',
      subscription: '',
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
        await this.$fireStore.collection('lawyers').doc(user.uid).set({
          name: this.user.name,
          subscription: this.user.subscription,
          phone: this.user.phone
        })
        this.inputValue = 'Register'
        this.$router.push({ name: 'dashboard' })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
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
  padding: 0 1rem;
}
</style>
