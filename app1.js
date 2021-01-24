const puppeteer = require("puppeteer");
const fs = require("fs");
const config = require("./config.json");
const cookies = require("./cookies.json");
(async () => {
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();

  if (Object.keys(cookies).length) {
    await page.setCookie(...cookies);

    await page.goto("https://student.uef.edu.vn/passwordlogin?returnurl=%2F", {
      waitUntil: "networkidle2",
    });
  } else {
    await page.goto("https://student.uef.edu.vn/passwordlogin?returnurl=%2F", {
      waitUntil: "networkidle0",
    });
    await page.type("#email", config.username, { delay: 30 });
    await page.type("#password", config.password, { delay: 30 });

    await page.click("#body > div > div > div > div > div > form > div:nth-child(3) > div > button");

    await page.waitFor(15000);

    try {
      await page.waitFor('[data-click]="profile_icon"');
    } catch (error) {
      console.log("Failed to login");
      process.exit(0);
    }

    let currentCookies = await page.cookies();
    fs.writeFileSync("./cookies.json", JSON.stringify(currentCookies));
  }
})();
