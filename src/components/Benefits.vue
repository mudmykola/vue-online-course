<template>
  <div class="benefits" :style="{ 'background-color': bgColor }">
    <div class="container">
      <div class="benefits-inner">
        <BenefitsImage />
        <BenefitsItem
          v-for="item in content"
          :key="item.id"
          :benefit_data="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BenefitsImage from "@/components/UI/BenefitsImage.vue";
import BenefitsItem from "@/components/UI/BenefitsItem.vue";

export default {
  name: "TheBenefits",
  components: {
    BenefitsImage,
    BenefitsItem,
  },
  data() {
    return {
      content: [
        {
          id: 1,
          title: "Subscription and benefits.",
          desc: "We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level. ",
        },
      ],
      bgColor: "#1F1F1F",
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.benefits {
  color: var.$default;
  padding: 92px 0 111px;
  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

// 768
@media (max-width: 768px) {
}
// 600
@media (max-width: 600px) {
  .benefits {
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
    &-inner {
      width: 550px;
      flex-direction: column;
      margin: 0 auto;
    }
    &-image{
      &:after{
        width: 50%;
        left: 0;
      }
      img{
        width: 70%;
      }
    }
    &-item{
      padding-top: 45px;
      width: 100%;
      margin: 0 auto;
      ul{
        gap: 15px;
        margin-top: 50px;
        li{
          width: 250px;
          text-align: left;
          margin: 0 auto;
          h3{
            font-size: 12px;
            line-height: 16px;

          }
          span{
            font-size: 13px;
            line-height: 17px;

          }
        }
      }
      h2{
        font-size: 35px;
        line-height: 40px;
        margin-bottom: 15px;
      }
      p{
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}
// 480
@media (max-width: 480px) {
  .benefits {
    margin: 0 auto;
    text-align: center;
    padding: 50px 0;
    &-inner {
      width: 450px;
      flex-direction: column;
      margin: 0 auto;
    }
    &-image{
      &:after{
        width: 50%;
        left: 0;
      }
      img{
        width: 70%;
      }
    }
    &-item{
      padding-top: 45px;
      width: 100%;
      margin: 0 auto;


      ul{
        gap: 15px;
        margin-top: 50px;
        li{
          width: 250px;
          text-align: left;
          h3{
            font-size: 12px;
            line-height: 16px;

          }
          span{
            font-size: 13px;
            line-height: 17px;

          }
        }
      }
      h2{
        font-size: 35px;
        line-height: 40px;
        margin-bottom: 15px;
      }
      p{
        font-size: 12px;
        line-height: 16px;
      }
    }
  }
}
// 320
@media (max-width: 320px) {
  .benefits {
    padding: 50px 0;
    &-inner {
      width: 260px;
      flex-direction: column;
    }
  }
}
</style>
