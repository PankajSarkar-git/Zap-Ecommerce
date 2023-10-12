
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearcart, removeItem } from "../utills/cartSlice";
import { ToastContainer } from "react-toastify";
import { MdDeleteOutline, MdStar } from "react-icons/md";
import {  AiFillThunderbolt } from "react-icons/ai";


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
      <div className="pt-[10vh] min-h-[80vh] min-w-full">
        <div className="px-28 min-h-[79vh] flex justify-center py-5 flex-col gap-5  ">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center">
              <h4 className="text-2xl font-mono font-bold">
                Your cart is empty go and shoping for you
              </h4>
              <div className="mt-5 h-16 w-[30%] rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 flex justify-center text-2xl items-center bg-gray-800 text-white uppercase">
                <Link to="/">go home</Link>
              </div>
            </div>
          ) : (
            cartItems.map((items, index) => {
              const { title, category, description, image, price, rating , id } =
                items;
              return (
                <>
                  <div className="flex justify-between gap-10 p-5 bg-blue-200 h-fit w-full" key={id}>
                    <div className="w-full">
                      <h1 className="text-3xl font-extrabold">{title}</h1>
                      <p className="font-serif mt-2">{description}</p>
                      <div className=" py-4 flex gap-3 ">
                        <p
                          className={
                            rating.rate > 3.7
                              ? "flex text-xl py-1 px-2 rounded-md w-fit bg-green-500"
                              : "flex text-xl py-1 px-2 rounded-md w-fit bg-red-500"
                          }
                        >
                          <MdStar />
                          {rating.rate}
                        </p>
                        <p className=" font-bold text-xl pt-[6px]">
                          {rating.count} -reviews
                        </p>
                      </div>
                      <p className="text-2xl font-bold ">₹ : {price * 10}</p>
                    </div>
                    <div className="h-fit w-fit">
                      <img className="max-h-60" src={image} alt="" />
                      <div
                        onClick={() => {
                          removeCartHandel(index);
                        }}
                        className="h-16 w-full px-1 rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 flex justify-center text-lg items-center bg-gray-800 text-white uppercase"
                      >
                        <MdDeleteOutline /> Remove Item
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          )}
          <p className={cartItems.length === 0
                ? "hidden" : "text-2xl uppercase font-bold mt-4 border-b border-black"}> total price : {Math.floor(totalPrice)}</p>
          <div
            className={
              cartItems.length === 0
                ? "hidden"
                : "flex justify-between w-full px-28"
            }
          >
            <div
              onClick={clearCartHandel}
              className="h-16 w-[30%] rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 flex justify-center text-2xl items-center bg-gray-800 text-white uppercase"
            >
              <MdDeleteOutline /> Clear cart
            </div>
            <div className="h-16 w-[30%] rounded-lg cursor-pointer hover:bg-yellow-300 hover:text-gray-800 flex justify-center text-2xl items-center bg-gray-800 text-white uppercase">
              <AiFillThunderbolt /> buy Now
            </div>
          </div>
          <ToastContainer/>
        </div>
      </div>
    </>
  );
};

export default Cart;
