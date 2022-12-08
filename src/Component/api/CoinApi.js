const BASE_URL = "https://api.coinpaprika.com/v1";

export const FetchCoin = () => {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
};

export const FetchCoinInfo = (coinId) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
};

export const FetchCoinToday = (coinId) => {
  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/today`).then((res) =>
    res.json()
  );
};

export const FetchCoinOHLC = (coinId, start, end) => {
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${start}&end=${end}`
  ).then((res) => res.json());
};
