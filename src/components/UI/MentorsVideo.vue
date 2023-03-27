<template>
<div class="mentors-video">
<!-- MentorsVideo Title  -->
  <div class="mentors-video__title">
    <h2>{{mentorsVideo_data.title}}</h2>
    <p>{{mentorsVideo_data.desc}}</p>
  </div>
<!-- MentorsVideo List -->
  <div class="mentors-video__list">
    <ul>
      <li v-for="item in MENTORS_VIDEO" :key="item.id">
        <div class="mentors-video__box">
          <video :src="require('/src/assets/video/' + item.video)"></video>
          <h2>{{item.title}}</h2>
          <p>{{item.desc}}</p>
          <div class="mentors-video__box--like" v-for="item in MENTORS_STARS"
               :key="item.id">
            <img :src="require('/src/assets/' + item.iconStars)"
                 :alt="item.iconAlt">
            <p></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "MentorsVideo",
  props:{
    mentorsVideo_data: {
      type: Object,
      default() {
        return {};
      },
    }
  },
  computed: {
    ...mapGetters(['MENTORS_VIDEO']),
   ...mapGetters(['MENTORS_STARS']),

  }
}
</script>

<style scoped>

</style>