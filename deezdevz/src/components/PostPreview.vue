
<script>
export default {
  props: {
    title: String,
    date: String,
    path: String,
    readingTime: Number,
    tags: String
  },
};
</script>

<template>
  <div class=" border border-purple-400 rounded my-4 shadow-md shadow-white p-4">
    <g-link :to="this.path">
      <p class=" text-2xl font-bold" >{{ this.title }}</p>
      <p>{{ this.date }} . {{ this.readingTime }} . {{ this.tags }} </p>
    </g-link>
  </div>
</template>
