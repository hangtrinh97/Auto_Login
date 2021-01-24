const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://booking.com");
  await page.type("#ss", "Berlin");
  await page.click(".sb-searchbox__button");
  await page.waitForSelector("#hotellist_inner");
  // await page.screenshot({ path: screenshot })
  // const hotels = await page.$$eval('span.sr-hotel__name', anchors => {
  //  return anchors.map(anchor => anchor.textContent.trim()).slice(0, 10)
  // })
  // console.log(hotels)
  await browser.close();
  console.log("See screenshot: ");
})();
