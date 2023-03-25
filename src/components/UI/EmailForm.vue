<template>
  //Form
  <form class="email" @submit.prevent="sendEmail">
    <label for="email" v-for="(btn, idx) in buttons" :key="idx">
      <input
        class="email-input"
        placeholder="Your email"
        required
        v-model="email"
        type="email"
        name="email"
      />
      <button type="submit">{{ btn.link }}</button>
    </label>

    <span v-if="msg.email">{{ msg.email }}</span>
  </form>
</template>

<script>
import emailjs from "emailjs-com";
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
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_4w4kz6j",
          "template_vujjikb",
          e.target,
          "qu0ktEzf6O9DZCggs",
          {
            email: this.email,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      this.email = "";
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
  .email {
    label {
      input {
        width: 160px;
        height: 35px;
        border-radius: 8px 0 0 8px;
        font-size: 12px;
        line-height: 20px;
      }
      button {
        display: block;
        height: 35px;
        padding: 0 10px;
        font-size: 15px;
        line-height: 20px;
        border-radius: 0 8px 8px 0;
      }
    }
  }
}
</style>
