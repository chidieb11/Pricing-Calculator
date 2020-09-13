//get all items
const priceInput = document.querySelector('[name=price');
const quantityInput = document.querySelector('[name=quantity');
const total = document.querySelector('.total');
const quantityLabel = document.querySelector('.quantity-label');



//give them a function class
function calculatePieCost() {
    const price = priceInput.value;
    const quantity = quantityInput.value;
    const totalCost = price * quantity;
    total.innerHTML = '$' + totalCost.toFixed(2);
}

//update quantity label
function updateQuantityLabel() {
    const quantity = quantityInput.value;
    quantityLabel.innerHTML = quantity;
}

//on first start
calculatePieCost();

//add an event listener
priceInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', calculatePieCost);
quantityInput.addEventListener('input', updateQuantityLabel);