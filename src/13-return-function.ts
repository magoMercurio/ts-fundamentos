(() => {

  // tipar una arrow function despues del parentesis y antes del arrow
  const calcTotal = (prices: number[]): number => {
    let total: number = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total;
  }

  const printTotal = (prices: number[]): void => {
    calcTotal(prices)
    console.log(`El total es ${calcTotal(prices)}`);
  }

  printTotal([1, 2, 3, 4, 5]);

})()