<template>
  <main class="main-content">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer";

export default {
  components: { Footer },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>
