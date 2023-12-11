import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#0B44CD"
      wrapperStyle={{}}
      wrapperClass="loader"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#3470FF"
      strokeWidth={6}
      strokeWidthSecondary={4}
    />
  );
};

export default Loader;
