import { isRouteErrorResponse, useRouteError } from "react-router";
import styled from "styled-components";

// const Warn = styled.div`
//   padding-top: 30px;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   font-size: 30px;
//   font-weight: bold;
//   background-color: ${(props) => props.theme.back};
//   color: ${(props) => props.theme.color};
//   height: 100vh;
//   span:last-child {
//     font-size: 100px;
//   }
// `;

function RootBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <div>This page doesn't exist!</div>;
    }

    if (error.status === 401) {
      return <div>You aren't authorized to see this</div>;
    }

    if (error.status === 503) {
      return <div>Looks like our API is down</div>;
    }

    if (error.status === 418) {
      return <div>🫖</div>;
    }
  }

  return <div>Something went wrong</div>;
}

export default RootBoundary;
