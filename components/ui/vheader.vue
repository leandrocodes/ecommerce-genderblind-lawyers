<template>
  <header>
    <nav>
      <nuxt-link to="/"><i class="material-icons">arrow_back</i></nuxt-link>
      <h1 class="title">
        <span class="fw-normal">{{ title[0] }}</span>
        {{ title[1] }}
      </h1>
    </nav>

    <img :src="require(`~/assets/images/${image}.svg`)" alt="Sign Up Picture" />
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: Array,
      default: () => ['', '']
    },
    image: {
      type: String,
      default: () => ''
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
  img {
    min-width: 80vw;
    display: block;
    margin: 2rem auto;
  }
}
</style>
