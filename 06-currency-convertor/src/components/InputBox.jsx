import React, { useId } from 'react'

function InputBox({
  label, // whether user passing from / to
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

  // using useId hooks for better optimization
  const amountInputId = useId();  // it will generate a unique id

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">

        {/* *** label here */}
        <label
          htmlFor={amountInputId}   // binding with useId hook
          className="text-black/60 mb-2 inline-block">
          {label}
        </label>

        {/* *** input field here */}
        <input
          id={amountInputId}   // binding with useId hook
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}

          // it has no default value bcuz u cannot pass default value to function
          // onChange={(e) => onAmountChange} // can directly use it here but
          // with no default value there is a possiblity that it may crush

          // solution: place a check && if it is avaible then use onAmountChange
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        // JS took events values in string format
        // to avoid string value wrap in Number method
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/60 mb-2 w-full">Currency Type</p>

        {/* *** select currency option here */}
        <select
          value={selectCurrency}  // by default is usd
          //same as above
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisable}  // not so imp 
        >

          {/* *** loop through array for currency options */}
          {currencyOptions.map((currency) => (
            // with map same value will repeat which effect performance in react
            // solution: whenever loop in JSX always pass a key for better performance
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


