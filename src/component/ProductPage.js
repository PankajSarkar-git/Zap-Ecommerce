import { useParams } from "react-router-dom";
import useProductDetails from "../utills/useProductDetails";
import ShimmerUi from "./ShimmerUi";
import Star from "./Star";
import { useDispatch } from "react-redux";
import { addItems } from "../utills/cartSlice";
import { ToastContainer } from "react-toastify";
import { GrStar } from "react-icons/gr";
import {  AiFillThunderbolt } from "react-icons/ai";
import {  BsCartPlusFill } from "react-icons/bs";


const ProductPage = () => {
  const { ProductId } = useParams();
  const productDetails = useProductDetails(ProductId);
  const { image, category, description, id, price, rating, title } =
    productDetails;

  // add cart
  const dispatch = useDispatch();
  const addCartHandel = (productDetails) => {
    dispatch(addItems(productDetails));
  };
  // console.log(productDetails);

  return productDetails.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="pt-[10vh] min-h-[89vh] min-w-full">
        <div className="px-28 h-[80vh] flex justify-center items-center">
          <div className="flex min-h-[70vh] justify-between gap-12 ">
            <div className="min-h-[60vh] flex justify-center items-center">
              <img src={image} alt={title} className="w-96" />
            </div>

            <div className="flex flex-col w-full pt-2 relative  ">
              <h4 className="text-3xl py-2 font-extrabold border-b border-black shadow-sm">
                {title}
              </h4>
              <p className="font-serif py-2"> {description}</p>

              <div className=" py-4 flex gap-3 ">
              <Star star={rating.rate} reviews={rating.count}/>
              </div>
              <p className="text-2xl font-bold">MRP : {price * 10}</p>
              <div className="flex justify-between w-full absolute bottom-0">
                <div
                  onClick={() => {
                    addCartHandel(productDetails);
                  }}
                  className="h-16 w-[30%] rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 flex justify-center text-2xl items-center bg-gray-800 text-white uppercase"
                >
                  <BsCartPlusFill />  add to cart
                </div>
                <div className="h-16 w-[30%] rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 flex justify-center text-2xl items-center bg-gray-800 text-white uppercase">
                  <AiFillThunderbolt /> buy Now
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
