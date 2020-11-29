<template>
  <div class="lawyer__card">
    <div class="profile__pic">
      <img :src="image" alt="" srcset="" />
    </div>
    <main class="profile__main">
      <div class="rating"></div>
      <div class="profile__name">{{ lawyer.name }}</div>
      <div class="profile__specification">
        <i class="material-icons">work_outline</i>
        Direito Trabalhista
      </div>
    </main>
    <button class="cta__button">
      <i class="material-icons">arrow_right_alt</i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    lawyer: {
      type: Object,
      required: true
    },
    gender: {
      type: String,
      required: true,
      default: 'female'
    }
  },
  data: () => ({
    image: 'https://randomuser.me/api/portraits/lego/1.jpg'
  })
}
</script>

<style lang="scss" scoped>
.lawyer__card {
  padding: 2rem 1.5rem;
  width: 85%;
  background: white;
  border-left: 10px solid $secondary;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: 1.5px 1.5px 12px rgba(0, 0, 0, 0.05);

  img {
    width: 60px;
    margin-right: 10px;
  }
}

.profile__name {
  font-weight: bold;
}

.profile__specification {
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: $dark-text;
  .material-icons {
    font-size: 26px;
    margin-right: 2.5px;
    color: $dark-text;
  }
}

.cta__button {
  margin-left: auto;
  background: $secondary;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1.5px 1.5px 12px rgba(0, 0, 0, 0.05);
  .material-icons {
    color: white;
  }
}
</style>
