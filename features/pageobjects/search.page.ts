import Page from "./page";

class ClickdocSearch extends Page {
    private get accpt_btn1() { return $('//button[contains(text(),"Einstellungen")]') }
    private get accpt_btn2() { return $('//button[contains(text(),"Auswahl speichern")]') }
    private get header() { return $('//h1') }
    private get doctor_searchbar() { return $('#searchInput') }
    private get docname() { return $('#searchInput') }
    private get find_btn() { return $('//button[contains(text(),"Finden")]') }
    private get frst_result() { return $('//*[@id="search"]/div/div[3]/div/div/app-contact-card[1]/div/app-contact-header/div/div/div[2]/h2/a') }
    private get scnd_result() { return $('//*[@id="search"]/div/div[3]/div/div/app-contact-card[2]/div/app-contact-header/div/div/div[2]/h2/a') }
    async clickOnCookiesBtn() {
        await (await this.accpt_btn1).click()
        await (await this.accpt_btn2).click()
    }
    getHeader() {
        return this.header
    }
    async clickOnDocSearchBtn() {
        await (await this.doctor_searchbar).click()
    }
    async enterDoctorName(doctorname: string) {
        await (await this.docname).setValue(doctorname)
    }
    async clickOnFindBtn() {
        await (await this.find_btn).click()
    }
    getFirstResult() {
        return this.frst_result
    }
    async toValidateResults() {
        await (await this.frst_result).scrollIntoView()
    }
    getSecondResult() {
        return this.scnd_result
    }
}

export default new ClickdocSearch()