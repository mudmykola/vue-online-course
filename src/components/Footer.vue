<template>
  <footer :class="footer">
    <label for="dark-mode-switch" class="toggle">
      <input id="dark-mode-switch" type="checkbox" v-model="isDarkMode">
      <span class="toggle-switch"></span>
    </label>

  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data(){
    return{
      isDarkMode: false,
    }
  },
  computed: {
  footer(){
    return {
      'dark-mode': this.isDarkMode,
      'light-mode': !this.isDarkMode,
    }
  },
  },
};
</script>

<style lang="scss">
@use "src/styles/variables" as var;
.dark-mode {
  background-color: var.$c100;
  color: var.$default;
}

.light-mode {
  background-color: var.$default;
  color: var.$c100;
}
.toggle {
  display: inline-block;
  position: relative;
  cursor: pointer;
}

.toggle input[type="checkbox"] {
  display: none;
}

.toggle .toggle-switch {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 14px;
  border-radius: 12px;
  background-color: #ccc;
  transition: background-color 0.2s ease-in-out;
}

.toggle input[type="checkbox"]:checked + .toggle-switch {
  background-color: #3b3b3b;
}


</style>
