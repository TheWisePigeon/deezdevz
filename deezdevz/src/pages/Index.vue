<template>
  <Layout>


    <h1>Hello, welcome to {{ $static.metadata.siteName }}, we explain stuff with memes and code </h1>
    <hr>
    <div class=" "
      v-for="post in $page.posts.edges"
      :key="post.id"
      
    >
      <!-- <g-link :to="post.node.path">
        <h3><b> {{post.node.title}} </b></h3>
      </g-link>
        
        <p> {{post.node.date}} </p> -->
      <PostPreview :title="post.node.title" :date="post.node.date" :path="post.node.path" />

    </div>

  </Layout>
</template>

<static-query>
  query{
    metadata{
      siteName
    }
  }
</static-query>

<page-query>
  query{
    posts: allPost{
      edges{
        node{
          id
          title
          path
          date(format: "MMMM Do, YYYY")
        }
      }
    }
  }
</page-query>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
