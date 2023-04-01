<template>
<div class="asked-send"
     v-for="asked_send in ASKED_SEND"
     :key="asked_send.id"
     :style="{'background' : askedBg}"
>
  <div class="asked-send__text">
    <span>{{asked_send.subtitle}}</span>
    <h2>{{asked_send.title}}</h2>
    <p>{{asked_send.desc}}</p>
    <EmailForm />
  </div>
  <div class="asked-send__img">
    <img :src="require('/src/assets/' + asked_send.img)"
         :alt="asked_send.altImg">
  </div>
</div>
</template>

<script>
import EmailForm from "@/components/UI/EmailForm.vue";
import {mapGetters} from "vuex";

export default {
  name: "TheAskedSend",
  props: {
    askedBg: {
      type: String,
      default: "#0F1011",

    }
  },
  components: {
    EmailForm,
  },

  computed: {
    ...mapGetters(['ASKED_SEND']),
  },

}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.asked-send{
display: flex;
  width: 100%;
  border-radius: 40px;
  margin: 98px 0 106px;
  &__text{
    padding: 104px 0 104px 80px;
    span{
      font-size: 18px;
      line-height: 22px;
      font-weight: var.$font-sb;

    }
    h2{
      width: 380px;
      margin-top: 16px;
      font-size: 40px;
      line-height: 50px;
      font-weight: var.$font-sb;
      margin-bottom: 16px;
    }
    p{
      font-size: 16px;
      line-height: 20px;
      opacity: 0.7;
      width: 423px;
      margin-bottom: 41px;
    }
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