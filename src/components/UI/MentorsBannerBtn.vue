<template>
  <button class="mentors-banner__btn" :style="btnStyle" @mouseover="hover = true" @mouseleave="hover = false">
    <span :style="textStyle">Get Started</span>
  </button>
</template>

<script>
export default {
  name: 'MentorsBannerBtn',
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    btnStyle() {
      return {
        backgroundColor: this.hover ? '#1f1f1f' : '#FFFF',
        color: this.hover ? '#FFFFFF' : '#F31D1D',
        width: '327px',
        height: '54px',
        borderRadius: '16px',
        border: 'none',
        cursor: 'pointer',

      };
    },
    textStyle() {
      return {
        fontSize: '16px',
        fontWeight: 'bold',
      };
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.mentors-banner__btn {
  @extend %dtrans;
  &:hover{
    background-color: #F31D1D;
    @extend %htrans;
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

}
</style>
