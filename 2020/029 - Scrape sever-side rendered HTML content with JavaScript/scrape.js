const axios = require("axios");
const cheerio = require("cheerio");

axios("https://lobste.rs/")
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const storyItem = $(".story");
    const stories = [];
    storyItem.each(function () {
      const title = $(this).find(".u-url").text();
      const domain = $(this).find(".domain").text();
      const points = $(this).find(".score").text();
      stories.push({
        title,
        domain,
        points,
      });
    });
    console.log(stories);
  })
  .catch(console.error);
