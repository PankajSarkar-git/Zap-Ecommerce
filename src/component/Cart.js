import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearcart, removeItem } from "../utills/cartSlice";
import { ToastContainer } from "react-toastify";
import { MdDeleteOutline, MdStar } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();
  const clearCartHandel = () => {
    dispatch(clearcart());
  };
  const removeCartHandel = (index) => {
    dispatch(removeItem(index));
  };

  let totalPrice = 0;
  for (let index = 0; index < cartItems.length; index++) {
    totalPrice += cartItems[index].price * 10;
  }

  return (
    <>
      <div className="pt-[10vh] min-h-[80vh] w-full bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-28 min-h-[79vh] flex flex-col justify-center py-5 gap-5">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center">
              <h4 className="text-2xl font-mono font-bold text-center">
                Your cart is empty, go and shop for yourself
              </h4>
              <div className="mt-5 h-16 w-full sm:w-[50%] lg:w-[30%] rounded-lg cursor-pointer hover:bg-yellow-400 hover:text-gray-800 flex justify-center text-2xl items-center bg-yellow-500 text-white uppercase shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                <Link to="/">Go Home</Link>
              </div>
            </div>
          ) : (
            cartItems.map((item, index) => {
              const { title, category, description, image, price, rating, id } =
                item;
              return (
                <div
                  className="flex flex-col sm:flex-row justify-between gap-10 p-5 bg-white shadow-lg rounded-lg w-full"
                  key={id}
                >
                  <div className="w-full">
                    <h1 className="text-3xl font-extrabold">{title}</h1>
                    <p className="font-serif mt-2">{description}</p>
                    <div className="py-4 flex gap-3">
                      <p
                        className={`flex text-xl py-1 px-2 rounded-md w-fit ${
                          rating.rate > 3.7 ? "bg-green-500" : "bg-red-500"
                        } text-white`}
                      >
                        <MdStar className="mr-1" />
                        {rating.rate}
                      </p>
                      <p className="font-bold text-xl pt-[6px] text-gray-700">
                        {rating.count} reviews
                      </p>
                    </div>
                    <p className="text-2xl font-bold text-gray-800">
                      ₹ {price * 10}
                    </p>
                  </div>
                  <div className="h-fit w-full sm:w-auto flex flex-col items-center">
                    <img
                      className="max-h-60 w-full object-contain rounded-lg border border-gray-300"
                      src={image}
                      alt={title}
                    />
                    <div
                      onClick={() => {
                        removeCartHandel(index);
                      }}
                      className="mt-4 sm:mt-2 h-12 w-full sm:w-auto px-4 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white flex justify-center text-lg items-center bg-red-400 text-white uppercase shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <MdDeleteOutline className="mr-2" /> Remove Item
                    </div>
                  </div>
                </div>
              );
            })
          )}
          {cartItems.length > 0 && (
            <>
              <p className="text-2xl uppercase font-bold mt-4 border-b border-black">
                Total Price: ₹ {Math.floor(totalPrice)}
              </p>
              <div className="flex flex-col sm:flex-row justify-between w-full">
                <div
                  onClick={clearCartHandel}
                  className="mt-4 sm:mt-0 h-16 w-full sm:w-[45%] lg:w-[30%] rounded-lg cursor-pointer hover:bg-red-500 hover:text-white flex justify-center text-2xl items-center bg-red-400 text-white uppercase shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  <MdDeleteOutline className="mr-2" /> Clear Cart
                </div>
                <div className="mt-4 sm:mt-0 h-16 w-full sm:w-[45%] lg:w-[30%] rounded-lg cursor-pointer hover:bg-green-500 hover:text-white flex justify-center text-2xl items-center bg-green-400 text-white uppercase shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  <AiFillThunderbolt className="mr-2" /> Buy Now 
                </div>
              </div>
            </>
          )}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Cart;
