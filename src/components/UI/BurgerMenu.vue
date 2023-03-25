<template>
  <Slide class="burger">
    <router-link
        v-for="item in links"
        :key="item"
        :to="item.url"
        :exact="item.exact"
        :title="item.title"

    >{{ item.title }}
    </router-link
    >
  </Slide>
</template>

<script>
import {Slide} from "vue3-burger-menu";

export default {
  name: "BurgerMenu",
  components: {
    Slide,
  },
  data() {
    return {
      links: [
        {title: "Home", url: "/", exact: true},
        {title: "Courses", url: "google.com", exact: true},
        {title: "Mentor", url: "/", exact: true},
        {title: "Community", url: "/", exact: true},
      ],
    };
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;

.burger {
  display: none;

  a {
    color: var.$default;
    cursor: pointer;
    text-align: center;
    @extend %dtrans;

    &:hover {
      color: var.$c200;
      @extend %htrans;
    }
  }
}

.bm-menu {
  right: 0;
  background-color: var.$c100;
}

.bm {
  &-burger {
    &-bars {
      background-color: var.$c200;
    }

    &-button {
      left: 220px;
      position: absolute;
      top: 44%;
    }
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
  .burger {
    display: block;
  }
}
</style>
