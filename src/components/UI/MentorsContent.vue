<template>
  <div class="mentors-content">
    <div class="mentors-content__top">
      <div class="mentors-content__title">
        <h2>{{ mentors_data.title }}</h2>
        <p>{{ mentors_data.desc }}</p>
      </div>
      <div class="mentors-content__btn">
        <button :class="{'active' : isActive}" @click="viewMore">{{
            btnText
          }}
        </button>
      </div>
    </div>
    <div class="mentors-content__item">
      <ul>
        <li v-for="(item, index) in MENTORS_ITEM"
            :key="item.id" v-show="showAll || index < 4"

        >
          <div class="mentors-content__box">
            <img :src="require('/src/assets/' + item.avatar)"
                 :alt="item.alt">
            <h2>{{ item.name }}</h2>
            <div class="mentors-content__skill">
              <p>{{ item.skill1 }}</p>
              <span></span>
              <p>{{ item.skill2 }}</p>
            </div>
            <button @click="viewProfile"> {{ item.btn }}</button>
          </div>
        </li>
      </ul>

    </div>
    <MentorsVideo v-for="item in content" :key="item.id"
                  :mentorsVideo_data="item"/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import MentorsVideo from "@/components/UI/MentorsVideo.vue";

export default {
  name: "MentorsContent",
  data() {
    return {
      showAll: false,
      btnText: 'View More',
      isActive: false,
      content: [
        {
          id: 1,
          title: 'Explore courses from industry leaders.',
          desc: 'Mentors around the world  teach millions of participants\n' +
              'on Edumena. We provide the tools and skills',
        }
      ],
    }
  },
  props: {
    mentors_data: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  components: {
    MentorsVideo,
  },
  computed: {
    ...mapGetters(['MENTORS_ITEM']),
    ...mapActions(['viewProfile']),
  },

  methods: {
    viewMore() {
      this.showAll = !this.showAll;
      if (this.showAll) {
        this.btnText = 'View Less';
        this.isActive = true;
      } else {
        this.btnText = 'View More';
        this.isActive = false;
      }
    }
  }
}

</script>

<style lang="scss">
@use "src/styles/variables" as var;

.mentors-content {
  margin-top: 147px;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 80px;
  }

  &__title {
    width: 500px;

    h2 {
      font-size: 40px;
      line-height: 45px;
      font-weight: var.$font-m;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      line-height: 20px;
      font-weight: var.$font-r;
    }
  }

  &__btn {
    button {
      background: var.$default;
      width: 165px;
      height: 56px;
      border-radius: 100px;
      font-size: 16px;
      line-height: 20px;
      color: var.$c100;
      border: none;
      @extend %dtrans;

      &.active {
        background: var.$c300;
        @extend %htrans;
        color: var.$default;
        @extend %border-ef;
      }

    }
  }

  &__item {
    ul {
      margin-top: 74px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 26px;

      li {

        width: 282px;
        background: var.$c400;
        border-radius: 20px;
        cursor: pointer;
        @extend %dtrans;

        &:hover {
          @extend %border-ef;
          @extend %htrans;
        }
      }
    }
  }

  &__box {
    padding: 24px;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 20px;
      line-height: 25px;
      font-weight: var.$font-sb;
      text-align: left;
      margin-top: 15px;
    }

    button {
      width: 234px;
      height: 52px;

      border-radius: 15px;
      border: none;
      font-size: 16px;
      line-height: 20px;
      font-weight: var.$font-m;

      @extend %btn;
      @extend %dtrans;

      &:hover {
        background: var.$c300;
        @extend %htrans;
      }
    }
  }

  &__skill {
    display: flex;
    align-items: center;
    margin: 9px 0 23px;

    p {
      font-size: 14px;
      line-height: 20px;
      color: var.$c500;
      font-weight: var.$font-r;
    }

    span {
      margin: 0 16px;
      width: 9px;
      height: 9px;
      border-radius: 100%;
      background: var.$c500;

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
  .mentors-content {
    width: 290px;
    margin-top: 50px;

    &__top {
      padding-top: 30px;
      flex-direction: column;
      width: 100%;
    }

    &__title {
      width: 290px;

      h2 {
        font-size: 30px;
        line-height: 35px;
      }

      p {
        font-size: 12px;
        line-height: 16px;
      }
    }

    &__item {
      ul {
        margin-top: 50px;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

}


</style>