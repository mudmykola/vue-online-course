<template>
  <form class="email" method="POST">
    <label for="email" v-for="(btn, idx) in buttons" :key="idx">
      <input
        class="email-input"
        for="email"
        type="email"
        placeholder="Your email"
        required
        v-model="email"
      />
      <button>{{ btn.link }}</button>
    </label>

    <span v-if="msg.email">{{ msg.email }}</span>
  </form>
</template>

<script>
export default {
  name: "EmailForm",
  data() {
    return {
      showModal: false,
      email: "",
      msg: [],
      buttons: [
        {
          link: "Get started",
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
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Please enter a valid email address";
      }
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.email {
  label {
    display: flex;
    align-items: center;
    width: 557px;

    input {
      width: 367px;
      height: 54px;
      color: var.$default;
      font-size: 18px;
      line-height: 22px;
      color: var.$default;
      font-weight: var.$font-r;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 15px 0 0 15px;
      background: transparent;
    }
    button {
      height: 54px;
      border: none;
      background: var.$c200;
      padding: 14px 43px;
      border-radius: 0 15px 15px 0;
      font-size: 18px;
      line-height: 22px;
      color: var.$default;
      font-weight: var.$font-m;
      @extend %dtrans;
      &:hover {
        background: var.$c300;
        @extend %htrans;
      }
    }
  }

  span {
    color: var.$c200;
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
