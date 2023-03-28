<template>
  <div class="mentors-banner" :style="{'background-color': bgColor}"
  >
    <div class="mentors-banner__box">
      <h2>{{ mentorsBanner_data.bannerTitle }}</h2>
      <Button
          :buttonStyles="{ backgroundColor: '#fff' }"
          class="mentors-banner__btn"
          :buttonColor="'white'"
          button-text-color="#1f1f1f"
          :buttonLink="'Get Started'"/>
    </div>

  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";

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
    Button,
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
  }

}
</style>