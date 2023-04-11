<template>
  <div class="about-image">
    <img :src="img" alt="alt"/>
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

  img {
    @extend %dtrans;
  }

  img:hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    @extend %htrans;
  }

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
  .about-image {
    display: none;

  }
}


// 320
@media (max-width: 320px) {
  .about-image {
    &-image {
      margin-top: 45px;

      &:after {
        width: 50%;
        left: 0;
      }

      img {
        width: 70%;
      }
    }
  }
}
</style>
