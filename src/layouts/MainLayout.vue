<template>
  <main class="main-content">
    <router-view/>
    <ScrollToTop :scrollToTop="scrollToTop" @click="scrollToTop" />
  </main>
  <Footer/>
</template>

<script>
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/UI/ScrollToTop.vue";

export default {
  components: {Footer, ScrollToTop,},
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>
