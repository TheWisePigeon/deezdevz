
<script>
export default {
    props:{
        title: String,
        date: String
    }
}
</script>

<template>
    <div>
        <h1>{{this.title}}</h1>
        <p>{{this.date}}</p>
    </div>
</template>

<style scoped>

</style>