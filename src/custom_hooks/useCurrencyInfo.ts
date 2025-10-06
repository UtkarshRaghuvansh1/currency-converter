import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  // console.log(currency);
  const [data, setData] = useState({});
  useEffect(() => {
    // based on URL we can find currency like usd or inr or eur
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        // console.log(resData);
        setData(resData[currency]);
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
