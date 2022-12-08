import { createBrowserRouter } from "react-router-dom";
import CoinInfo from "../Component/CoinInfo";
import Home from "../Component/Home";
import Root from "../Root";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      {
        path: ":coinId",
        element: <CoinInfo />,
        children: [
          { path: "price", element: <CoinInfo /> },
          { path: "chart", element: <CoinInfo /> },
        ],
      },
    ],
  },
]);
