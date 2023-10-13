const yaml = require("js-yaml");
const readingTime = require("eleventy-plugin-reading-time");
const { DateTime } = require("luxon");

module.exports = eleventyConfig => {

    // added yaml support
    eleventyConfig.addDataExtension("yaml, yml", contents => yaml.load(contents));

    // reading time plugin
    eleventyConfig.addPlugin(readingTime);


    // ---------------------------------
    // PASSTHROUGH
    // ---------------------------------
    // webfonts folder for fontawesome
    eleventyConfig.addPassthroughCopy({ "src/assets/webfonts": "webfonts" })

    // js folder
    eleventyConfig.addPassthroughCopy({ "src/assets/js": "js" })


    // ---------------------------------
    // RETURN
    // ---------------------------------
    return {
        // set template engine so that md, data and html files are processed by nunjucks
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',

        // add a pathPrefix
        pathPrefix: "/11ty-playground/",

        // specify input and output dirs
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};