<template>
  <Header />
  <Why />
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Why from "@/components/Why.vue";

export default {
  name: "TheHome",
  components: {
    Header,
    Why,
  },
};
</script>
