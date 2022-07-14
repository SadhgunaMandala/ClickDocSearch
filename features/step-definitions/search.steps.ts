import { Given, When, Then } from '@cucumber/cucumber'
import clickdocPage from '../pageobjects/search.page'

Given(/^I open the browser and load the url \"([^\"]*)\"$/, async (appurl: string) => {
    await browser.url(appurl)
    await browser.maximizeWindow()
});

When(/^I click on accept cookies$/, async () => {
    await clickdocPage.clickOnCookiesBtn()
    await browser.pause(3000)
});

Then(/^I am on homepage of clickdoc with page header \"([^\"]*)\"$/, async (header: string) => {
    await expect(clickdocPage.getHeader()).toHaveText(header)
});

When(/^I click on doctor search button$/, async () => {
    await clickdocPage.clickOnDocSearchBtn()
});

When(/^I search with (.+) on doctors search bar$/, async (doctorname: string) => {
    await clickdocPage.enterDoctorName(doctorname)
    await browser.pause(3000)
});

When(/^I click on find button$/, async () => {
    await clickdocPage.clickOnFindBtn()
});

Then(/^I can validate two results (.+) and (.+)$/, async (firstresult: string, secondresult: string) => {
    await expect(clickdocPage.getFirstResult()).toHaveText(firstresult)
    await clickdocPage.toValidateResults()
    await browser.pause(5000)
    await expect(clickdocPage.getSecondResult()).toHaveText(secondresult)
});

