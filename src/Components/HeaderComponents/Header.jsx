import {
  HeaderWrapper,
  Navigation,
  List,
  ListItem,
  StyledNavLink,
} from "./Header.styled";
const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation>
        <List>
          <ListItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="catalog">Catalog</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="favorites">Favorites</StyledNavLink>
          </ListItem>
        </List>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
