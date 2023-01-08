class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url = null;
    this.amouunt = null;
  }
  exchangeCurrency() {
    this.url = `https://api.exchangerate.host/convert?from=${this.firstCurrency}&to=${this.secondCurrency}`;
    return new Promise((resolve,reject) =>{
      fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
       const parity = data.result
       const amount2 = Number(this.amount);
       let result = parity * amount2;
       resolve(result);
      })
      .catch((err) => reject(err));
    })
    
    
  }
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
  changeAmount(newAmount) {
    this.amount = newAmount;
  }
}
