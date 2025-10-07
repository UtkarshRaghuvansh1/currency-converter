import { useState } from "react";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./custom_hooks/useCurrencyInfo.js";
// import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0); // Display the fina result

  // Use custom hook
  const currencyInfo = useCurrencyInfo(from);
  // fetch all keys from currency info (usd , inr , eur ... )
  const options = Object.keys(currencyInfo);
  // Swap functionality (usd to inr vice versa )
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Logic to convert amount from to to
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const BackgroundImage =
    "https://images.pexels.com/photos/16284989/pexels-photo-16284989.jpeg";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full max-w-md bg-white/40 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 p-6">
        <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Currency Converter
        </h1>
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChanged={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  hover:bg-blue-700 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 shadow-md transition-transform active:scale-95"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisabled
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 rounded-2xl text-base sm:text-lg shadow-md transition-transform active:scale-95"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
          {/* Converted Amount Display */}
          {convertedAmount > 0 && (
            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-gray-700">
                {Number(amount).toFixed(2)} {from.toUpperCase()} ={" "}
                <span className="text-blue-700 font-semibold">
                  {Number(convertedAmount).toFixed(2)} {to.toUpperCase()}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
