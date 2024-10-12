import {useEffect, useState} from 'react'

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {

        if (!currency) return; // Prevent running if no currency is provided

        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            .catch((error) => {
                console.error('Error fetching data:', error); // Handle fetch error
            });

        // console.log(data);
        
    }, [currency]); // Only re-run when currency changes

    console.log('Current data:', data); // Logs the current state value

    return data;
}


export default useCurrencyInfo