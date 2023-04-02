<template>
  <div class="why "
       :style="{
    'background-color':
  bgColor }">
    <div class="container">
      <div class="why-inner "   >
        <WhyContent />
        <WhyImage />
      </div>
    </div>
  </div>
</template>

<script>
import WhyContent from "@/components/UI/WhyContent.vue";
import WhyImage from "@/components/UI/WhyImage.vue";



export default {
  name: "TheWhy",
  components: {
    WhyContent,
    WhyImage,
  },

  data() {
    return {
      bgColor: "#151515",

    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.why {
  padding: 79px 0 82px;

  color: var.$default;
  &-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
.element-animation {
  /* стилі для анімації */
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.element-show {
  opacity: 1;
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
  .why {
    width: 320px;
    padding: 50px 0;
    &-inner {
      display: grid;
      width: 260px;
    }
  }
}
</style>
