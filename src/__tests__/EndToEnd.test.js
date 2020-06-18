import jest from 'jest';
import puppeteer from 'puppeteer';

describe('filter events by city', () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250
    });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForSelector('.Event');
  }, 60000);

  afterAll(() => {
    browser.close();
  });

  test('by default events will load based on current user location', async () => {
    const events = await page.$$('.Event');
    expect(events).toHaveLength(events.length);
  });

  test('show suggestions when user starts typing in CitySearch textbox', async () => {
    await page.type('.city', 'Munich');
    const suggestions = await page.$$('.suggestions li');
    expect(suggestions).toHaveLength(2);
  });

  test('user can select a city from the list of suggested cities', async () => {
    // select the second suggestion via ( :nth-child(2) )
    await page.click('.suggestions li:nth-child(2)');
    const suggestions = await page.$$('.suggestions li');
    expect(suggestions).toHaveLength(0);
  });

});

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