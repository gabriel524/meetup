import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  jest.setTimeout(30000);
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      /*headless: false,
      slowMo: 250, // slow down by 250ms
      ignoreDefaultArgs: ["--disable-extensions"], // ignores default setting that causes timeout errors*/
    });

    // browser = await puppeteer.launch();

    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".events");
  });

  afterAll(async () => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".events .event_Details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".events .details-btn");
    const eventDetails = await page.$(".events .event_Details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".events .details-btn");
    const eventDetails = await page.$(".events .event_Details");
    expect(eventDetails).toBeNull();
  });
});
