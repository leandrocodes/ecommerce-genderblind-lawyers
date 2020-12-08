const userImageMixin = {
  data: () => ({
    profiles: ['dummy', 'bigode', 'chanel', 'chiquinha', 'afro', 'punk']
  }),
  computed: {
    randomProfile() {
      return this.profiles[Math.floor(Math.random() * this.profiles.length)]
    }
  }
}

export default userImageMixin
