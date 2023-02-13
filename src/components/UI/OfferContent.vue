<template>
  <div class="offer-content">
    <ul>
      <li>
        <div class="offer-content__text">
          <span>{{ offer_data.subtitle }}</span>
          <h2>{{ offer_data.title }}</h2>
          <p>{{ offer_data.desc }}</p>
          <router-link to="/"
            ><strong>{{ offer_data.url }}</strong
            ><img
              :src="require('/src/assets/svg/' + offer_data.arrowLink)"
              :alt="offer_data.altArrow"
          /></router-link>
        </div>
        <div class="offer-content__image">
          <img
            :src="require('/src/assets/' + offer_data.img1)"
            :alt="offer_data.altImg"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OfferContent",
  props: {
    offer_data: {
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
.offer-content {
  margin-top: 140px;
  ul {
    li {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
  &__text {
    width: 433px;
    span {
      font-size: 18px;
      line-height: 22px;
      font-weight: var.$font-r;
      margin-bottom: 14px;
    }
    h2 {
      font-size: 40px;
      line-height: 45px;
      font-weight: var.$font-m;
      margin-bottom: 14px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
      font-weight: var.$font-r;
      margin-bottom: 14px;
    }
    a {
      font-size: 18px;
      line-height: 22px;
      font-weight: var.$font-r;
      display: flex;
      align-items: center;
    }
    img {

      margin-left: 22px;
      width: 32px;
      height: 14px;

    }
  }
  &__image{
    position: relative;
    &:after{
      position: absolute;
      content: '';
      width: 480px;
      height: 80%;
      background: var.$c200;
      right: 0;
      bottom: 0;
      z-index: -1;
      border-radius:8px 15px 15px 8px;
    }
  }
}
</style>
