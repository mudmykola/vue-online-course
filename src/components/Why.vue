<template>
  <div class="why" :style="{ 'background-color': bgColor }">
    <div class="container">
      <WhyContent />
      <WhyImage />
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
      bgColor: "#1E1E1E",
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.why {
  padding-top: 79px;
  color: var.$default;
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
