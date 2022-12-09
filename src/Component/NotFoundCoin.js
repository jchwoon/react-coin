import { useParams } from "react-router";
import styled from "styled-components";

const Warn = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  font-weight: bold;
  background-color: ${(props) => props.theme.back};
  color: ${(props) => props.theme.color};
  height: 100vh;
  span:last-child {
    font-size: 100px;
  }
`;

const NotFoundCoin = () => {
  const strangeCoin = useParams();
  return <Warn>Not Found Coin {strangeCoin.coinId}</Warn>;
};

export default NotFoundCoin;
