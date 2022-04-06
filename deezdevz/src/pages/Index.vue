<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, welcome to {{ $static.metadata.siteName }} </h1>

  </Layout>
</template>

<static-query>
  query{
    metadata{
      siteName
    }
  }
</static-query>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
