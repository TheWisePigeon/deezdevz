
module.exports = {
  siteName: 'DeezDevz',
  siteDescription: 'A blog about coding and memes',
  siteUrl: 'https://bruh.io',
  plugins: [{
    use: "@gridsome/source-filesystem",
    options: {
      typeName: "Post",
      path: "./read/**/*.md",
    }
  }],
  templates: {
    Post: "/:title",
  }
}