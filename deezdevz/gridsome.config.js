module.exports = {
  siteName: 'PrograMemer',
  siteDescription: 'A blog about coding and memes',
  siteUrl: process.env.SITE_URL,
  plugins: [{
    use: "@gridsome/source-filesystem",
    options: {
      typeName: "Post",
      path: "./read/**/*.md",
    }
  }],
  templates: {
    Post: "/:title",
  },
  transformers: {

  }
}