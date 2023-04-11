<template>
  <div class="offer-content">
    <ul>
      <li>
        <div class="offer-content__text  offer-content__text--el-1">

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
        <div class="offer-content__image offer-content__image--el-2">
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
    li + li {
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

    &--el-1 {
      &:after {
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

    &--el-3 {
      &:after {
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

  &__image {
    position: relative;

    img {
      @extend %dtrans;
    }

    img:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      @extend %htrans;
    }

    &:after {
      position: absolute;
      content: '';
      width: 480px;
      height: 80%;
      background: var.$c200;
      right: 0;
      bottom: 0;
      z-index: -1;
      border-radius: 8px 15px 15px 8px;
    }

    &--el-2 {
      &:before {
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

// 768
@media (max-width: 768px) {
  .offer-content {
    max-width: 750px;
    margin: 0 auto;
    margin-top: 50px;

    &__text {
      width: 300px;

      span {
        font-size: 14px;
        line-height: 20px;
      }

      h2 {
        font-size: 30px;
        line-height: 35px;
      }

      p {
        font-size: 12px;
        line-height: 16px;
      }

      &--el {
        &-1:after {
          width: 25%;
        }
        &-3:after {
          width: 25%;
        }
      }
    }

    &__image {
      width: 250px;
&--el{
  &-2:before{
    width: 45%;
    bottom: -80%;

  }
}
      &:after {
        width: 100px;
        left: -9%;
      }
    }
  }
}

// 600
@media (max-width: 600px) {
  .offer-content {
    margin-top: 75px;
    width: 550px;
    margin: 0 auto;

    ul {
      li + li {
        margin-top: 75px;
      }
    }

    &__text {
      min-width: 100%;

      &--el {
        &-1:after {
          width: 150px;
          height: 100px;
          left: 0;
          top: 120%;
        }

        &-3:after {
          width: 150px;
          height: 100px;
          left: 0;
          top: 120%;
        }
      }

      span {
        font-size: 13px;
        line-height: 18px;
      }

      h2 {
        font-size: 30px;
        line-height: 35px;
      }

      p {
        font-size: 12px;
        line-height: 16px;
      }

      img {
        width: 25px;
        height: 10px;
        margin-left: 10px;
      }
    }

    &__image {
      height: 300px;

      &--el {
        &-2:before {
          width: 150px;
          height: 100px;
          left: 115px;
          bottom: -50%;
        }
      }

      &:after {
        display: none;
      }
    }
  }
}

// 480
@media (max-width: 480px) {
  .offer-content {
    margin-top: 75px;
    width: 450px;

    ul {
      li + li {
        margin-top: 75px;
      }
    }

    &__text {
      min-width: 100%;

      &--el {
        &-1:after {
          width: 150px;
          height: 100px;
          left: 0;
          top: 120%;
        }

        &-3:after {
          width: 150px;
          height: 100px;
          left: 0;
          top: 120%;
        }
      }

      span {
        font-size: 13px;
        line-height: 18px;
      }

      h2 {
        font-size: 30px;
        line-height: 35px;
      }

      p {
        font-size: 12px;
        line-height: 16px;
      }

      img {
        width: 25px;
        height: 10px;
        margin-left: 10px;
      }
    }

    &__image {
      height: 300px;

      &--el {
        &-2:before {
          width: 150px;
          height: 100px;
          left: 115px;
          bottom: -50%;
        }
      }

      &:after {
        display: none;
      }
    }
  }
}

// 320
@media (max-width: 320px) {
  .offer-content {
    margin-top: 75px;
    width: 290px;

    ul {
      li + li {
        margin-top: 75px;
      }
    }

    &__text {
      min-width: 100%;

      &--el {
        &-1:after {
          width: 150px;
          height: 100px;
          left: 0;
          top: 120%;
        }

        &-3:after {
          width: 150px;
          height: 100px;
          left: 0;
          top: 120%;
        }

      }

      span {
        font-size: 13px;
        line-height: 18px;
      }

      h2 {
        font-size: 30px;
        line-height: 35px;
      }

      p {
        font-size: 12px;
        line-height: 16px;
      }

      img {
        width: 25px;
        height: 10px;
        margin-left: 10px;
      }
    }

    &__image {
      height: 300px;

      &--el {
        &-2:before {
          width: 150px;
          height: 100px;
          left: 115px;
          bottom: -50%;
        }
      }

      &:after {
        display: none;
      }
    }
  }
}
</style>
