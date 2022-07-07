const { Given, When, Then } = require("@cucumber/cucumber");

Given("opens demoqa website", { timeout: 60 * 1000 }, async function () {
    await this.openUrl('https://demoqa.com/');
});

When("I click on Elements", async function () {
    await this.page.click('h5:has-text("Elements")');
});

Then("I verify the Elements page is opened", async function () {
    const ele = await this.page.textContent('div[class="main-header"]')
    console.log("Page title : " + ele.trim())

});