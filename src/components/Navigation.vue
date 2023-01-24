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
      <nav class="navigation-menu" :class="{ active: isActive }">
        <router-link
          v-for="link in links"
          :key="link"
          class="navigation-menu__link"
          :class="link.class"
          active-class="active"
          :to="link.url"
          :exact="link.exact"
          :title="link.title"
          @click="closeNavigation"
        >
          {{ link.title }}
        </router-link>
      </nav>
      <Button />
    </div>
  </div>
</template>

<script>
import Button from "@/components/UI/Button.vue";
export default {
  name: "TheNavigation",
  data() {
    return {
      isActive: false,
      isMobile: true,
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
        },
      ],
    };
  },
  components: {
    Button,
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
}
</style>
