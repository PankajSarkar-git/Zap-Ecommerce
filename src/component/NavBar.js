import { BsCart3, BsSearch, BsList } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../utills/authenticationSlice";
import { useState } from "react";

const Navbar = () => {
  const [text, setText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItem = useSelector((store) => store.cart.items);
  const authentication = useSelector(
    (store) => store.authentication.isAuthentication
  );

  const updetFilter = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();
  const LogOutHandel = () => {
    dispatch(logOut());
    localStorage.removeItem("userName");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex justify-between w-full px-6 md:px-28 py-3 bg-blue-600 fixed z-50">
        <h3 className="text-xl tracking-wide text-white font-bold flex items-center">
          Zap! Ecommerce
        </h3>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            <BsList />
          </button>
        </div>
        <div
          className={`md:flex justify-between w-auto items-center p-2 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="list-none z-40 text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none z-40 text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
            <Link to="/ProductList">Product List</Link>
          </li>
          <li className="list-none z-40 text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
            <Link to="/Wishlist">Wish List</Link>
          </li>
          <li className="list-none z-40 text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg">
            <Link to="/Profile">Profile</Link>
          </li>
          <li className="flex list-none z-40 text-lg text-white px-3 py-1 hover:bg-blue-200 hover:text-blue-700 rounded-lg relative">
            <Link to="/cart">
              <BsCart3 className="inline hover:text-blue-700" />
              <p
                className={
                  cartItem.length !== 0
                    ? "bg-red-500 text-xs rounded-md inline px-[4px] absolute top-0 right-0"
                    : "hidden"
                }
              >
                {cartItem.length}
              </p>
              Cart
            </Link>
          </li>
          {/* Uncomment the following code if you want to add a Log Out option */}
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
