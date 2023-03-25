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

    height: 80%;
    background: var.$c200;
    bottom: 0%;
    right: 0%;
    z-index: -1;
    border-radius: 8px;
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
  .about-image {
    margin-top: 30px;
    &:after {
      width: 270px;
    }
  }
}
</style>
