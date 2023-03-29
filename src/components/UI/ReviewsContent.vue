<template>
  <div :class="{'reviews-cont' : isReviewsCont}">
    <div class="reviews-cont__title">
      <h2>{{ reviewsCont_data.title }}</h2>
      <p>{{ reviewsCont_data.desc }}</p>
    </div>
    <div class="reviews-cont__list">
      <ul>
        <li>

          <div class="reviews-cont__person">
            <div class="reviews-cont__person--ava">
              <img src="" alt="">
              <div class="reviews-cont__person--name">
                <h2></h2>
                <p></p>
              </div>
            </div>
            <div class="reviews-cont__person--range"></div>
          </div>
          <div class="reviews-cont__desc">
            <p></p>
          </div>
          <div class="reviews-cont__video">
            <div class="reviews-cont__video--file">
              <video src=""></video>
            </div>
            <div class="reviews-cont__video--text">
              <h2></h2>
              <p></p>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>

export default {
  name: "ReviewsContent",
  props: {
    isReviewsCont: {
      type: Boolean,
      default: false,
    },
    reviewsCont_data: {
      type: Object,
      default() {
        return {};
      },
    },
  }
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.reviews-cont {

  &__title {
    margin-top: 65px;
    color: var.$default;
    text-align: center;

    h2 {
      font-size: 40px;
      line-height: 45px;
      font-weight: var.$font-sb;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
      font-weight: var.$font-r;
      color: rgba(196, 196, 196, 0.8);
      width: 344px;
      margin: 0 auto;
      padding-bottom: 52px;
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
}

// 320
@media (max-width: 320px) {

}
</style>