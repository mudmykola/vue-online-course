<template>
  <div class="benefits-item">
    <h2>{{ benefit_data.title }}</h2>
    <p>{{ benefit_data.desc }}</p>
    <ul>
      <li v-for="benefit in BENEFITS_CHECK" :key="benefit.id">
        <img
          :src="require('/src/assets/' + benefit.check)"
          :alt="benefit.alt"
        />
        <div class="benefits-item__items">
          <h3>{{ benefit.text }}</h3>
          <span>{{ benefit.desc }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheBenefitsItem",
  props: {
    benefit_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["BENEFITS_CHECK"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.benefits-item {
  width: 530px;
  margin-left: 207px;
  h2 {
    font-size: 48px;
    line-height: 53px;
    font-weight: var.$font-m;
    margin-bottom: 36px;
  }
  p {
    font-size: 15px;
    line-height: 20px;
    font-weight: var.$font-r;
  }
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 38px;
    margin-top: 50px;
    li {
      display: flex;

      img {
        margin-right: 12px;
        width: 28px;
        height: 28px;
      }
    }
  }
  &__items {
    h3 {
      font-size: 17px;
      line-height: 22px;
      font-weight: var.$font-m;
    }
    span {
      font-size: 13px;
      line-height: 20px;
      font-weight: var.$font-r;
      opacity: 0.8;
      margin-top: 3px;
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
  .benefits-item {
    width: 260px;
    margin: 0;
    h2 {
      margin-top: 30px;
      font-size: 40px;
      line-height: 45px;
    }
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
