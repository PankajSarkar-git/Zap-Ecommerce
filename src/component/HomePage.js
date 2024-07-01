import home1 from "../imgs/home (2).jpg";
import ItemCategory from "./ItemCategory";
import { BsMouse } from "react-icons/bs";

const HomePage = () => {
  return (
    <div >
      <div
        className="min-h-screen max-h-screen w-full bg-cover bg-center flex justify-center items-end"
        style={{ backgroundImage: `url("${home1}")` }}
      >
        <div className="text-4xl tracking-wide text-white font-bold flex flex-col items-center text-center mb-5 sm:text-xl md:text-2xl lg:text-4xl">
          <h3>Zap! Ecommerce</h3>
          <p className="mt-3">Go! and start your Shopping!</p>
          <BsMouse className="text-4xl text-white font-bold mt-6 lg:mt-12" />
        </div>
      </div>

      <ItemCategory />
    </div>
  );
};

export default HomePage;
