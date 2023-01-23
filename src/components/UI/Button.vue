<template>
  <button v-for="(btn, idx) in buttons" :key="idx" class="buttonStyle">
    {{ btn.link }}
  </button>
</template>

<script>
export default {
  name: "TheButton",
  data() {
    return {
      buttons: [
        {
          link: "Register now",
          state: true,
        },
      ],
    };
  },
  computed: {
    btnStates() {
      return this.buttons.map((btn) => btn.state);
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.buttonStyle {
  background: var.$c200;
  color: var.$default;
  border: none;
  font-size: 18px;
  line-height: 22px;
  font-weight: var.$font-m;
  padding: 14px 36px;
  border-radius: 15px;
  @extend %dtrans;
  &:hover {
    background: var.$c300;
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
