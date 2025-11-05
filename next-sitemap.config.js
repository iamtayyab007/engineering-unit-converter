// next-sitemap.config.js
// Use ESM default export so next-sitemap CLI can load the config correctly
export default {
  siteUrl: 'https://www.unitsconvertify.com', // live domain (no trailing slash)
  generateRobotsTxt: true, // you already ship robots.txt at project root
  sitemapSize: 7000, // optional
};
