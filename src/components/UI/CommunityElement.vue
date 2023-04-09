<template>
  <div class="community-element">
    <div class="community-element__grow">
      <h2>
        {{ community_data.gr }}
      </h2>
    </div>
    <div class="community-element__box">
      <div class="community-element__net">
        <h2>
          {{ community_data.net }}
        </h2>
      </div>
      <div class="community-element__learn">
        <h2>
          {{ community_data.lea }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityElement",
  props: {
    community_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.community-element {
  margin-top: 109px;
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__grow {
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @extend %dtrans;
    cursor: pointer;

    &:after {
      position: absolute;
      content: "";
      background-image: url("/src/assets/svg/community-arrow.svg");
      background-repeat: no-repeat;
      display: block;
      width: 122px;
      height: 122px;
      left: -55%;
      top: 42%;
    }
    &:before {
      position: absolute;
      content: "";
      background-image: url("/src/assets/svg/community-arrow.svg");
      background-repeat: no-repeat;
      display: block;
      width: 122px;
      height: 122px;
      right: -42%;
      transform: rotate(90deg);
      top: 35%;
    }
  }
  &__grow,
  &__net,
  &__learn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var.$default;
    width: 382px;
    height: 382px;
    border-radius: 100%;
    cursor: pointer;
    &:hover{
      background: var.$c200;
      @extend %htrans;
    }
    h2 {
      font-size: 37px;
      line-height: 42px;
      font-weight: var.$font-sb;
    }
  }
  &__net {
    margin-right: 258px;
    position: relative;

    &:after {
      position: absolute;
      content: "";
      background-image: url("/src/assets/svg/community-arrow.svg");
      background-repeat: no-repeat;
      display: block;
      width: 122px;
      height: 122px;
      right: -50%;
      top: 26%;
      transform: rotate(180deg);
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
  .community-element {
    width: 450px;
    margin-top: 80px;
    gap: 90px;
    display: grid;
    &__grow,
    &__net,
    &__learn {
      width: 200px;
      height: 200px;
    }
    &__grow {
      &:after {
        display: none;
      }
      &:before {
        right: 43%;
        top: 110%;
        background-size: contain;
        width: 50px;
        height: 50px;
      }
    }
    &__net {
      margin: 0;
      &:after {
        right: 43%;
        top: 110%;
        width: 50px;
        height: 50px;
        background-size: contain;
        transform: rotate(90deg);
      }
    }
    &__box {
      gap: 90px;
      flex-direction: column;
    }
  }
}
// 320
@media (max-width: 320px) {
  .community-element {
    width: 260px;
    margin-top: 80px;
    gap: 90px;
    display: grid;
    &__grow,
    &__net,
    &__learn {
      width: 200px;
      height: 200px;
    }
    &__grow {
      &:after {
        display: none;
      }
      &:before {
        right: 43%;
        top: 110%;
        background-size: contain;
        width: 50px;
        height: 50px;
      }
    }
    &__net {
      margin: 0;
      &:after {
        right: 43%;
        top: 110%;
        width: 50px;
        height: 50px;
        background-size: contain;
        transform: rotate(90deg);
      }
    }
    &__box {
      gap: 90px;
      flex-direction: column;
    }
  }
}
</style>
