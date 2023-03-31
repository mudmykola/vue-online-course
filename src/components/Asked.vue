<template>
  <div class="container">
    <div :class="{asked : isAsked}" :style="{color : askedTextColor}">
      <div class="asked-title"
           v-for="item in ASKED_TITLE"
           :key="item.id">
        <h2>{{ item.title }}</h2>
        <p>{{ item.subtitle }}</p>
      </div>
      <div class="asked-accordion"
           v-for="(accordion, idx) in ASKED_ACCORDION"
           :key="idx.id"
      >
        <button class="asked-accordion__box"
                @click="toogleAccordion(idx)">
          <h2>{{ accordion.btn }}</h2>
          <span class="asked-accordion__icon"
                :class="{'rotate': accordion.active}"
                :style="{ transform: accordion.active ? 'rotate(180deg)' : 'rotate(0)' }"
          >&#9660;</span>
        </button>
        <div class="asked-accordion__text"
             v-show="accordion.active">
          <p>{{ accordion.desc }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TheAsked",
  props: {
    isAsked: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        content: '',
        active: false
      })
    },
    askedTextColor: {
      type: String,
      required: true,
      default: "#fff",
    },
  },
  computed: {
    ...mapGetters(['ASKED_ACCORDION']),
    ...mapGetters(['ASKED_TITLE']),

  },
  methods: {
    toogleAccordion(idx) {
      this.ASKED_ACCORDION[idx].active = !this.ASKED_ACCORDION[idx].active;

    }
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.asked {
  color: var.$default;

  &-title {
    text-align: center;


    h2 {
      font-size: 40px;
      line-height: 45px;
      font-weight: var.$font-sb;
      margin-bottom: 18px;
    }

    p {
      width: 444px;
      font-size: 16px;
      line-height: 20px;
      color: rgba(196, 196, 196, 0.71);
      margin: 0 auto;

    }
  }

  &-accordion {

    &__box {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid #DDDDDD;
      border-radius: 22px;
      padding: 32px 40px;
      width: 100%;
      margin-top: 32px;
      @extend %dtrans;
      &:hover{
        @extend  %border-ef;
        @extend  %htrans;

      }
h2{
  font-size: 20px;
  line-height: 25px;
  font-weight: var.$font-m;
}
    }
    &__text{
      background: var.$c100;
      width: 100%;
      padding: 30px;
      margin: 20px 0;
      border-radius: 22px;
      text-align: center;
      p{
        font-size: 16px;
        line-height: 20px;
        font-weight: var.$font-m;
        width: 65%;
        margin: 0 auto;
      }
    }
    &__icon {

    }
  }

  .rotate {
    transition: transform 0.3s ease;
  }
}

</style>