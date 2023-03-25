<template>
  <div class="offer-content">
    <ul>
      <li>
        <div class="offer-content__text  offer-content__text--el-1">
          <span></span>
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
      <li>
        <div class="offer-content__image offer-content__image--el-2" >
          <img
              :src="require('/src/assets/' + offer_data.img2)"
              :alt="offer_data.altImg"
          />
        </div>
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

      </li>
      <li>
        <div class="offer-content__text offer-content__text--el-3">
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
              :src="require('/src/assets/' + offer_data.img3)"
              :alt="offer_data.altImg"
          />
        </div>
      </li>
      <li>
        <div class="offer-content__image">
          <img
              :src="require('/src/assets/' + offer_data.img4)"
              :alt="offer_data.altImg"
          />
        </div>
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
    li+li{
      margin-top: 129px;
    }
    li {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
  }
  &__text {
    width: 433px;
    position: relative;
    &--el-1{
      &:after{
        content: '';
        display: block;
        position: absolute;
        background-image: url('@/assets/offer-el-1.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        left: 90%;
        top: 85%;
        width: 100%;
        height: 200px;
      }

    }

    &--el-3{
      &:after{
        content: '';
        display: block;
        position: absolute;
        background-image: url('@/assets/offer-el-3.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        left: 90%;
        bottom: -95%;
        width: 100%;
        height: 180px;
      }

    }

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
    &--el-2{
      &:before{
        content: '';
        display: block;
        position: absolute;
        background-image: url('@/assets/offer-el-2.png');
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        left: 90%;
        bottom: -60%;
        width: 100%;
        height: 120px;
      }

    }
  }
}
</style>
