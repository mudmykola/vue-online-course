<template>
  <div class="footer-content" :style="{'background' : footerBg}">
    <div class="footer-content__logo" v-for="logo in FOOTER_LOGO" :key="logo">
      <a :href="logo.logoUrl">{{ logo.logoName }}</a>
    </div>
    <div class="footer-content__contact" v-for="contact in FOOTER_CONTACT"
         :key="contact">
      <p>{{ contact.street }}</p>
      <a :href="'tel:' +contact.phoneUrl">{{ contact.phone }}</a>
      <a :href="'mail:' +contact.emailUrl">{{ contact.email }}</a>
    </div>
    <div class="footer-content__menu">
      <ul>
        <li v-for="item in FOOTER_MENU" :key="item">
          <a :href="item.url">{{ item.name }}</a>

        </li>
        <div class="footer-content__copy" v-for="copy in FOOTER_COPY"
             :key="copy">
          <p :style="{marginTop: '40px'}">{{ copy.copy }}</p>
        </div>

      </ul>
    </div>
    <div class="footer-content__social">
      <a v-for="social in FOOTER_SOCIAL" :key="social"
         :href="social.url">{{
          social.label
        }}</a>
    </div>
  </div>

</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "FooterContent",
  components: {

  },
  props: {
    footerBg: {
      type: String,
      default: '#1f1f1f',
    },

  },
  computed: {
    ...mapGetters(['FOOTER_LOGO']),
    ...mapGetters(['FOOTER_CONTACT']),
    ...mapGetters(['FOOTER_MENU']),
    ...mapGetters(['FOOTER_COPY']),
    ...mapGetters(['FOOTER_SOCIAL']),
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.footer-content {
  padding: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &__logo {
    a {
      font-size: 24px;
      line-height: 30px;
      font-weight: var.$font-m;
    }
  }

  &__contact {
    width: 300px;
    display: flex;
    flex-direction: column;

    p {
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 50px;
    }

    a {
      font-size: 16px;
      line-height: 20px;
      @extend %dtrans;

      &:hover {
        color: var.$c200;
        @extend %htrans;
      }
    }

    a + a {
      margin-top: 16px;
    }
  }

  &__menu {
    a {
      font-size: 16px;
      line-height: 20px;
      @extend %dtrans;

      &:hover {
        color: var.$c200;
        @extend %htrans;
      }
    }

    p {
      //margin-top: 58px;
      font-size: 12px;
      line-height: 18px;

    }

    li + li {
      margin-top: 16px;
    }

  }

  &__social {
    display: flex;
    flex-direction: column;

    a {
      font-size: 16px;
      line-height: 20px;
      font-weight: var.$font-m;
      @extend %dtrans;

      &:hover {
        color: var.$c200;
        @extend %htrans;
      }
    }

    a + a {
      margin-top: 16px;
    }
  }

}
// 768
@media (max-width: 768px) {
  .footer-content{
    padding: 20px;
    &__contact{
      width: 150px;
    }
    &__copy{
      p{
        margin-top: 45px;
      }
    }
  }
}

// 600
@media (max-width: 600px) {
  .footer-content{
    flex-direction: column;
    padding: 15px;
    &__contact{
      width: 100%;
    }
    &__menu{
      margin-top: 15px;
    }
    &__social{
      margin-top: 15px;
    }
    &__copy{
      display: none;
    }
  }
}

// 480
@media (max-width: 480px) {
  .footer-content{
    flex-direction: column;
    padding: 15px;
    &__contact{
      width: 100%;
    }
    &__menu{
      margin-top: 15px;
    }
    &__social{
      margin-top: 15px;
    }
    &__copy{
      display: none;
    }
  }
}

// 320
@media (max-width: 320px) {
 .footer-content{
   flex-direction: column;
   padding: 15px;
   &__contact{
     width: 100%;
   }
   &__menu{
     margin-top: 15px;
   }
   &__social{
     margin-top: 15px;
   }
   &__copy{
     display: none;
   }
 }
}
</style>