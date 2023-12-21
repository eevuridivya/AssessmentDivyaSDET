import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'
    private readonly addToCartItem2: string= 'button[id="add-to-cart-sauce-labs-onesie"]'
    private readonly selectCartBtn: string ='[id="shopping_cart_container"]'
    private readonly checkoutBtn: string ='[id="checkout"]'
    private readonly firstName: string ='[id="first-name"]'
    private readonly lastName: string ='[id="last-name"]'
    private readonly postalCode: string ='[id="postal-code"]'
    private readonly continueBtn: string ='[id="continue"]'
    private readonly finishBtn: string ='[id="finish"]'
    private readonly expectedMsg:string = '[class="complete-header"]'
    private readonly sortButton:string = '[class="product_sort_container"]'
    private readonly burgerButton: string ='[id="react-burger-menu-btn"]'
    private readonly selectCartBadge: string = 'span[class="shopping_cart_badge"]'
    private readonly qtyLabel: string = '[class="cart_quantity_label"]'
    private readonly descLabel: string = '[class="cart_desc_label"]'
    private readonly lastNameError: string= '[class="error-message-container error"] h3'
   
    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async addItem2ToCart() {
        await this.page.locator(this.addToCartItem2).click()
    }
    public async selectTheCart() {
        await this.page.locator(this.selectCartBtn).click()
    }

    public async clickCheckoutBtn() {
        await this.page.locator(this.checkoutBtn).click()
    }

    public async enterUserDetails(firstname: string,lastname: string,postCode: string) {
        await this.page.locator(this.firstName).fill(firstname)
        await this.page.locator(this.lastName).fill(lastname)
        await this.page.locator(this.postalCode).fill(postCode)
    }

    public async clickContinueBtn() {
        await this.page.locator(this.continueBtn).click()
    }

    public async clickfinishBtn() {
        await this.page.locator(this.finishBtn).click()
    }

    public async validateTExpectedMsg(expectedMsg: string) {
        const message = await this.page.locator(this.expectedMsg).innerText()
        if (message !== expectedMsg) {
          throw new Error(`Expected title to be ${expectedMsg} but found ${message}`);
        }
    }

    public async isSortButtonPresent() {
        let flag = this.page.locator(this.sortButton).isVisible();
       return flag;
    }
    public async isBurgerButtonPresent() {
         return this.page.locator(this.burgerButton).isVisible();
    }

    public async validateCartValue(cartCount: string) {
        const message = await this.page.locator(this.selectCartBadge).innerText()
        if (message !== cartCount) {
          throw new Error(`Expected count to be ${cartCount} but found ${message}`);
        }
    }

    public async sortByPrice() {
        await this.page.locator(this.sortButton).selectOption('lohi');
    }
    public async sortByAlphabet() {
        await this.page.locator(this.sortButton).selectOption('az');
    }

    public async isQtyLabelPresent() {
        return this.page.locator(this.qtyLabel).isVisible();
    }
    public async isDescLabelPresent() {
         return this.page.locator(this.descLabel).isVisible();
    }
    public async validateLastNameRequiredError(expectedMsg: string) {
        const message = await this.page.locator(this.lastNameError).innerText()
        if (message !== expectedMsg) {
          throw new Error(`Expected LastName error to be ${expectedMsg} but found ${message}`);
        }
    }

    public async logOut() {
        return this.page.locator(this.burgerButton).click();
   }

}