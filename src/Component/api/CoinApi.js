const BASE_URL = "https://api.coinpaprika.com/v1";

export const FetchCoin = () => {
  return fetch(`${BASE_URL}/coins`).then((res) => {
    if (!res.ok) {
      throw new Error("404 Not Found");
    } else {
      return res.json();
    }
  });
};

export const FetchCoinInfo = (coinId) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => {
    if (!res.ok) {
      throw new Error("404 Not Found");
    } else {
      return res.json();
    }
  });
};

export const FetchCoinToday = (coinId) => {
  return fetch(`${BASE_URL}/coins/${coinId}/ohlcv/today`).then((res) => {
    if (!res.ok) {
      throw new Error("404 Not Found");
    } else {
      return res.json();
    }
  });
};

export const FetchCoinOHLC = (coinId, start, end) => {
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${start}&end=${end}`
  ).then((res) => {
    if (!res.ok) {
      throw new Error("404 Not Found");
    } else {
      return res.json();
    }
  });
};
