<script>
export default {
	name: 'Post name',
	metaInfo(){
		return{
			title: this.$page.post.title,

		}
	}
}
</script>

<template>
	<Layout>
		<header class="title">
			<h1>{{ $page.post.title }}</h1>
			<p>Published on: {{ $page.post.date }}</p>
		</header>
		<main class="content" v-html="$page.post.content"></main>
	</Layout>
</template>

<page-query>
	query Post($path: String!) {
		post: post(path: $path) {
			id 
			title
			readingTime 
			tags
			path 
			date (format: "MMMM D, YYYY h:mma") 
			content
		}
	}
</page-query>

<style scoped>
	.title {
		text-align: center;
	}
</style>