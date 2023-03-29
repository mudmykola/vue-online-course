<template>
<div :class="{'reviews': isReviews}">
  <div class="container">
    <ReviewsContent v-for="item in content" :key="item.id"
                    :reviewsCont_data="item" />
  </div>

</div>
</template>

<script>
import ReviewsContent from "@/components/UI/ReviewsContent.vue";
export default {
  name: 'TheReviews',
  data(){
    return {
      content: [
        {
          id:1,
          title: 'Client Say’s About Us',
          desc: 'These are things that clients who have used our features and works says.',
        }
      ],
    }
  },
  props: {
    isReviews:{
      type: Boolean,
      default: false,
    }
  },
  components: {
    ReviewsContent,
  },

}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.reviews{

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