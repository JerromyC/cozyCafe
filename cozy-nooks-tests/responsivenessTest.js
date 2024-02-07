const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // List of devices to emulate
    const devicesToTest = ['iPhone 6', 'iPhone X', 'iPad'];

    for (const device of devicesToTest) {
        console.log(`Testing on device: ${device}`);
        await page.emulate(puppeteer.devices[device]);

        await page.goto('http://localhost:3300', { waitUntil: 'networkidle0' }); // Replace with your local or deployed URL

        // Test for hero section visibility
        const heroVisibility = await page.evaluate(() => {
            const hero = document.querySelector('#hero');
            return !!hero;
        });
        console.assert(heroVisibility, 'Hero section is not visible');

        // Test for main header visibility
        const headerVisibility = await page.evaluate(() => {
            const header = document.querySelector('#mainHeader');
            return !!header;
        });
        console.assert(headerVisibility, 'Main header is not visible');

        // Add more tests as needed for other elements
        
        console.log(`Tests passed for ${device}`);
    }

    await browser.close();
})();
