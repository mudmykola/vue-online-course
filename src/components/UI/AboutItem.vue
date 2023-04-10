<template>
  <div class="about-item">
    <h2>{{ about_data.title }}</h2>
    <p>{{ about_data.desc }}</p>
    <div class="about-item__links">
      <button>{{ about_data.btn }}</button>
      <router-link to="/">{{ about_data.link }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutItem",
  props: {
    about_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.about-item {
  width: 518px;
  margin-right: 191px;

  h2 {
    font-size: 48px;
    line-height: 52px;
    font-weight: var.$font-m;
    margin-bottom: 38px;
  }

  p {
    font-size: 15px;
    line-height: 20px;
    font-weight: var.$font-r;
    opacity: 0.8;
  }

  &__links {
    display: flex;
    flex-direction: column;

    button {
      margin-top: 52px;
      @extend %global-btn;
      width: 327px;
      height: 54px;
    }

    a {
      margin-top: 24px;
      border: 1px solid rgba(255, 255, 255, 0.59);
      border-radius: 16px;
      width: 327px;
      padding: 14px 0;
      text-align: center;
      font-size: 18px;
      line-height: 22px;
      font-weight: var.$font-m;
      @extend %dtrans;

      &:hover {
        border-color: var.$c200;
        opacity: 0.8;
        @extend %htrans;
      }
    }
  }
}

// 768
@media (max-width: 768px) {
}

// 600
@media (max-width: 600px) {
}

// 480
@media (max-width: 480px) {
  .about-item {
    width: 450px;
    text-align: center;
    margin: 0 auto;
    margin-right: 0;
    &__links {
      align-items: center;
    }
    h2 {
      font-size: 35px;
      line-height: 40px;
      margin-bottom: 15px;
    }
    p {
      font-size: 12px;
      line-height: 16px;
    }

  }
}

  // 320
  @media (max-width: 320px) {
    .about-item {
      max-width: 290px;
      text-align: center;
      margin: 0 auto;
      margin-right: 0;
      &__links {

        display: none;


      }
      h2 {
        width: 100%;
        font-size: 30px;
        line-height: 35px;
        margin-bottom: 15px;
      }
      p {
        font-size: 12px;
        line-height: 16px;
      }

    }
}

</style>
