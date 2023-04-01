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
  img{
    @extend %dtrans;
  }

  img:hover{
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    @extend  %htrans;
  }
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
.benefits-image{
  &:after{
    right: 5%;
  }
}
}
</style>
