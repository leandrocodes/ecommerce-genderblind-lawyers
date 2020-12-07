<template>
  <div class="container">
    <vheader :title="['Sign', 'Up']" :image="'signup-1'" />

    <main>
      <div class="row">
        <nuxt-link to="/signup/user">
          <div class="link">
            <img src="../../assets/icons/heart.svg" width="92px" />
            <p>Registrar como usuário</p>
            <i class="material-icons">arrow_forward</i>
          </div>
        </nuxt-link>
      </div>
      <div class="row">
        <nuxt-link to="/signup/lawyer">
          <div class="link">
            <img src="../../assets/icons/fist.svg" width="92px" />
            <p>Registrar como advogado</p>
            <i class="material-icons">arrow_forward</i>
          </div>
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
import vheader from '@/components/ui/vheader'
export default {
  components: {
    vheader
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
  max-height: 100vh;
}

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
    height: 100%;
    display: block;
    margin: 2rem auto;
  }
}

main {
  background-color: $bg-color;
  min-height: 30vh;
  min-width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .row {
    a {
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: $secondary;
      font-weight: bold;
      font-size: 1rem;
    }
    .link {
      margin: 1rem 1.15rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      height: 100px;
      padding: 0 0.5rem;
      border-radius: 12px;
      &:last-of-type {
        margin-bottom: 0;
      }
      .material-icons {
        color: $secondary;
        text-decoration: none;
      }
    }
  }
}
</style>
