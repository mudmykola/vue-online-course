<template>
  <div class="mentors-video">
    <!-- MentorsVideo Title  -->
    <div class="mentors-video__title">
      <h2>{{ mentorsVideo_data.title }}</h2>
      <p>{{ mentorsVideo_data.desc }}</p>
    </div>
    <!-- MentorsVideo List -->
    <div class="mentors-video__list">
      <ul>
        <li v-for="item in MENTORS_VIDEO" :key="item.id">
          <div class="mentors-video__box">
            <div class="mentors-player">
              <video controls ref="videoPlayer"
                     :src="require('/src/assets/video/' + item.video)"></video>

            </div>

            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
            <div class="mentors-video__like">
              <div class="mentors-video__like--img"
                   v-for="item in MENTORS_STARS"
                   :key="item.id">
                <img :src="require('/src/assets/' + item.iconStars)"
                     :alt="item.iconAlt">
              </div>
              <span>{{ item.number }}</span>

            </div>

          </div>
        </li>
      </ul>
    </div>
    <!-- MentorsBanner -->
    <MentorsBanner v-for="item in content" :key="item.id"
                   :mentorsBanner_data="item" />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import MentorsBanner from "@/components/UI/MentorsBanner.vue";


export default {
  name: "MentorsVideo",
components:{
    MentorsBanner,
},
  data(){
    return{
      content: [
        {
          id:1,
          bannerTitle: 'Stream anywhere.\n' +
              'Cancel anytime.',

        }
      ],

    }
  },
  props: {
    mentorsVideo_data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },

  },
  computed: {
    ...mapGetters(['MENTORS_VIDEO']),
    ...mapGetters(['MENTORS_STARS']),
  },

}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.mentors {
  &-video {
    margin-top: 85px;

    &__title {
      text-align: center;

      h2 {
        font-size: 36px;
        line-height: 40px;
        font-weight: var.$font-m;
      }

      p {
        width: 447px;
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-r;
        padding: 22px 0 88px;
        margin: 0 auto;

      }
    }

    &__list {
      ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;

        li {
          cursor: pointer;
          width: 384px;

          border-radius: 28px;
          background: var.$c400;
          @extend %dtrans;

          &:hover {
            @extend %border-ef;
            @extend %htrans;
          }
        }
      }
    }

    &__box {
      padding: 16px;

      h2 {
        font-size: 20px;
        line-height: 25px;
        font-weight: var.$font-sb;
        padding: 24px 0 16px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        font-weight: var.$font-r;
        opacity: 0.7;
      }

    }

    &__like {
      display: flex;
      align-items: center;
      margin-top: 24px;

      gap: 2px;

      span {
        padding: 0;
        margin-left: 8px;
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-r;
      }

      &--img {
        gap: 2px;
      }

    }
  }

  &-player {
    position: relative;

    video {
      border-radius: 24px;
    }

    &__btn {
      position: absolute;
      top: 0;
      right: 0;
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