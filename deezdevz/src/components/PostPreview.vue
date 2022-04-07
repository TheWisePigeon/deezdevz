
<script>
export default {
  props: {
    title: String,
    date: String,
    path: String,
    readingTime: String,
    summary: String
  },
};
</script>

<template>
  <div class=" py-14">
    <g-link :to="this.path">
      <p class=" text-2xl font-bold text-purple-500" >{{ this.title }}</p>
      <p class=" text-sm md:text-lg lg:text-2xl">{{ this.date }} · {{ this.readingTime }}</p>
      <p class=" text-sm md:text-xs lg:text-base"> {{ this.summary }} </p>
    </g-link>
  </div>
</template>
