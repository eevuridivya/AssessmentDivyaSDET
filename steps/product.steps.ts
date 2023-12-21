import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import testData from '../data/users.json';
import { expect } from 'playwright/test';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();

});

 Then('I Select the cart', async () => {
  await new Product(getPage()).selectTheCart();
});

Then('I Select Checkout', async () => {
  await new Product(getPage()).clickCheckoutBtn(); 
}); 

Then('I Fill in the First Name, Last Name, and Zip Postal Code',async () => {
  await new Product(getPage()).enterUserDetails(testData.first_name,
                  testData.last_name,testData.zip_Code); 
});  

Then('I Fill in the First Name and  Zip Postal Code',async () => {
  await new Product(getPage()).enterUserDetails(testData.first_name,
                  "",testData.zip_Code); 
                  await new Product(getPage()).clickContinueBtn();
}); 

Then('I Select Continue and Finish', async () => {
 
  await new Product(getPage()).clickContinueBtn();
  await new Product(getPage()).clickfinishBtn();
 
}); 

Then('I Validate the text {string}', async (expectedMsg) => {
  await new Product(getPage()).validateTExpectedMsg(expectedMsg);

});

Then('I Verify the products page shopping cart icon and product sort container visible', async () => {
  
   expect(await new Product(getPage()).isSortButtonPresent()).toBeTruthy()
  expect (await new Product(getPage()).isBurgerButtonPresent()).toBeTruthy()

})

Then('I Select an item from product list and add to cart and verify cart is updated to {string}', async (count) => {
  await new Product(getPage()).addBackPackToCart();
  await new Product(getPage()).validateCartValue(count);
});

Then('I Select another item from product list and add to cart and verify cart is updated to {string}', async (count) => {
  await new Product(getPage()).addItem2ToCart();
  await new Product(getPage()).validateCartValue(count);
});

Then('I sort the product with Price', async () => {
  await new Product(getPage()).sortByPrice();
})

Then('I sort the product with Alphabet', async () => {
  await new Product(getPage()).sortByPrice();
})

Then('I Click on react burger menu button and click logout', async () => {
  
  await new Product(getPage()).logOut();
})

Then('I verify On Your cart page and validate QTY and Description', async () => {
  expect(await new Product(getPage()).isQtyLabelPresent()).toBeTruthy()
  expect (await new Product(getPage()).isDescLabelPresent()).toBeTruthy()

})

Then('I Verify the error message for {string}', async (errorMsg) => {
  await new Product(getPage()).validateLastNameRequiredError(errorMsg);
})