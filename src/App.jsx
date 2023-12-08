import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
const HomePage = lazy(() => import("./Pages/HomePage"));
const CatalogPage = lazy(() => import("./Pages/CatalogPage"));
const FavoritePage = lazy(() => import("./Pages/FavoritePage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}

export default App;
