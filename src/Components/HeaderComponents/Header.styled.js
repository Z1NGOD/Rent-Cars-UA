import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  background-color: #0b44cd;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  height: 64px;
  margin: 0 auto;
  font-size: 18px;
`;

const List = styled.ul`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  height: 100%;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 178px;
  height: 48px;

  cursor: pointer;

  &:hover a {
    scale: 1.1;
    border: 1px solid white;
    padding: 12px 50px;
  }

  &:active a {
    scale: 1.05;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid transparent;
  transition: scale 100ms ease-in-out, border 100ms ease-in-out,
    padding 150ms ease-in-out;
`;

const StyledLogo = styled(NavLink)`
  position: absolute;
  top: 0;
  left: 0;

  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #fff;
  transition: scale 50ms ease-in-out;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 1.05;
  }
`;

export { HeaderWrapper, Navigation, List, ListItem, StyledNavLink, StyledLogo };
