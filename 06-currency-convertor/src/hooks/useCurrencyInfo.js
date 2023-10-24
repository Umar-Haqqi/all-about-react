import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

            // with fetch u can use .then chaining as much as u want 
            .then((res) => res.json()) // to convert data from string into json
            .then((res) => setData(res[currency])) // it will access what is available in url
            console.log(data);

    }, [currency])  // whenever there is a change in currency update it

    console.log(data);
    return data
}

export default useCurrencyInfo;
// custom hook designing ends




// hooks most of the time return pure javascript
// hooks are commonly functions
// custom hooks can use built-in hooks