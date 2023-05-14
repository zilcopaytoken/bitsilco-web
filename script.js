// Token details
var totalTokens = 1000000;
var tokensSold = 0;
var tokenPrice = 0.01;

// Function to update token information on the page
function updateTokenInfo() {
  document.getElementById("totalTokens").textContent = totalTokens;
  document.getElementById("tokensSold").textContent = tokensSold;
  document.getElementById("tokenPrice").textContent = tokenPrice.toFixed(2);
}

// Function to handle buying tokens
function buyTokens() {
  var amountInput = document.getElementById("amount");
  var amount = parseFloat(amountInput.value);

  // Validate the input amount
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("errorMessage").textContent = "Please enter a valid amount.";
    return;
  }

  // Calculate the total price
  var totalPrice = amount * tokenPrice;

  // Check if there are enough tokens available
  if (tokensSold + amount > totalTokens) {
    document.getElementById("errorMessage").textContent = "Insufficient tokens available.";
    return;
  }

  // Perform the purchase (this is just a simulated example)
  // You would typically handle the actual token transfer and payment process here
  tokensSold += amount;
  updateTokenInfo();

  // Show success message
  document.getElementById("errorMessage").textContent = "Tokens purchased successfully.";

  // Clear the input field
  amountInput.value = "";
}

// Initialize the token information on
