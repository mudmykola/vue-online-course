<template>
  <div class="container">
    <div class="navigation">
      <router-link
        class="navigation-logo"
        v-for="logo in logoLinks"
        :key="logo"
        :class="logo.class"
        :to="logo.url"
        :exact="logo.exact"
        :title="logo.title"
        :target="_blank"
      >
        {{ logo.title }}
      </router-link>
      <nav class="navigation-menu">
        <router-link
          v-for="link in links"
          :key="link"
          class="navigation-menu__link"
          :to="link.url"
          :exact="link.exact"
          :title="link.title"
        >
          {{ link.title }}
        </router-link>
      </nav>
      <BurgerMenu />
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";
import BurgerMenu from "@/components/UI/BurgerMenu.vue";
export default {
  name: "TheNavigation",
  data() {
    return {
      links: [
        { title: "Home", url: "/", exact: true },
        { title: "Courses", url: "/", exact: true },
        { title: "Mentor", url: "/", exact: true },
        { title: "Community", url: "/", exact: true },
      ],
      logoLinks: [
        {
          title: "Edumena",
          url: "/",
          exact: true,
          type: String,
        },
      ],
    };
  },
  components: {
    Button,
    BurgerMenu,
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;

  &-logo {
    color: var.$default;
    font-size: 24px;
    line-height: 35px;
    font-weight: var.$font-m;
  }
  &-menu {
    display: flex;
    gap: 60px;
    &__link {
      color: var.$default;
      font-size: 16px;
      line-height: 24px;
      font-weight: var.$font-m;
      @extend %dtrans;
      &:hover {
        color: var.$c200;
        @extend %htrans;
      }
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
  .navigation {
    position: relative;
    width: 270px;
    padding-top: 20px;
    &-menu {
      display: none;
    }
  }
}
</style>
