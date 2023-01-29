<template>
  <div class="about-image">
    <img :src="img" alt="alt" />
  </div>
</template>

<script>
import aboutimgs from "@/assets/about-img.png";
export default {
  name: "TheAboutImage",
  data() {
    return {
      img: aboutimgs,
      alt: "about-img",
      type: Object,
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.about-image {
  position: relative;
  &::after {
    position: absolute;
    content: "";
    display: inline-block;
    width: 500px;

    height: 50%;
    background: var.$c200;
    bottom: 0%;
    right: 0%;
    z-index: -1;
    border-radius: 8px;
  }
}
</style>
