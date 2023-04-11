<template>
  <div class="mentors" :style="{ 'background-color': bgColor }">
    <div class="container">
      <MentorsContent v-for="item in content" :key="item.id"
                      :mentors_data="item"/>
    </div>
  </div>
</template>

<script>
import MentorsContent from "@/components/UI/MentorsContent.vue";

export default {
  name: "TheMentors",
  components: {
    MentorsContent,
  },
  data() {
    return {
      content: [
        {
          id: 1,
          title: 'Mentors available 24/7',
          desc: "Mentors around the world  teach millions of participants\n" +
              "on Edumena. We provide the tools and skills",

        }
      ],
      bgColor: "#1F1F1F",
    }
  }

}
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.mentors {
  color: var.$default;
  padding-bottom: 81px;
}
// 768
@media (max-width: 768px) {
  .mentors{
    margin-top: 50px;
  }
}
// 600
@media (max-width: 600px) {
  .mentors{
    margin-top: 50px;
  }
}
// 480
@media (max-width: 480px) {
  .mentors{
    margin-top: 50px;
  }
}
// 320
@media (max-width: 320px) {

}
</style>