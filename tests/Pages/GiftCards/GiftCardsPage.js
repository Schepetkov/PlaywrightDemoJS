const { BasePage } = require('../BasePage')
const { expect } = require('@playwright/test');
exports.GiftCardsPage = class GiftCardsPage extends BasePage {
    constructor(page) {
        super(page)

        this.amountGiftCardDetailsButton = 'Amount'
        this.emailGiftCardDetailsButton = 'Email'
        this.toEmailGiftCardDetailsField = 'Enter an email for each recipient'
        this.fromGiftCardDetailsField = 'From'
        this.messageGiftCardDetailsField = 'Message'
        this.quantityGiftCardDetailsField = 'Quantity'

        this.totalAmount = 0
    }

    async ValidateTotalAmount() {
        await expect.soft(this.page.locator('#sw-subtotal').getByText(`${this.totalAmount}.`, { exact: true })).toHaveText(`${this.totalAmount}.`)
        await expect.soft(this.page.locator('#sw-subtotal').getByText(`$${this.totalAmount}.00`).nth(1)).toHaveText(`$${this.totalAmount}.00`)
        await expect(this.page.locator('#ewc-content').getByText(`$${this.totalAmount}.00`).first()).toHaveText(`$${this.totalAmount}.00`)
    }

    async EnterGiftCardDetails(amount, customAmount, deliveryEmail, from, message, quantity, deliveryDate) {
        let amountValue = 0
        if(amount !== null) {
            await this.ClickToButtonByName(`$${amount}`)
            amountValue = amount
        }
        else if (customAmount !== null) {
            await this.page.getByLabel(this.amountGiftCardDetailsButton).fill(customAmount.toString())
            amountValue = customAmount
        }
        
        if(deliveryEmail !== null) {
            await this.ClickToButtonByName(this.emailGiftCardDetailsButton)
            await this.page.getByPlaceholder(this.toEmailGiftCardDetailsField).fill(deliveryEmail)
        }
        
        if(from !== null) {
            await this.page.getByLabel(this.fromGiftCardDetailsField).fill(from)
        }

        if(message !== null) {
            await this.page.getByRole('textbox', { name: this.messageGiftCardDetailsField, exact: true}).fill(message)
        }

        if(quantity !== null) {
            await this.page.getByLabel(this.quantityGiftCardDetailsField).fill(quantity.toString())
        }

        if(deliveryDate !== null) {
            let date = 0
            if (deliveryDate === this.dateToday) {
                const day = new Date()
                date = day.getDate()
            }
            else {
                date = deliveryDate;
            }
            
            await this.ChooseCalendarDate(date)
        }
        
        this.totalAmount = amountValue * quantity
    }
}