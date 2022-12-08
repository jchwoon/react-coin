import { useEffect, useState } from "react";
import { useMatch, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FetchCoinInfo } from "./api/CoinApi";
import CoinChart from "./CoinChart";
import CoinPrice from "./CoinPrice";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  background-color: ${(props) => props.theme.back};
`;
const Loader = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

const CoinBoard = styled.div`
  background-color: #ff3b7e;
  width: 700px;
  height: 250px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Head = styled.h1`
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
`;
const Title = styled.span`
  margin-right: 20px;
`;
const Rank = styled.span``;
const Description = styled.h2`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100px;
  border-radius: 20px;
  background-color: #e700b0;
  overflow: auto;
  word-break: break-word;
  padding: 10px;
  margin-top: 10px;
  span:nth-child(1) {
    align-items: center;
    justify-content: center;
    font-size: 18px;
    padding-bottom: 10px;
  }
`;
const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.logo});
  background-size: cover;
  background-position: center;
`;
const Tab = styled.div`
  margin-top: 20px;
  width: 500px;
  display: flex;
  height: 30px;
  justify-content: space-around;
  a {
    background-color: #f9f871;
    border-radius: 5px;
    width: 45px;
    text-align: center;
    height: 20px;
  }
`;

const CoinInfo = () => {
  const [coinInfo, setCoinInfo] = useState({});
  const [loadingState, setLoadingState] = useState(false);
  const { coinId } = useParams();
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  useEffect(() => {
    FetchCoinInfo(coinId).then((json) => {
      setCoinInfo(json);
      setLoadingState(true);
    });
  }, [coinId]);
  return (
    <Wrapper>
      {loadingState ? (
        <CoinBoard>
          <Head>
            <Logo logo={coinInfo.logo}></Logo>
            <Title>{coinInfo.name}</Title>
            <Rank>{coinInfo.rank}Rank</Rank>
          </Head>
          <Description>
            <span>Description</span>
            <span>{coinInfo.description}</span>
          </Description>
          <Tab>
            <Link to="price">Price</Link>
            <Link to="chart">Chart</Link>
          </Tab>
        </CoinBoard>
      ) : (
        <Loader>Loading...</Loader>
      )}
      {priceMatch ? <CoinPrice coinId={priceMatch.params.coinId} /> : null}
      {chartMatch ? <CoinChart coinId={chartMatch.params.coinId} /> : null}
    </Wrapper>
  );
};

export default CoinInfo;
