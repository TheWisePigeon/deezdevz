<template class=" bg-slate-900" >
  <div class="layout w-auto p-4 font-mono">
    <header class="flex justify-between py-6">
      <g-link class="text-3xl" to="/">{{ $static.metadata.siteName }}</g-link>
      <div class="flex items-center">
        <div v-if="this.theme === 'Dark'">
          <DarkTheme />
        </div>
        <div v-else>
          <LightTheme />
        </div>
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
  metaInfo: {
    titleTemplate: "DeezDevz - %s",
  },
  data() {
    return {
      theme
    };
  },
  beforeMount() {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("bg-slate-900");
      document.body.classList.add("text-white");
    } else {
      document.body.classList.add("bg-white");
    }
  },
  methods: {
    changeTheme() {
      if (this.theme === "Dark") {
        this.theme = "Light"
      } 
      if (this.theme==="Light") {
        this.theme = "Dark"
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
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

.test {
  background-color: slateblue;
}

.nav__link {
  margin-left: 20px;
}
</style>

