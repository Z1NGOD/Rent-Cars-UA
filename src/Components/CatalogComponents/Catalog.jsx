import CatalogList from "./CList/CList";
import CatalogFilters from "./Filters/Filters";

const Catalog = () => {
  return (
    <>
      <CatalogFilters />
      <CatalogList />
    </>
  );
};

export default Catalog;
