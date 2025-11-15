const { test, expect, chromium } = require('@playwright/test');

test('Login, add product to cart, verify, and logout', async () => {

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto('https://www.saucedemo.com/');


  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');


  await page.click('button[data-test="add-to-cart-sauce-labs-onesie"]');


  await page.click('.shopping_cart_link');
  const productName = await page.textContent('.inventory_item_name');
  console.log('Product in cart:', productName);

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  await browser.close();
});
