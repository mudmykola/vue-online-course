<template>
  <div :class="{'reviews-cont' : isReviewsCont}">
    <div class="reviews-cont__title">
      <h2>{{ reviewsCont_data.title }}</h2>
      <p>{{ reviewsCont_data.desc }}</p>
    </div>
    <div class="reviews-cont__list">
      <ul>
        <li v-for="item in REVIEWS_CONTENT" :key="item.id">
          <div class="reviews-cont__person">
            <div class="reviews-cont__person--ava">
              <img :src="require('/src/assets/' + item.avatar)"
                   :alt="item.avaAlt">
              <div class="reviews-cont__person--name">
                <h2>{{item.name}}</h2>
                <p>{{item.status}}</p>
              </div>
            </div>
            <div class="reviews-cont__person--range">
              <span>{{item.range}}</span>
            </div>
          </div>
          <div class="reviews-cont__desc">
            <p>{{item.desc}}</p>
          </div>
          <div class="reviews-cont__video">
            <div class="reviews-cont__video--file">
              <video controls ref="videoPlayer"
                     :src="require('/src/assets/video/' + item.video)"/>
            </div>
            <div class="reviews-cont__video--text">
              <h2>{{item.title}}</h2>
              <p>{{item.subname}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

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
  },
  computed:{
    ...mapGetters(['REVIEWS_CONTENT']),

  },

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
  &__list{
    cursor: pointer;
    color: var.$default;
    ul{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 24px;
    }
    li{
      width: 384px;
      background: var.$c100;
      border-radius: 30px;
      padding: 24px;
      @extend %dtrans;
      &:hover{
        @extend  %border-ef;
        @extend %htrans;
      }
    }
  }
  &__person{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    &--ava{
      display: flex;
      align-items: center;
    }
    &--name{
      margin-left: 16px;
      h2{
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-sb;
      }
      p{
        margin-top: 4px;
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-r;
        color: var.$c700;
      }
    }
    &--range{
      span{
        position: relative;
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-r;
        color: var.$c700;

        &:before{
          position: absolute;
          content: '';
          width: 9px;
          height: 9px;
          border-radius: 100%;
          background: var.$c600 ;
          top: 25%;

          left: -15%;
        }
      }
    }

  }
  &__desc{
    margin-top: 15px;
  }
  &__video{
    display: flex;
    margin-top: 14px;
    align-items: center;
    &--file{
      width: 122px;
      border-radius: 24px;
    }
    &--text{
      margin-left: 14px;
      h2{
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-sb;
      }
      p{
        margin-top: 11px;
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-r;
        color: var.$c700;
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
}

// 320
@media (max-width: 320px) {

}
</style>