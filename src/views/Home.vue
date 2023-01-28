<template>
  <Header />
  <Why />
  <Benefits />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Why from "@/components/Why.vue";
import Benefits from "@/components/Benefits.vue";

export default {
  name: "TheHome",
  components: {
    Header,
    Why,
    Benefits,
  },
};
</script>
