<template>
  <Header />
  <Why />
  <Benefits />
  <About />
  <Community />
  <Offer />
  <Mentors />
  <Reviews />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Why from "@/components/Why.vue";
import Benefits from "@/components/Benefits.vue";
import About from "@/components/About.vue";
import Community from "@/components/Community.vue";
import Offer from "@/components/Offer.vue";
import Mentors from "@/components/Mentors.vue";
import Reviews from "@/components/Reviews.vue";

export default {
  name: "TheHome",
  components: {
    Header,
    Why,
    Benefits,
    About,
    Community,
    Offer,
    Mentors,
    Reviews,
  },
};
</script>
