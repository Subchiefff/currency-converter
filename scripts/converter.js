export async function convertCurrency(currencyFrom, currencyTo, amount) {
  console.log("Fetching for:", currencyFrom);

  try {

         const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currencyFrom}`);
    if (!response.ok) {
      throw new Error(`can't find that ${currencyFrom}`);
    }
     const data = await response.json();

    const rate = data.rates[currencyTo];
   
    if (rate) {
      return{
        from: currencyFrom,
        to: currencyTo,
        amount: amount,
        result: (rate * amount).toFixed(2)
      };
    } else {
      throw new Error("Target currency unavailable");
    }

    } catch (error) {
    console.error("Error fetching data",error);
    return null;
  }
}

  

