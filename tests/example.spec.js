import { test } from '@playwright/test';
import { GiftCardsPage } from '../tests/Pages/GiftCards/GiftCardsPage';
import { EGiftCardsType } from '../tests/Pages/GiftCards/EGiftCardsType';
import { HomePage } from '../tests/Pages/HomePage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  const homePage = new HomePage(page)
  await homePage.Search('Gift Cards')
  await homePage.ClickToGiftCardsByType(EGiftCardsType.EGiftCards)
  await page.waitForLoadState(homePage.domcontentloaded)
  await homePage.ClickToButtonByName('Standard')
  await homePage.ClickToButtonByName('Amazon Logo')
});

const Gift_Card_Details = [
  'schepetkov.dm@gmail.com',
  'Dmitriy',
  'Well Done!',
  'Today'
];

test.describe('Simple test cases for validation of total amount value', () => {
  test('validate gift card total amount with custom amount', async ({ page }) => {
    const giftCardsPage = new GiftCardsPage(page)
    await giftCardsPage.EnterGiftCardDetails(null, 324, Gift_Card_Details[0], Gift_Card_Details[1], Gift_Card_Details[2], 2, Gift_Card_Details[3])
    await giftCardsPage.ValidateTotalAmount()
    await giftCardsPage.ClickToButtonByName(giftCardsPage.addToCartButton)
    await giftCardsPage.ValidateTotalAmountOnCartPage()
  });

  test('validate gift card total amount with fix sum via button 25$', async ({ page }) => {
    const giftCardsPage = new GiftCardsPage(page)
    await giftCardsPage.EnterGiftCardDetails(25, null, Gift_Card_Details[0], Gift_Card_Details[1], Gift_Card_Details[2], 8, Gift_Card_Details[3])
    await giftCardsPage.ValidateTotalAmount()
    await giftCardsPage.ClickToButtonByName(giftCardsPage.addToCartButton)
    await giftCardsPage.ValidateTotalAmountOnCartPage()
  });

  test('validate gift card total amount with fix sum via button 50$', async ({ page }) => {
    const giftCardsPage = new GiftCardsPage(page)
    await giftCardsPage.EnterGiftCardDetails(50, null, Gift_Card_Details[0], Gift_Card_Details[1], Gift_Card_Details[2], 4, Gift_Card_Details[3])
    await giftCardsPage.ValidateTotalAmount()
    await giftCardsPage.ClickToButtonByName(giftCardsPage.addToCartButton)
    await giftCardsPage.ValidateTotalAmountOnCartPage()
  });

  test('validate gift card total amount with fix sum via button 75$', async ({ page }) => {
    const giftCardsPage = new GiftCardsPage(page)
    await giftCardsPage.EnterGiftCardDetails(75, null, Gift_Card_Details[0], Gift_Card_Details[1], Gift_Card_Details[2], 3, Gift_Card_Details[3])
    await giftCardsPage.ValidateTotalAmount()
    await giftCardsPage.ClickToButtonByName(giftCardsPage.addToCartButton)
    await giftCardsPage.ValidateTotalAmountOnCartPage()
  });

  test('validate gift card total amount with fix sum via button 100$', async ({ page }) => {
    const giftCardsPage = new GiftCardsPage(page)
    await giftCardsPage.EnterGiftCardDetails(100, null, Gift_Card_Details[0], Gift_Card_Details[1], Gift_Card_Details[2], 5, Gift_Card_Details[3])
    await giftCardsPage.ValidateTotalAmount()
    await giftCardsPage.ClickToButtonByName(giftCardsPage.addToCartButton)
    await giftCardsPage.ValidateTotalAmountOnCartPage()
  });
});
