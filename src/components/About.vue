<template>
  <div class="about">
    <div class="container">
      <div class="about-inner">
        <AboutItem
          v-for="about in content"
          :key="about.id"
          :about_data="about"
          :aboutimg_data="about"
        />
        <AboutImage />
      </div>
      <div class="about-inner__line"></div>
    </div>
  </div>
</template>

<script>
import AboutItem from "@/components/UI/AboutItem.vue";
import AboutImage from "@/components/UI/AboutImage.vue";

export default {
  name: "TheAbout",
  components: {
    AboutItem,
    AboutImage,
  },
  data() {
    return {
      content: [
        {
          id: 1,
          title: "Share about the community.",
          desc: "We also ensure that our courses are affordable to anyone and accessible from anywhere in the world. Our exceptional mentors are there to guide our students in pursuit of their life aspirations. Together we build a community that supports each other and make the whole experience into another level. ",
          btn: "Get started",
          link: "Learn more",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.about {
  color: var.$default;
  padding: 92px 0 0;
  &-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    &__line {
      border: 1px solid var.$default;
      opacity: 0.7;
      margin: 98px 0 80px;
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
  .about{
    &-inner{
      flex-direction: column;
      width: 280px;
    }
  }
}
</style>
