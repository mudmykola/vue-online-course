<template>
  <div
    class="header"
    :style="'background:url(' + bgImg + ' ) center top no-repeat '"
  >
    <Navigation />
  </div>
</template>

<script>
import bgImage from "@/assets/header-bg.png";
import Navigation from "@/components/Navigation.vue";

export default {
  data() {
    return {
      bgImg: bgImage,
    };
  },
  name: "TheHeader",
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
.header {
  height: 100vh;
  width: 100%;
}
</style>
