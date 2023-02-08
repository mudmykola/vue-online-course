<template>
  <div class="why-img">
    <img :src="img" :alt="alt" />
  </div>
</template>

<script>
import image from "@/assets/why-img.png";
export default {
  name: "TheWhyImage",
  data() {
    return {
      type: Object,
      img: image,
      alt: "why-img-1",
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.why-img {
  position: relative;
  z-index: 1;
  &::after {
    position: absolute;
    content: "";
    display: block;
    background: var.$c200;
    width: 500px;
    height: 80%;
    left: -12%;
    z-index: -1;
    bottom: 0;
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
  .why-img{
    margin-top: 30px;
    &:after{
      width: 280px;
      left: -5%;
    }
  }
}
</style>
