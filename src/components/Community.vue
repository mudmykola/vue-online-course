<template>
  <div class="container">
    <div class="community">
      <h2>{{ title }}</h2>
      <CommunityElement v-for="item in content" :key="item"
                        :community_data="item"/>
    </div>
  </div>

</template>

<script>
import CommunityElement from "@/components/UI/CommunityElement.vue";

export default {
  name: "TheCommunity",

  data() {
    return {
      title: 'Share about the community.',
      content: [
        {
          net: 'Network',
          gr: 'Grow',
          lea: 'Learn',
        }
      ],
    }
  },
  components: {
    CommunityElement,
  }
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.community {
  color: var.$default;
  text-align: center;

  h2 {
    font-size: 48px;
    line-height: 53px;
    font-weight: var.$font-m;
  }
}

// 768
@media (max-width: 768px) {
  .community {
    max-width: 750px;
    margin: 0 auto;
  }
}

// 600
@media (max-width: 600px) {
  .community {
    width: 550px;
    h2 {
      font-size: 35px;
      line-height: 40px;
    }
  }
}

// 480
@media (max-width: 480px) {
  .community {
    width: 450px;
    h2 {
      font-size: 35px;
      line-height: 40px;
    }
  }
}

// 320
@media (max-width: 320px) {
  .community {
    width: 280px;
    h2 {
      font-size: 30px;
      line-height: 35px;
    }

  }
}
</style>
