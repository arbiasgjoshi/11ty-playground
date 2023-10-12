module.exports = eleventyConfig => {
    // passthrough the webfonts folder for fontawesome
    eleventyConfig.addPassthroughCopy({ "src/webfonts": "webfonts" })

    // passthrough js folder
    eleventyConfig.addPassthroughCopy('./src/js')

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