<template>
  <div class="container">
    <div class="header-cont">
      <h1>{{ title }}</h1>
      <p>{{ desc }}</p>
      <div class="header-cont__state">
        <p>{{ name }}</p>
        <ul>
          <li v-for="item in getHeaderStars" :key="item.id">
            <img :alt="item.alt" :src="require('/src/assets/' + item.stars)" />
          </li>
        </ul>
        <span>{{ state }}</span>
      </div>
      <div class="header-cont__send">
        <EmailForm />
      </div>
    </div>
  </div>
</template>

<script>
import EmailForm from "@/components/UI/EmailForm.vue";
import { mapGetters } from "vuex";

export default {
  name: "TheHeaderContent",
  components: {
    EmailForm,
  },
  data() {
    return {
      title: "Your engine for answers.",
      desc: "“ Were building the plane while were flying it big data yet drop-dead date. Due diligence teams were able to drive and awareness currying ”",
      name: "John Alexander",
      state: "5.0",
    };
  },

  computed: {
    ...mapGetters(["getHeaderStars"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.header-cont {
  margin-top: 136px;
  width: 734px;
  color: var.$default;
  h1 {
    font-size: 64px;
    line-height: 70px;
    font-weight: var.$font-sb;
  }
  p {
    margin-top: 31px;
    font-size: 18px;
    line-height: 22px;
    font-weight: var.$font-r;
  }
  &__state {
    margin: 14px 0 41px;
    display: flex;
    align-items: center;
    p {
      margin: 0;
      font-size: 18px;
      line-height: 22px;
      font-weight: var.$font-m;
    }
    ul {
      display: flex;
      align-items: center;
      margin: 0 8px 0 16px;
    }
    span {
      font-size: 10px;
      line-height: 15px;
      font-weight: var.$font-r;
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
  .header-cont {
    width: 280px;
    margin-top: 80px;
    padding-bottom: 50px;

    h1 {
      font-size: 35px;
      line-height: 40px;
    }
    p {
      font-size: 14px;
      line-height: 20px;
    }
    &__state {
      margin-bottom: 20px;
    }
  }
}
</style>
