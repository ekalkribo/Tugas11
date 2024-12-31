const { Builder, By, Key, until } = require('selenium-webdriver');

async function exampleTest() {
    // Membuat koneksi dengan Browser Driver
    let driver = await new Builder().forBrowser('chrome').build();

    // Exception handling & Conclusion
    try {
        // Buka URL di browser
        await driver.get("https://www.saucedemo.com/");

        // Mencari element user-name dan password
        let userNameField = await driver.findElement(By.id('user-name'));
        let passwordField = await driver.findElement(By.id('password'));

        // Simulasikan behavior pengguna dengan mengetikkan data ke dalam field
        await userNameField.sendKeys("standard_user");
        await passwordField.sendKeys("secret_sauce", Key.RETURN);

        // Tunggu sampai elemen tertentu muncul atau timeout
        await driver.wait(until.elementLocated(By.id('inventory_container')), 10000);

        // mencoba klik product
        let product1Button = await driver.findElement(By.id('add-to-cart-sauce-labs-backpack'));
        await product1Button.click();

        let product2Button = await driver.findElement(By.id('add-to-cart-sauce-labs-bike-light'));
        await product2Button.click();  
        
        // melakukan klik pada cart
        let cart1button = await driver.findElement(By.xpath('//*[@class="shopping_cart_link"]'))
        await cart1button.click();
        
        // melakukan klik checkout
        let checkout1button = await driver.findElement(By.xpath('//*[@class="btn btn_action btn_medium checkout_button "]'))
        await checkout1button.click();

        //input data pembeli
        let firstnameField = await driver.findElement(By.id('first-name'));
        let lastnameField = await driver.findElement(By.id('last-name'));
        let portalField = await driver.findElement(By.id('postal-code'));
        await userNameField.sendKeys("haekal");
        await passwordField.sendKeys("gtg");    
        await passwordField.sendKeys("16772");    

        //klik button continue
        let continue1button = await driver.findElement(By.xpath('//*[@class="submit-button btn btn_primary cart_button btn_action"]'))
        await continue1button.click();

        // Mendapatkan judul halaman
        let title = await driver.getTitle();
        console.log(`Page Title is: ${title}`);
    } finally {

        // Tutup browser
       // await driver.quit(10);
    }
}

exampleTest();