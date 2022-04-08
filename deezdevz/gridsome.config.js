module.exports = {
  siteName: 'CooDing',
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
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }

  }
}