module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.ignores.add("src/content/**");

  eleventyConfig.addFilter("filterByCategory", (items, category) =>
    (items || []).filter((item) => item.category === category)
  );
  eleventyConfig.addFilter("excludeType", (items, type) =>
    (items || []).filter((item) => item.type !== type)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
