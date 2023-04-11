<template>
  <footer class="footer" :style="{color: footerColor}">
    <div class="container">
      <div class="footer-inner">
        <FooterContent/>
      </div>
    </div>
  </footer>
</template>
<script>
import FooterContent from "@/components/UI/FooterContent.vue";


export default {
  name: "TheFooter",
  components: {
    FooterContent,

  },
  props: {
    footerColor: {
      type: String,
      required: true,
      default: '#fff',
    },
  },

};
</script>

<style lang="scss">
@use "src/styles/variables" as var;


// 320
@media (max-width: 320px) {
  .footer {
    width: 290px;
    margin: 0 auto;

    &-inner {
      width: 100%;
    }
  }
}

</style>
