function calculateTotalPrice(quantity = 1, price = 44000) {
    let result = quantity * price;
    let message = result.toLocaleString("ru-RU")
    const total = document.querySelector(".total");
    total.textContent = (`Общая стоимость составит ${message} рублей`);
}
