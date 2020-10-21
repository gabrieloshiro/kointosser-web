describe('KoinTosser', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:8080/');
  });

  it('Test title', async () => {
    await expect(page.title()).resolves.toMatch('Koin Tosser! Toss a coin!');
  });

  it('Toss a coin', async () => {
    // Given User is on toss page
    // Click Toss Button
    // Verify result HEADS or TAILS


    const button = await page.$('button#toss');
    const result = await page.$('ul#result');
    await button.click();

    // const text = await page.evaluate(() => Array.from(document.querySelectorAll('li'), element => element.textContent));
    const text = await result.evaluate(() => Array.from(document.querySelectorAll('li'), element => element.textContent));
    await expect(text[0] === "HEADS" || text[0] === "TAILS").toBeTruthy();
  });


});
