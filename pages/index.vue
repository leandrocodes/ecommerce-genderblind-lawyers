<template>
  <main class="row">
    <template v-if="isLoading">
      <h1>Carregando...</h1>
    </template>
    <template v-else>
      <div class="col-xs-12 col-md-6 p-0">
        <section class="hero">
          <div class="hero__title pt-6">
            <h2 class="fw-normal">Gender Blinders</h2>
            <h1 class="fw-bold">Lawyers</h1>
          </div>

          <div class="boxes mt-6 pb-2">
            <div class="row center-xs">
              <div class="col-xs-8">
                <div class="black__box pt-6 pb-4 px-4">
                  <p class="fw-bold">HIGH RATED</p>
                  <p class="mt-2">Most Recommended</p>
                </div>
              </div>
              <div class="col-xs-8">
                <div class="black__box pt-6 pb-4 px-4">
                  <p class="fw-bold">LATEST LAWYERS</p>
                  <p class="mt-2">Recent Registered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="col-xs-12 col-md-6">
        <nav class="txt-upper">
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
  </main>
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
.container {
  min-height: 60vh;
  padding-top: 2rem;
  background-color: $primary;
}

.hero {
  min-height: 65vh;
  background-color: rgba($color: $peep, $alpha: 0.15);
  .hero__title {
    h1,
    h2 {
      text-align: center;
    }
    h2 {
      font-size: 2.25rem;
    }
    h1 {
      font-size: 3rem;
    }
  }
  .black__box {
    background-color: black;
    color: white;
    text-align: right;
    text-transform: uppercase;
    p {
      &:last-child {
        font-size: 0.75rem;
      }
    }
  }
}
</style>
