const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://student.uef.edu.vn/passwordlogin?returnurl=%2F");
  await page.type("#email", "195082408");
  await page.type("#password", "195082408");
  await page.click(".btn.btn-block.btn-success");
  await page.waitForNavigation();
  //await page.screenshot({ path: screenshot });
  //browser.close();
  console.log("See screenshot: ");
})();
