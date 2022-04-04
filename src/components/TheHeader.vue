<script>
export default {
  data() {
    return {
      lightMode: true,
    };
  },
  computed: {
    darkModeClass() {
      return {
        "dark:bg-slate-900 dark:text-white": this.lightMode === true,
      };
    },
    mode(){
        return this.lightMode ? 'Light Mode' : 'Dark Mode'
    }
  },
  methods:{
      toggleLightMode(){
          this.lightMode = !this.lightMode
          console.log('Bruh');
      }
  }
};
</script>

<template>
  <div class="header bg-white" :class="darkModeClass">
      <h1>
          Bruh, welcome to DeezDevz
      </h1>
      <button class=" bg-red-600" @click="toggleLightMode">{{mode}}</button>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 150px;
}
</style>