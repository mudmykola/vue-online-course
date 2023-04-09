<template>
  <div class="why "
       :style="{
    'background-color':
  bgColor }">
    <div class="container">
      <div class="why-inner "   >
        <WhyContent />
        <WhyImage />

      </div>
    </div>
  </div>
</template>

<script>
import WhyContent from "@/components/UI/WhyContent.vue";
import WhyImage from "@/components/UI/WhyImage.vue";



export default {
  name: "TheWhy",
  components: {
    WhyContent,
    WhyImage,

  },

  data() {
    return {
      bgColor: "#151515",

    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.why {
  padding: 79px 0 82px;

  color: var.$default;
  &-inner {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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
  .why {
    width: 450px;
    padding: 50px 0;
    margin: 0 auto;
    &-inner {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      text-align: center;
      justify-content: center;
      width: 450px;
    }
    &-content{
      width: 100%;
      h2{
        font-size: 40px;
        line-height: 45px;
        margin-bottom: 15px;
      }
      p{
        font-size: 12px;
        line-height: 16px;
      }
      ul{
        gap: 15px;
        margin-top: 50px;
        li{
          width: 250px;
          p{
            font-size: 13px;
            line-height: 17px;
            margin-left: 12px;
          }
        }
      }
    }
    &-img{
      margin-top: 45px;
      &:after{
        width: 50%;
        left: 0;
      }
      img{
        width: 70%;
      }
    }
  }
}
// 320
@media (max-width: 320px) {
  .why {
    width: 320px;
    padding: 50px 0;
    &-inner {
      display: grid;
      width: 260px;
    }
  }
}
</style>
