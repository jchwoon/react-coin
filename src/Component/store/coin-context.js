import { useEffect, useState } from "react";
import React from "react";
import { FetchCoin } from "../api/CoinApi";

const coinContext = React.createContext({
  coin: [],
  mode: Boolean,
});

export const CoinProvider = (props) => {
  const [coin, setCoin] = useState([]);

  useEffect(() => {
    FetchCoin().then((json) => {
      const sliceCoin = json.slice(0, 100);
      setCoin(sliceCoin);
    });
  }, []);
  return (
    <coinContext.Provider
      value={{
        coin,
        mode: props.mode,
      }}
    >
      {props.children}
    </coinContext.Provider>
  );
};

export default coinContext;
