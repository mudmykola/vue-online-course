<template>
<div class="mentors">
  <div class="container">
    <MentorsContent />
  </div>
</div>
</template>

<script>
import MentorsContent from "@/components/UI/MentorsContent.vue";
export default {
  name: "TheMentors",
  components:{
    MentorsContent,
}
}
</script>

<style lang="scss">
@use "src/styles/variables" as var;
</style>