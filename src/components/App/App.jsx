import React, { useState } from "react";
import Home from "../Home/Home";
import "./App.css";
import Currencies from "../Currencies/Currencies";
import Currency from "../Currency/Currency";
import { Route, Link, Switch, Redirect } from "react-router-dom";

function App() {
  const [price, setPrice] = useState(null);
  const [currency, setCurrency] = useState("");

  const handleClick = (price) => {
    setPrice(price);
  };

  return (
    <div>
      <nav>
        <Link onClick={() => setCurrency("")} to="/">
          <img
            src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png"
            alt=""
          />
          <h1>Bitcoin Prices</h1>
        </Link>
        <Link onClick={() => setCurrency("")} to="/currencies">
          {currency ? `Currencies List > ${currency}` : `Currencies List > `}
        </Link>
      </nav>
      <main>
        <Switch>
          <Route path="/currency">
            <Redirect to="/currencies" />
          </Route>

          <Route path="/currencies/:currency">
            <Currency setCurrency={setCurrency} />
          </Route>

          <Route path="/currencies">
            <Currencies />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
