<template>
  <div
    class="header"
    :style="'background:url(' + bgImg + ' ) center top no-repeat '"
  >
    <Navigation />
    <HeaderContent />
  </div>
</template>

<script>
import bgImage from "@/assets/header-bg.png";
import Navigation from "@/components/Navigation.vue";
import HeaderContent from "@/components/UI/HeaderContent.vue";

export default {
  data() {
    return {
      bgImg: bgImage,
    };
  },
  name: "TheHeader",
  components: {
    Navigation,
    HeaderContent,
  },
};
</script>

<style lang="scss">
.header {
  height: 100vh;
  width: 100%;
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
}
</style>
