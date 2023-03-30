<template>
  <div class="container">
    <div :class="{asked : isAsked}" :style="{color : askedTextColor}">
      <div class="asked-title"
           v-for="item in ASKED_ACCORDION"
           :key="item">
        <h2>{{item.title}}</h2>
        <p>{{item.subtitle}}</p>
      </div>
      <div class="asked-accordion"
           v-for="(accordion, idx) in ASKED_ACCORDION"
           :key="idx">
        <button class="asked-accordion__box" @click="toogleAccordion(idx)">
          <h2>{{accordion.btn}}</h2>
          <span class="asked-accordion__icon"
                :class="{'rotate': accordion.active}">&#9660;</span>
        </button>
        <div class="asked-accordion__text"
             v-show="accordion.active">
          <p>{{accordion.desc}}</p>
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
    askedTextColor:{
      type: String,
      required: true,
      default: "#fff",
    },
  },
  computed: {
    ...mapGetters(['ASKED_ACCORDION']),

  },
  methods:{
    toogleAccordion(idx){
      this.ASKED_ACCORDION[idx].active = !this.ASKED_ACCORDION[idx].active;
    }
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.asked{
color: var.$default;
  &-accordion{
    &__box{
      background: transparent;
    }
    &__icon{

    }
  }
}
.rotate{
  transform: rotate(180deg);
}
</style>