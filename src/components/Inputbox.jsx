import { useId } from "react";

/*
Inputbox = component which store the Input box for currency converter app 
label = It tells whether it is from field or To feild 
amount = variable to store mount entered in field 
onAmountChanged() = updater function which triggers render when amount state is changed 
currencyOptions = Array which stores currency options (getUnpackedSettings,inflateRaw,eur ...) will be fetched from API 
selectedCurrency = currenct selected currency out of all options 
onCurrencyChange() = updater function which triggers when options are selected from dropdown 
amountDisabled = if user does not enter the amount 
currencyDisabled - if user does not select the currency 
*/

function InputBox({
  label,
  amount,
  onAmountChanged,
  currencyOptions,
  selectedCurrency,
  onCurrencyChange,
  amountDisabled = false,
  currencyDisabled = false,
  className = "",
}) {
  //   console.log("In the Inputbox comp");
  const amountId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={amountId}>
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(evt) => onAmountChanged(evt.target.value)}
          disabled={amountDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(evt) => onCurrencyChange(evt.target.value)}
          disabled={currencyDisabled}
        >
          {/* Loop over options 
            In JSX while looping over element pass key to improve performance  */}

          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
