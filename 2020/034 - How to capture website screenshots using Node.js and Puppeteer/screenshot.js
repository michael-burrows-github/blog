const puppeteer = require("puppeteer");
const capture = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1024, height: 768 });
  await page.goto("https://www.wikipedia.org/");
  await page.screenshot({ path: "./screenshot.png" });
  await browser.close();
};
capture();
