<template>
  <div class="benefits-image">
    <img :src="img" alt="alt" />
  </div>
</template>

<script>
import image from "@/assets/benefits-img.png";
export default {
  name: "TheBenefitsImage",
  data() {
    return {
      img: image,
      alt: "benefits-img",
      type: Object,
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.benefits-image {
  position: relative;
  z-index: 999;
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 100%;
    height: 50%;
    background: var.$c200;
    bottom: 0;
    right: 7%;
    border-radius: 8px;
    z-index: -1;
  }
}
</style>
