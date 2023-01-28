<template>
  <div class="why-content">
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
    <ul>
      <li v-for="item in getWhyCheck" :key="item.id">
        <img :src="require('/src/assets/' + item.check)" :alt="item.alt" />
        <p>{{ item.text }}</p>
      </li>
    </ul>
    <button v-for="(btn, idx) in buttons" :key="idx">{{ btn.link }}</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheWhyConntent",
  data() {
    return {
      title: "Why to choose Edumena?",
      desc: "We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level. ",
      buttons: [
        {
          link: "Discover all classes",
          state: true,
          type: Object,
        },
      ],
    };
  },

  computed: {
    ...mapGetters(["getWhyCheck"]),
    btnStates() {
      return this.buttons.map((btn) => btn.state);
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.why-content {
  width: 518px;
  h2 {
    font-size: 48px;
    line-height: 55px;
    color: var.$default;
    font-weight: var.$font-m;
    margin-bottom: 38px;
  }
  p {
    font-size: 15px;
    line-height: 20px;
    font-weight: var.$font-r;
  }
  ul {
    margin-top: 60px;
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(2, 1fr);
    li {
      display: flex;
      align-items: center;
      width: 275px;
      p {
        margin-left: 12px;
        font-size: 18px;
        line-height: 22px;
        font-weight: var.$font-m;
      }
    }
  }
  button {
    margin-top: 60px;
    @extend %global-btn;
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
