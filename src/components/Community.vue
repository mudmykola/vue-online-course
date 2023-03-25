<template>
  <div class="container">
    <div class="community">
      <h2>{{title}}</h2>
      <CommunityElement  v-for="item in content" :key="item" :community_data="item"/>
    </div>
  </div>

</template>

<script>
import CommunityElement from "@/components/UI/CommunityElement.vue";
export default {
  name: "TheCommunity",

  data (){
    return{
      title : 'Share about the community.',
      content: [
        {
          net: 'Network',
          gr: 'Grow',
          lea: 'Learn',
        }
      ],
    }
  },
  components:{
    CommunityElement,
  }
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.community{
  color: var.$default;
  text-align: center;
  h2{
    font-size: 48px;
    line-height: 53px;
    font-weight: var.$font-m;
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
.community{
  width: 280px;
  h2{
    font-size: 40px;
    line-height: 45px;
  }
}
}
</style>
