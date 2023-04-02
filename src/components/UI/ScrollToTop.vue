<template>
  <div class="scroll-to__top" v-show="showBtn" @click="toTop">
    <p>Top</p>
  </div>
</template>

<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      showBtn: false,
    };
  },
  created() {
    this.showBtn = this.$route.meta.scrollTop || false;
    this.$router.afterEach((to) => {
      this.showBtn = to.meta.scrollTop || false;
    });
  },
  methods: {
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.scroll-to__top {
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var.$c200;
  color: #fff;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
}

.active {
  display: block;
}
</style>
