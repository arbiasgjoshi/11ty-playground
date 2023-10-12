module.exports = eleventyConfig => {

    // ---------------------------------
    // PASSTHROUGH
    // ---------------------------------
    // passthrough the webfonts folder for fontawesome
    eleventyConfig.addPassthroughCopy({ "src/assets/webfonts": "webfonts" })

    // passthrough js folder
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" })

    return {
        // set template engine so that md, data and html files are processed by nunjucks
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        // specify input and output dirs
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};