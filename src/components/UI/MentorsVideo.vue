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
      <li>
        <div class="mentors-video__box">
          <video src=""></video>
          <h2></h2>
          <p></p>
          <div class="mentors-video__box--like">
            <span></span>
            <p></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
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
}
</script>

<style scoped>

</style>