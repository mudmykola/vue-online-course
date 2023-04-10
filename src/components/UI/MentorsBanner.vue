<template>
  <div class="mentors-banner" :style="{'background-color': bgColor}"
  >
    <div class="mentors-banner__box">
      <h2>{{ mentorsBanner_data.bannerTitle }}</h2>
      <MentorsBannerBtn/>
    </div>

  </div>
</template>

<script>
import MentorsBannerBtn from "@/components/UI/MentorsBannerBtn.vue";

export default {
  name: "MentorsBanner",
  props: {
    mentorsBanner_data: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },

  },
  data() {
    return {
      bgColor: " #f31d1d",
    }
  },
  components: {
    MentorsBannerBtn,
  },
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.mentors-banner {
  margin-top: 71px;
  border-radius: 28px;

  &__box {
    padding: 57px 57px 60px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
      font-size: 40px;
      line-height: 50px;
      font-weight: var.$font-sb;
      width: 400px;
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
  .mentors-banner{

    width: 450px;
    margin: 0 auto;
    &__box{

      flex-direction: column;
      h2{
        width: 100%;
        font-size: 35px;
        line-height: 40px;
        margin-bottom: 10px;
        text-align: center;
      }
    }
    &__btn{
      display: block;
      max-width: 90%;
      button{

      }
    }
  }
}
// 320
@media (max-width: 320px) {
.mentors-banner{
  width: 290px;
  &__box{

    flex-direction: column;
    h2{
      width: 100%;
      font-size: 20px;
      line-height: 25px;
      margin-bottom: 10px;
      text-align: center;
    }
  }
  &__btn{
    display: block;
    max-width: 90%;
button{

}
  }
}
}
</style>