<template  >
  <div class="layout w-auto p-4 ">
    <header class="flex justify-between ">
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      <div>
        <button class=" bg-purple-500 rounded px-3">Switch</button>
      </div>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data(){
    return{
      height: '90px'
    }
  },
  computed:{
    theme(){
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light'
      
    }
  },
  beforeMount(){
    console.log(this.theme);
  }
}
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  background-color: black;
  color: white;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>

