exports.BasePage = class BasePage {
    constructor(page) {
        this.page = page
        this.URL = 'https://www.amazon.com/'
        this.EnterButtonName = 'Enter'
        this.button = 'button'
        this.link = 'link'
        this.dateToday = 'Today'
        this.networkidle = 'networkidle'
    }

    async ClickToButtonByName(buttonName) {
        await this.page.getByRole(this.button, { name: buttonName, exact: true }).click()
    }

    async ChooseCalendarDate(date) {
        await this.page.locator('#gc-order-form-date i').click()
        await this.page.getByRole(this.link, { name: date, exact: true }).click()
    }
}