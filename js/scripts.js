//.........................\\
// ......memory price.......\\
// ..........................\\
function updateMemoryPrice(memoryPrice) {
    const costMemory = document.getElementById('cost-memory');
    costMemory.innerText = memoryPrice;
    updateTotal();
};
document.getElementById('price8gb').addEventListener('click', function () {
    updateMemoryPrice(0);
});
document.getElementById('price16gb').addEventListener('click', function () {
    updateMemoryPrice(180);

});




//.....................................\\
//........... Storage price.............\\
// .......................................\\
function updateStoragePrice(storagePrice) {
    const costStorage = document.getElementById('storage-cost');
    costStorage.innerText = storagePrice;
    updateTotal();
};
document.getElementById('price256gb').addEventListener('click', function () {
    updateStoragePrice(0)

});
document.getElementById('price512gb').addEventListener('click', function () {
    updateStoragePrice(100)

});
document.getElementById('price1tb').addEventListener('click', function () {
    updateStoragePrice(180)
});





//................................................\\
//.................Shipping Cost.............\\
// ..........................................\\

function updateDeliveryCost(deliveryCost) {
    const chargeDelevary = document.getElementById('delivery-cost');
    chargeDelevary.innerText = deliveryCost;
    updateTotal();
};
document.getElementById('delivery-free').addEventListener('click', function () {
    updateDeliveryCost(0);
});
document.getElementById('delivery-cost20').addEventListener('click', function () {
    updateDeliveryCost(20);
});




//................................................\\
//................Total Price......................\\
// .................................................\\

const bestPrice = document.getElementById('best-price');
const costMemory = document.getElementById('cost-memory');
const costStorage = document.getElementById('storage-cost');
const chargeDelevary = document.getElementById('delivery-cost');
function updateTotal() {
    const discountPrice = document.getElementById('discount-total');
    const totalPrice = document.getElementById('total-price');
    const bestPriceText = bestPrice.innerText;
    const parseBestPrice = parseFloat(bestPriceText);
    const costMemoryText = costMemory.innerText;
    const parsecostMemory = parseFloat(costMemoryText);
    const costStorageText = costStorage.innerText;
    const parsecostStorage = parseFloat(costStorageText);
    const deliveryCostText = chargeDelevary.innerText;
    const parseDeliveryCost = parseFloat(deliveryCostText);
    discountPrice.innerText = parseBestPrice + parsecostMemory + parsecostStorage + parseDeliveryCost;
    totalPrice.innerText = parseBestPrice + parsecostMemory + parsecostStorage + parseDeliveryCost;
    return parseFloat(totalPrice.innerText);
};





//................................................\\
//...................Promo code....................\\
// .................................................\\

document.getElementById('promo').addEventListener('click', function () {
    const inputNumber = document.getElementById('promo-input');
    const inputValue = inputNumber.value;

    const grandTotal = updateTotal();
    const discountTotal = document.getElementById('discount-total')
    if (inputValue == 'stevekaku') {
        const discountPrice = (grandTotal / 100) * 20;
        discountTotal.innerText = grandTotal - discountPrice;
    }
    inputNumber.value = '';
});
