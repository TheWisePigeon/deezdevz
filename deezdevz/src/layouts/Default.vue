<template class=" bg-slate-900" >
  <div class="layout w-auto p-4 font-mono">
    <header class="flex justify-between py-6">
      <g-link class="text-3xl" to="/">{{ $static.metadata.siteName }}</g-link>
      <div class="flex items-center">
        <div v-if="this.darkTheme">
          <button @click="changeTheme">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
        <div v-else>
          <button @click="changeTheme" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </button>
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
    titleTemplate: "CooDing - %s",
  },
  data() {
    return {
      darkTheme: null,
    };
  },
  computed:{
    
  },
  beforeMount() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("bg-slate-900");
      document.body.classList.add("text-white");
      this.darkTheme = true;
    } else {
      document.body.classList.add("bg-white");
      this.darkTheme = false;
    }
  },
  methods: {
    changeTheme() {
      console.log(this.darkTheme);
      if (this.darkTheme) {
        document.body.classList.remove("bg-slate-900");
        document.body.classList.remove("text-white");
        this.darkTheme = false;
      } else {
        document.body.classList.add("bg-slate-900");
        document.body.classList.add("text-white");
        this.darkTheme = true;
      }
      console.log(this.darkTheme);
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

.nav__link {
  margin-left: 20px;
}
</style>

