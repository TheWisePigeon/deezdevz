<script>
export default {
  metaInfo:{
    title: 'The Wise Pigeon\'s blog '
  }
}
</script>

<template>
  <Layout>
    
    <hr />
    <div class=" " v-for="post in $page.posts.edges" :key="post.id">
      <PostPreview
        :title="post.node.title"
        :date="post.node.date"
        :path="post.node.path"
        :readingTime="post.node.readingTime"
        :summary="post.node.summary"
      />
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
    posts: allPost(sortBy: "date", order: DESC ){
      edges{
        node{
          id
          title
          readingTime
          path
          summary
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
