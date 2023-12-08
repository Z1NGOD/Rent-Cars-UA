import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  /* position: fixed;
  top: 0;
  right: 0;
  width: 100%; */
  background-color: #1a1919;
`;

const Navigation = styled.nav`
  height: 64px;
  margin: 0 auto;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  height: 100%;
  margin: 0;
`;

const ListItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: transparent;
  border-radius: 12px;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: #0b44cd;
  }
`;

export { HeaderWrapper, Navigation, List, ListItem, StyledNavLink };
