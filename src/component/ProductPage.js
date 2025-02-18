import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useProductDetails from "../utills/useProductDetails";
import ShimmerUi from "./ShimmerUi";
import Star from "./Star";
import { useDispatch } from "react-redux";
import { addItems } from "../utills/cartSlice";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { useProductsContext } from "../contex/productContex";
import ItemCategoryCard from "./ItemCategoryCard";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { isLoading, products } = useProductsContext();
  const [isVisible, setIsVisible] = useState(false);
  const { ProductId } = useParams();
  const { data: productDetails, isLoading: productDetailsLoading } =
    useProductDetails(ProductId);
  console.log(ProductId);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
    setIsVisible(true); // Trigger animation
  }, [ProductId]);

  if (!productDetails || Object.keys(productDetails).length === 0) {
    return <ShimmerUi />;
  }

  const { image, description, price, rating, title } = productDetails;

  const addCartHandel = () => {
    dispatch(addItems(productDetails));
  };

  return (
    <>
      <div className={"pt-[10vh]  min-w-full flex flex-col justify-center items-center "}>
        <div className="w-full min-h-[80vh] flex justify-center items-center">
          {productDetailsLoading ? (
            <ShimmerUi />
          ) : (
            <div className="px-4 md:px-16 lg:px-28 h-auto flex flex-col lg:flex-row items-center justify-center gap-10">
              {/* Product Image */}
              <div className="flex justify-center items-center w-full lg:w-1/2">
                <img
                  src={image}
                  alt={title}
                  className="w-80 sm:w-96 md:w-[400px] max-h-[450px] object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col w-full lg:w-1/2 relative text-center lg:text-left">
                <h4 className="text-2xl sm:text-3xl py-2 font-extrabold border-b border-black shadow-sm">
                  {title}
                </h4>
                <p className="font-serif py-2 text-sm sm:text-base">
                  {description}
                </p>

                <div className="py-4 flex justify-center lg:justify-start gap-3">
                  <Star star={rating.rate} reviews={rating.count} />
                </div>

                <p className="text-xl sm:text-2xl font-bold">
                  MRP: ₹{price * 10}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full mt-6">
                  <button
                    onClick={addCartHandel}
                    className="flex items-center justify-center gap-2 h-14 w-full sm:w-[45%] rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 text-xl bg-gray-800 text-white uppercase"
                  >
                    <BsCartPlusFill /> Add to Cart
                  </button>
                  <button className="flex items-center justify-center gap-2 h-14 w-full sm:w-[45%] rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 text-xl bg-gray-800 text-white uppercase">
                    <AiFillThunderbolt /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Similar Products */}
        <div className="w-full">
          <div className="pt-8">
            <h2 className="text-2xl font-bold px-4 md:px-16 lg:px-28">
              Similar Products
            </h2>
            <div className="flex justify-around flex-wrap px-6 sm:px-12 md:px-24 lg:px-36 py-4">
              {products.map((item) => (
                <Link to={`/ProductList/${item.id}`} key={item.id}>
                  <ItemCategoryCard items={item} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
