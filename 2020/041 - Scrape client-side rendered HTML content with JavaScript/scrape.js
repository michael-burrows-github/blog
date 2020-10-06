const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");

async function getData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/r/webdev/");
  const data = await page.content();
  await browser.close();  
  processData(data);
}
getData();

function processData(data) {
  console.log("Processing Data...");
  const $ = cheerio.load(data);
  const posts = [];
  $(".Post").each(function () {
    posts.push({
      user: $("._2tbHP6ZydRpjI44J3syuqC", this).text(),
      title: $("._eYtD2XCVieq6emjKBH3m", this).text(),
      votes: $("._1E9mcoVn4MYnuBQSVDt1gC", this).first().text(),
    });
  });
  fs.writeFileSync("data.json", JSON.stringify(posts));
  console.log("Complete!");
}
