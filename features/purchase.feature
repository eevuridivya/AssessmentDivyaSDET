Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  Then I Select the cart 
  Then I Select Checkout
  And I Fill in the First Name, Last Name, and Zip Postal Code
  And I Select Continue and Finish
  Then I Validate the text 'Thank you for your order!'

 Scenario: Validate the Additional cases
    When I will login as 'standard_user'
    Then I should see the title "Swag Labs"
    Then I Verify the products page shopping cart icon and product sort container visible
	  And I Select an item from product list and add to cart and verify cart is updated to '1'
    Then I sort the product with Price
    And I Select another item from product list and add to cart and verify cart is updated to '2'
    Then I Select the cart 
    Then I verify On Your cart page and validate QTY and Description
    Then I Select Checkout
    And I Fill in the First Name and  Zip Postal Code
    Then I Verify the error message for 'Error: Last Name is required'
    Then I Click on react burger menu button and click logout