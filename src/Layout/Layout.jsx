import { Outlet } from "react-router-dom";
import { Container } from "../Components/UI/Container.styled";
import Header from "../Components/HeaderComponents/Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
