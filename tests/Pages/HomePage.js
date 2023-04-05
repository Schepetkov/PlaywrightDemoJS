import { BasePage } from '../Pages/BasePage';
import { EGiftCardsType } from '../Pages/GiftCards/EGiftCardsType';
import { expect } from '@playwright/test';
export class HomePage extends BasePage {
    constructor(page) {
        super(page)

        this.totalAmountKeyName = 'TotalAmount'
        this.amazonSearchPlaceholder = 'Search Amazon'
        this.eGiftCard = 'Amazon.com eGift Card'
        this.eGiftCardUrlStringValidation = '**/Amazon-eGift-Card-Logo/**'
    }

    async Search(searchText) {
        await expect(this.page.getByPlaceholder(this.amazonSearchPlaceholder)).toBeVisible()
        await this.page.getByPlaceholder(this.amazonSearchPlaceholder).fill(searchText)
        await this.page.getByPlaceholder(this.amazonSearchPlaceholder).press(this.EnterButtonName)
    }

    async ClickToGiftCardsByType(giftCardsType) {
        if(giftCardsType === EGiftCardsType.EGiftCards) {
            await this.ClickToEGiftCard()
        } else if (giftCardsType === EGiftCardsType.PrintHomeGiftCard) {
            //.. ClickToPrintHomeGiftCard()
        }
    }

    async ClickToEGiftCard() {
        await this.page.getByRole(this.link, { name: this.eGiftCard, exact: true }).first().click()
    }
}