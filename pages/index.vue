<template>
  <main class="index__page">
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
                <div class="green__box py-5 px-4">
                  <p class="fw-bold">HIGH RATED</p>
                  <p class="mt-2">Most Recommended</p>
                </div>
              </div>
              <div class="col-xs-8">
                <div class="green__box py-5 px-4">
                  <p class="fw-bold">LATEST LAWYERS</p>
                  <p class="mt-2">Recent Registered</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="col-xs-12 col-md-6">
        <section class="options">
          <div class="options__text mt-2">
            <h2 class="fw-normal">Find Yours</h2>
            <h1 class="fw-bold">Now</h1>
          </div>
          <nav class="txt-upper mt-6">
            <ul>
              <li>
                <nuxt-link to="/signup"> Sign Up </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/signin"> Sign In </nuxt-link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </template>
  </main>
</template>

<script>
export default {
  data: () => ({
    isLoading: false
  })
}
</script>

<style lang="scss" scoped>
.index__page {
  max-height: 100vh;
}

.container {
  min-height: 60vh;
  padding-top: 2rem;
  background-color: $primary;
}

.hero {
  max-height: 70vh;
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
  .green__box {
    background-color: $secondary;
    color: white;
    text-align: right;
    text-transform: uppercase;
    border-radius: 4px;
    p {
      font-size: 0.9rem;
      &:last-child {
        font-size: 0.725rem;
      }
    }
  }
}

.options {
  .options__text {
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
  nav > ul {
    display: flex;
    justify-content: space-around;
    li {
      border: 1px solid $text;
      border-radius: 4px;
      padding: 0.75rem 1.15rem;
    }
    li > a {
      text-decoration: none;
      color: $text;
    }
  }
}
</style>
