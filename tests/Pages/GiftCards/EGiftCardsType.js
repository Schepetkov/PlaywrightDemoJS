export class EGiftCardsType {
    static EGiftCards = new EGiftCardsType('EGiftCard')
    static PrintHomeGiftCard = new EGiftCardsType('PrintHomeGiftCard')
    // etc..
    
    constructor(name) {
        this.name = name
    } 
}