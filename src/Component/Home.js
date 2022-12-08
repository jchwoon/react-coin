import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import coinContext from "./store/coin-context";

const Coins = styled.div`
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.back};
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 35px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.color};
`;
const CoinList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Coin = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  width: 250px;
  height: 60px;
  background-color: #ff3b7e;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.color};
`;

const Home = () => {
  const navigation = useNavigate();
  const coinCtx = useContext(coinContext);
  const enterCoinInfo = (e) => {
    navigation(e.target.id);
  };
  return (
    <Coins>
      <Title>Coins</Title>
      <CoinList>
        {coinCtx.coin.length === 0 ? (
          <div>Loading...</div>
        ) : (
          coinCtx.coin.map((ele) => (
            <Coin onClick={enterCoinInfo} id={ele.id} key={ele.id}>
              {ele.name}
            </Coin>
          ))
        )}
      </CoinList>
    </Coins>
  );
};

export default Home;
