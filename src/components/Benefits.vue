<template>
  <div class="benefits" :style="{ 'background-color': bgColor }">
    <div class="container">
      <div class="benefits-inner">
        <BenefitsImage />
        <BenefitsItem
          v-for="item in content"
          :key="item.id"
          :benefit_data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BenefitsImage from "@/components/UI/BenefitsImage.vue";
import BenefitsItem from "@/components/UI/BenefitsItem.vue";

export default {
  name: "TheBenefits",
  components: {
    BenefitsImage,
    BenefitsItem,
  },
  data() {
    return {
      content: [
        {
          id: 1,
          title: "Subscription and benefits.",
          desc: "We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level. ",
        },
      ],
      bgColor: "#1F1F1F",
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.benefits {
  color: var.$default;
  padding: 92px 0 111px;
  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
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
  .benefits{
    padding: 50px 0;
    &-inner{
      width: 280px;
      flex-direction: column;
    }
  }
}
</style>
