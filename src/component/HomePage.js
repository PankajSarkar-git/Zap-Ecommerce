import home1 from "../imgs/home (2).jpg";
import ItemCategory from "./ItemCategory";
import { BsMouse } from "react-icons/bs";

const HomePage = () => {
  return (
    <>
      <div
        className="min-h-screen max-h-screen w-full bg-cover bg-center flex justify-center items-end "
        style={{ backgroundImage: `url("${home1}")` }}
      >
        <div className="text-4xl tracking-wide text-white font-bold flex flex-col items-center text-center mb-5 min-[240px]:text-lg sm:text-xl md:text-2xl lg:text-4xl">
          <h3>Zap! Ecommerce</h3>
          <p>Go! and start your Shoping! </p>
          <BsMouse className="text-4xl  text-white font-bold min-[240px]:mt-10 lg:mt-24 " />
        </div>
      </div>
      <ItemCategory />
    </>
  );
};

export default HomePage;
