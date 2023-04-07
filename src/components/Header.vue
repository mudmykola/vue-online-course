<template>
  <div class="header" :style="bg">
    <Navigation />
    <HeaderContent />

  </div>
</template>

<script>
import bgImage from "@/assets/header-bg.png";
import Navigation from "@/components/Navigation.vue";
import HeaderContent from "@/components/UI/HeaderContent.vue";

export default {
  computed: {
    bg() {
      return {
        "background-image": `url(${bgImage})`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
      };
    },
  },

  name: "TheHeader",
  components: {
    Navigation,
    HeaderContent,

  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.header {
  height: 100vh;
  width: 100%;
}
// 768
@media (max-width: 768px) {
  .header {
    height: 100%;
  }
}
// 600
@media (max-width: 600px) {
  .header {
    height: 100%;
  }
}
// 480
@media (max-width: 480px) {
  .header {
    height: 100%;
  }
}
// 320
@media (max-width: 320px) {
  .header {
    height: 100%;
  }
}
</style>
