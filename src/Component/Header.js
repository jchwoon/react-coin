import { Link } from "react-router-dom";
import styled from "styled-components";

const HeadBar = styled.div`
  width: 100%;
  height: 100px;
  background-color: #7637dc;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 30px;
  justify-content: space-between;
`;
const HomeLink = styled.div`
  font-size: 35px;
  font-weight: bold;
  a {
    color: white;
  }
`;
const Mode = styled.button``;

const Header = ({ changeMode, mode }) => {
  return (
    <HeadBar>
      <HomeLink>
        <Link to="/">ChaeCoin</Link>
      </HomeLink>
      <Mode onClick={changeMode}>{mode ? "Dark" : "Light"}</Mode>
    </HeadBar>
  );
};

export default Header;
