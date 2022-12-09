import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FetchCoinOHLC } from "./api/CoinApi";
import ReactApexChart from "react-apexcharts";
import coinContext from "./store/coin-context";

const Chart = styled.div`
  font-size: 20px;
  width: 700px;
  height: 700px;
`;

const CoinChart = ({ coinId }) => {
  const chartContext = useContext(coinContext);
  const [chartData, setChartData] = useState([]);
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 23;
  useEffect(() => {
    FetchCoinOHLC(coinId, startDate, endDate)
      .then((json) => {
        setChartData(json);
      })
      .catch((err) => console.error(err.message));
  }, [coinId, endDate, startDate]);

  return (
    <Chart>
      <ReactApexChart
        type="candlestick"
        series={[
          {
            data: chartData.map((ele) => {
              return {
                x: ele.time_close,
                y: [ele.open, ele.high, ele.low, ele.close],
              };
            }),
          },
        ]}
        options={{
          theme: {
            mode: chartContext.mode ? "light" : "dark",
          },
          chart: {
            type: "candlestick",
            height: 350,
          },
          title: {
            text: "Coin Chart",
            align: "left",
          },
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            tooltip: {
              enabled: true,
            },
          },
        }}
      />
    </Chart>
  );
};

export default CoinChart;
