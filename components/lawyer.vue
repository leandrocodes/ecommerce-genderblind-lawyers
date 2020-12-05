<template>
  <div class="lawyer__card">
    <div class="profile__pic">
      <img src="../assets/images/dummy.jpg" alt="" srcset="" />
      <div class="status"></div>
    </div>
    <main class="profile__main">
      <div class="rating">
        <i class="mdi mdi-star"></i>
        4.5
      </div>
      <div class="profile__name">{{ lawyer.name }}</div>
      <div class="profile__specification">
        <i class="mdi mdi-briefcase-outline"></i>
        Direito Trabalhista
      </div>
    </main>
    <button class="cta__button">
      <i class="mdi mdi-arrow-right-circle-outline"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    lawyer: {
      type: Object,
      required: true
    }
  },
  data: () => ({})
}
</script>

<style lang="scss" scoped>
.lawyer__card {
  padding: 1rem 1.15rem;
  width: 85%;
  background: white;
  border-left: 10px solid $secondary;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 1.5px 1.5px 12px rgba(0, 0, 0, 0.05);
}

.profile__name {
  font-weight: bold;
  font-size: 18px;
  margin: 0.5rem 0;
}

.profile__specification {
  display: flex;
  align-items: center;
  color: $dark-text;
  .mdi {
    font-size: 26px;
    margin-right: 2.5px;
    color: $dark-text;
  }
}

.profile__main {
  .rating {
    color: #fcc946;
    font-weight: bolder;
    display: flex;
    align-items: center;
    .mdi-star {
      font-size: 24px;
    }
  }
}

.cta__button {
  width: 60px;
  height: 60px;
  margin-left: auto;
  background: $secondary;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1.5px 1.5px 12px rgba(0, 0, 0, 0.05);
  .mdi {
    color: white;
    font-size: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.profile__pic {
  position: relative;
  margin-right: 10px;
  img {
    width: 53px;
    height: 55px;
    border-radius: 50%;
  }
  .status {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 3px solid white;
    background-color: #05ff00;
    position: absolute;
    bottom: -5px;
    right: -5px;
    z-index: 1;
  }

  .status::before {
    color: #eee;
    font-size: 0.25em;
    padding-left: 4px;
  }
}
</style>
