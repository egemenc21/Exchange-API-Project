const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstCurrency, secondCurrency);

eventListeners();

function eventListeners() {
  amount.addEventListener("input", exchangeAmount);
  firstCurrency.onchange = function () {
    currency.changeFirstCurrency(
      firstCurrency.options[firstCurrency.selectedIndex].textContent
    );
    ui.changeFirst();
  };
  secondCurrency.onchange = function () {
    currency.changeSecondCurrency(
      secondCurrency.options[secondCurrency.selectedIndex].textContent
    );
    ui.changeSecond();
  };
}
function exchangeAmount() {
  currency.changeAmount(amount.value);

  currency
    .exchangeCurrency()
    .then((result) => ui.displayResult(result))
    .catch((err) => console.log(err));
}
