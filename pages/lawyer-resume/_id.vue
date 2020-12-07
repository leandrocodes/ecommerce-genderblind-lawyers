<template>
  <div class="profile__wrapper">
    <header>
      <nav>
        <nuxt-link to="/dashboard">
          <i class="material-icons">arrow_back</i>
        </nuxt-link>
      </nav>
    </header>
    <div class="profile__card">
      <h1 class="profile__name">
        {{ lawyer.name }}
      </h1>
      <div class="profile__especification">
        <i class="mdi mdi-briefcase-outline"></i>
        Direito Trabalhista
      </div>
      <main>
        <div class="profile__location">
          <div class="location__pin">
            <img src="../../assets/images/map-pin.svg" alt="" srcset="" />
          </div>
          <div class="location__name">
            <div class="city"><p>Ponta Porã</p></div>
            <div class="state"><p>Mato Grosso do Sul</p></div>
          </div>
        </div>
        <div class="profile__status">
          <div class="profile__pic">
            <img src="../../assets/images/dummy.jpg" alt="" srcset="" />
            <div class="status"></div>
            <div class="profile__rating">
              <i class="mdi mdi-star"></i>
              4.5
            </div>
          </div>
        </div>
      </main>
      <div class="profile__description">
        <p class="description__title">Description</p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, sunt
        sequi. Necessitatibus quaerat, accusamus reprehenderit officiis culpa
        quas laborum dolore.
      </div>
      <div class="profile__actions">
        <button class="btn primary">
          <i class="mdi mdi-send"></i>
          Message
        </button>
        <button class="btn secondary">
          <i class="mdi mdi-message"></i>
          Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const query = await this.$fireStore
      .collection('lawyers')
      .where('subscription', '==', this.$route.params.id)
      .get()

    query.forEach(doc => {
      this.lawyer = doc.data()
    })
  },
  data: () => ({
    lawyer: null
  })
}
</script>

<style lang="scss" scoped>
.profile__wrapper {
  padding: 1rem;
}

.profile__card {
  background: white;
  height: auto;
  padding: 1.15rem 1rem;
  border-radius: 8px;
  box-shadow: 1.5px 1.5px 12px rgba(0, 0, 0, 0.05);

  .profile__name {
    font-family: 'Maven Pro', sans-serif;
    font-size: 30px;
  }

  .profile__especification {
    color: $dark-grey;
    margin: 0.5rem 0;
  }
}

.profile__location {
  display: flex;
  align-items: center;
  .location__pin {
    margin: 0;
    padding: 0;
    img {
      height: 65px;
    }
  }
  .location__name {
    font-family: 'Maven Pro', sans-serif;
    .city {
      font-size: 18px;
      font-weight: bold;
    }
    .state {
      color: $dark-grey;
    }
  }
}

main {
  display: flex;
  justify-content: space-between;
  .profile__pic {
    position: relative;
    margin-right: 10px;
    img {
      width: 105px;
      height: 105px;
      border-radius: 50%;
    }
    .status {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 3px solid white;
      background-color: #05ff00;
      position: absolute;
      bottom: 5px;
      right: 5px;
      z-index: 1;
    }
  }
  .profile__rating {
    color: #fcc946;
    font-weight: bolder;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 1.5px 1.5px 12px rgba(0, 0, 0, 0.05);
    display: flex;
    position: absolute;
    bottom: 0;
    left: -10px;
    padding: 1px 5px;
    border-radius: 16px;
    .mdi-star {
      font-size: 24px;
    }
  }
}
.profile__description {
  background: $light-grey;
  color: rgba(0, 0, 0, 0.55);
  padding: 1rem;
  margin-top: 1.5rem;
  .description__title {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }
}

.profile__actions {
  margin-top: 1rem;
  .btn {
    width: 100px;
    height: 40px;
    padding: 0.5rem;
    border-radius: 4px;
    box-shadow: 1.5px 1.5px 12px rgba(0, 0, 0, 0.05);
    font-weight: bold;
    font-size: 14px;
    &.primary {
      background: $secondary;
      color: white;
    }
    &.secondary {
      background: rgba($color: $secondary, $alpha: 0.25);
      color: $secondary;
    }
  }
  .mdi-send {
    font-size: 16px;
  }
  .mdi.mdi-send::before {
    transform: rotate(-45deg);
  }
}
</style>
