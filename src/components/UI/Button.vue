<template>
  <button v-for="(btn, idx) in buttons" :key="idx" :class="['buttonStyle', {
    [buttonColor]: true }]"
  >
    <span :style="{ color: buttonTextColor }"> {{ btn.link }}</span>
  </button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    buttonColor: {
      type: String,
      default: "default",
    },
    buttonLink: {
      type: String,
      default: "Register now",
    },
    buttonTextColor: {
      type: String,
      required: true,
      default: "#fff",
    },

  },
  data() {
    return {
      buttons: [
        {
          link: this.buttonLink,
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
  .buttonStyle{
    width: 148px;
    font-size: 12px;
    line-height: 18px;
    height: 50px;
  }

}

// 600
@media (max-width: 600px) {
  button {
    display: none;
  }
}

// 480
@media (max-width: 480px) {

  button {
    display: none;
  }

}

// 320
@media (max-width: 320px) {


  button {
    display: none;
  }
}
</style>
