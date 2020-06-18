import jest from 'jest';
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250 // slow down by 250ms
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  }, 60000); // The addition of the 60000 here is to change the default Jest timeout when running tests (default is 50000, which was causing tests to fail)

  afterAll(() => {
    browser.close();
  });

  test('An event element is collapsed by default', async () => {
    const extra = await page.$('.Event .extra');
    expect(extra).toBeNull();
  });

  test('User can expand an event to see its details', async () => {
    await page.click('.Event .details-btn');

    const extra = await page.$('.Event .extra');
    expect(extra).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.Event .details-btn');

    const extra = await page.$('.Event .extra');
    expect(extra).toBeNull();
  });

})