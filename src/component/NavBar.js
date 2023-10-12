import { BsCart3, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../utills/authenticationSlice";
// import { useState } from "react";
import { useState } from "react";

const Navbar = () => {

  const [text , setText] = useState("");
  const cartItem = useSelector((store) => {
    return store.cart.items;
  });
  const authentication = useSelector((store) => {
    return store.authentication.isAuthentication;
  });
  const updetFilter = (e) => {
    setText(e.target.value)
  }
  const dispatch = useDispatch();
  const LogOutHandel = () => {
    dispatch(logOut());
    localStorage.removeItem("userName");
  };
  return (
    <>
      <div className=" flex justify-between w-full px-28 py-3 bg-blue-600 fixed z-10 ">
        <h3 className="text-xl tracking-wide text-white font-bold flex items-center ">
          Zap! Ecommerce
        </h3>
       {/* {authentication && <div className="flex items-center">
          <input
            className="ml-5 w-96 h-10 text-2xl p-1 border border-white"
            type="text"
            value={text}
            onChange={updetFilter}
          />
          <div className="bg-white p-[9] h-10">
            <BsSearch color="#230dc9" />
          </div>
        </div>} */}





        
        {/* {authentication ? (
          <div className="flex justify-between w-auto items-center p-2">
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/ProductList">Product List</Link>
            </li>
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/Wishlist">Wish List</Link>
            </li>
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/Profile">Profile</Link>
            </li>
            <li className="flex list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg relative">
              <Link to="/cart">
                <BsCart3 className="inline  hover:text-blue-700" />
                <p
                  className={
                    cartItem.length !== 0
                      ? "bg-red-500 text-xs rounded-md inline px-[4px] absolute top-0 right-0"
                      : "hidden"
                  }
                >
                  {cartItem.length}
                </p>
                Card
              </Link>
            </li>
            <li
              onClick={LogOutHandel}
              className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg"
            >
              <Link to="/login">Log Out</Link>
            </li>
          </div>
        ) : (
          <div className="flex justify-between w-auto items-center p-2">
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/login">Login</Link>
            </li>
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/sinup">Sin Up</Link>
            </li>
          </div>
        )} */}


        <div className="flex justify-between w-auto items-center p-2">
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/">Home</Link>
            </li>
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/ProductList">Product List</Link>
            </li>
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/Wishlist">Wish List</Link>
            </li>
            <li className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
              <Link to="/Profile">Profile</Link>
            </li>
            <li className="flex list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg relative">
              <Link to="/cart">
                <BsCart3 className="inline  hover:text-blue-700" />
                <p
                  className={
                    cartItem.length !== 0
                      ? "bg-red-500 text-xs rounded-md inline px-[4px] absolute top-0 right-0"
                      : "hidden"
                  }
                >
                  {cartItem.length}
                </p>
                Card
              </Link>
            </li>
            {/* <li
              onClick={LogOutHandel}
              className="list-none text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg"
            >
              <Link to="/login">Log Out</Link>
            </li> */}
          </div>
      </div>
    </>
  );
};
export default Navbar;
