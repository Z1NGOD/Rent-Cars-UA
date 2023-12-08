import { Outlet } from "react-router-dom";
import { Container } from "../Components/UI/Container.styled";
import Header from "../Components/HeaderComponents/Header";
import Loader from "../Components/UI/Loader";
import { Suspense } from "react";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
