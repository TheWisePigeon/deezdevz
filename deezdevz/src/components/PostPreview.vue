
<script>
export default {
    props:{
        title: String,
        date: String,
        path: String
    }
}
</script>

<template>
    <g-link :to="this.path">
        <h1>{{this.title}}</h1>
        <p>{{this.date}}</p>
    </g-link>
</template>

<style scoped>

</style>