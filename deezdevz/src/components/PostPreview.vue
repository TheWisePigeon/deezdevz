
<script>
export default {
  props: {
    title: String,
    date: String,
    path: String,
    readingTime: String,
  },
};
</script>

<template>
  <div class=" border border-purple-400 rounded my-4 shadow-md shadow-white">
    <g-link :to="this.path">
      <h1>{{ this.title }}</h1>
      <p>{{ this.date }}</p>
    </g-link>
  </div>
</template>

<style scoped>
</style>