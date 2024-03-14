import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const coindeskURL = "https://api.coindesk.com/v1/bpi/currentprice/";

function Currency(props) {
  const {setCurrency} = props
  const [price, setPrice] = useState("");
  const { currency } = useParams();
  const history = useHistory();

  useEffect(() => {
    const url = `${coindeskURL}${currency}.json`; // https://api.coindesk.com/v1/bpi/currentprice/AUD.json
    const makeApiCall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      const currencyPrice = json.bpi[currency].rate;
      setPrice(currencyPrice);
    };

    makeApiCall();
    setCurrency(currency);
  }, [currency, setCurrency]);

  return (
    <div>
      <h1>Bitcoin price in {currency}</h1>
      <div className="price">Price: {price}</div>
      <button onClick={() => history.push("/home")}>Home</button>
    </div>
  );
}

export default Currency;
