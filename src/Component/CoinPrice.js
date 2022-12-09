import { useEffect, useState } from "react";
import styled from "styled-components";
import { FetchCoinToday } from "./api/CoinApi";

const Price = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 300px;
  background-color: #ffc24b;
  border-radius: 15px;
  align-items: center;
  .loader {
    margin-top: 50px;
  }
`;
const Head = styled.h2`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
`;
const PriceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  li {
    margin-top: 20px;
  }
`;

const CoinPrice = ({ coinId }) => {
  const [coinPrice, setCoinPrice] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    FetchCoinToday(coinId)
      .then((json) => {
        setCoinPrice(json[0]);
        setLoading(true);
      })
      .catch((err) => console.error(err.message));
  }, [coinId]);
  return (
    <Price>
      <Head>Today Price</Head>
      {loading ? (
        <PriceList>
          <li className="open">
            {`Open: ${new Intl.NumberFormat("ko-KR").format(
              Math.trunc(coinPrice.open) * 1320
            )}원`}
          </li>
          <li className="high">{`High: ${new Intl.NumberFormat("ko-KR").format(
            Math.trunc(coinPrice.high) * 1320
          )}원`}</li>
          <li className="low">{`Low: ${new Intl.NumberFormat("ko-KR").format(
            Math.trunc(coinPrice.low) * 1320
          )}원`}</li>
          <li className="close">{`Current(Close): ${new Intl.NumberFormat(
            "ko-KR"
          ).format(Math.trunc(coinPrice.close) * 1320)}원`}</li>
        </PriceList>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </Price>
  );
};

export default CoinPrice;
