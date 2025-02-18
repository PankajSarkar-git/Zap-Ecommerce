import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearcart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../utills/cartSlice";
import { ToastContainer } from "react-toastify";
import { MdDeleteOutline, MdStar } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaPlus, FaMinus } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartHandel = () => {
    dispatch(clearcart());
  };

  const removeCartHandel = (id) => {
    dispatch(removeItem({ id }));
  };

  const increaseQuantityHandel = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const decreaseQuantityHandel = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  let totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 10,
    0
  );

  return (
    <>
      <div className="pt-[10vh] min-h-[80vh] w-full bg-gray-100">
        <div className="px-4 sm:px-6 lg:px-28 min-h-[79vh] flex flex-col justify-center py-5 gap-6">
          {/* Empty Cart Message */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center">
              <h4 className="text-2xl font-mono font-bold text-gray-700 text-center">
                Your cart is empty, go and shop for yourself
              </h4>
              <Link
                to="/"
                className="mt-5 h-14 w-full sm:w-[50%] lg:w-[30%] rounded-lg cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-lg font-bold flex justify-center items-center shadow-lg transition-transform transform hover:scale-105"
              >
                Go Home
              </Link>
            </div>
          ) : (
            cartItems.map((item) => {
              const { title, description, image, price, rating, id, quantity } =
                item;
              return (
                <div
                  className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 p-6 bg-white shadow-lg rounded-xl border border-gray-200 w-full"
                  key={id}
                >
                  {/* Product Info */}
                  <div className="w-full sm:w-3/5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
                      {title}
                    </h1>
                    <p className="font-serif mt-2 text-sm sm:text-base text-gray-600">
                      {description}
                    </p>

                    <div className="py-3 flex items-center gap-3">
                      <p
                        className={`flex items-center text-lg py-1 px-3 rounded-md w-fit ${
                          rating.rate > 3.7 ? "bg-green-500" : "bg-red-500"
                        } text-white`}
                      >
                        <MdStar className="mr-1" />
                        {rating.rate}
                      </p>
                      <p className="font-bold text-lg text-gray-700">
                        {rating.count} reviews
                      </p>
                    </div>

                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      ₹ {Math.floor(price * 10)} x {quantity} = ₹ {Math.floor(price * 10 * quantity)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => decreaseQuantityHandel(id)}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 shadow hover:bg-gray-400"
                      >
                        <FaMinus />
                      </button>
                      <p className="text-xl font-semibold">{quantity}</p>
                      <button
                        onClick={() => increaseQuantityHandel(id)}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 shadow hover:bg-gray-400"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  {/* Image & Remove Button */}
                  <div className="h-fit w-fit flex flex-col items-center">
                    <img
                      className=" w-full max-w-[200px] object-contain rounded-lg border border-gray-300 shadow-sm"
                      src={image}
                      alt={title}
                    />
                    <button
                      onClick={() => removeCartHandel(id)}
                      className="mt-4 sm:mt-2 h-12 w-full px-5 rounded-lg cursor-pointer bg-gradient-to-r from-red-400 to-red-500 text-white font-semibold text-lg flex justify-center items-center shadow-md transition-transform transform hover:scale-105"
                    >
                      <MdDeleteOutline className="mr-2 text-xl" /> Remove Item
                    </button>
                  </div>
                </div>
              );
            })
          )}

          {/* Cart Summary & Actions */}
          {cartItems.length > 0 && (
            <>
              <p className="text-2xl uppercase font-bold mt-4 border-b border-gray-700 text-gray-900 pb-2">
                Total Price: ₹ {Math.floor(totalPrice)}
              </p>
              <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
                {/* Clear Cart */}
                <button
                  onClick={clearCartHandel}
                  className="h-16 w-full sm:w-[45%] lg:w-[30%] rounded-lg cursor-pointer bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-semibold flex justify-center items-center shadow-lg transition-transform transform hover:scale-105"
                >
                  <MdDeleteOutline className="mr-2 text-2xl" /> Clear Cart
                </button>

                {/* Buy Now */}
                <button className="h-16 w-full sm:w-[45%] lg:w-[30%] rounded-lg cursor-pointer bg-gradient-to-r from-green-400 to-green-500 text-white text-xl font-semibold flex justify-center items-center shadow-lg transition-transform transform hover:scale-105">
                  <AiFillThunderbolt className="mr-2 text-2xl" /> Buy Now
                </button>
              </div>
            </>
          )}

         
        </div>
      </div>
    </>
  );
};

export default Cart;
