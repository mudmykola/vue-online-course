<template>
  <div class="offer">
    <div class="container">
      <OfferContent
        v-for="offer in OFFER_CONTENT"
        :key="offer.id"
        :offer_data="offer"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import OfferContent from "../components/UI/OfferContent.vue";
export default {
  name: "TheOffer",
  components: {
    OfferContent,
  },
  computed: {
    ...mapGetters(["OFFER_CONTENT"]),
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.offer {
  color: var.$default;
}
</style>
