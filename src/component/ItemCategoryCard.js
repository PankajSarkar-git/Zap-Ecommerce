import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addWishList, removeWishList } from "../utills/wishListSlice";

const ItemCategoryCard = ({ items, index }) => {
  // const [wish, setWish] = useState(false)

  const wishlist = useSelector((store) => {
    return store.wishList.items;
  });
  //  console.log(wishlist[index].id);

  //  console.log(itemno);
  //  console.log(items);

  const { category, image, title, price, rating, id } = items;

  const dispatch = useDispatch();
  const wishlistAddhandel = () => {
    dispatch(addWishList(items));
  };
  const wishlistremovehandel = () => {
    dispatch(removeWishList(index));
  };

  return (
    <div
      className="text-start justify-center shadow-lg h-fit w-64 items-center p-4 m-5 relative bg-white rounded-lg min-[240px]:w-40 min-[240px]:h-72 md:w-44 md:h-fit lg:w-64"
      key={id}
    >
      <AiFillHeart
        onClick={wishlistAddhandel}
        className="absolute text-xl right-2 top-2 cursor-pointer text-red-500 hover:text-red-700 transition duration-300 ease-in-out"
      />
      <img
        className="w-48 h-48 object-contain mx-auto mt-2 min-[240px]:w-32 min-[240px]:h-32"
        src={image}
        alt=""
      />
      <div className="m-3">
        <h2 className="text-lg mx-2 hover:text-green-800 cursor-pointer min-[240px]:text-sm">
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </h2>
        <span
          className={
            rating.rate > 3.8
              ? "bg-green-600 block w-fit px-2 py-1 rounded-lg m-2 min-[240px]:text-sm min-[240px]:m-1 text-white"
              : "bg-red-600 block w-fit px-2 py-1 rounded-lg m-2 min-[240px]:text-sm min-[240px]:m-1 text-white"
          }
        >
          {rating.rate} ⭐
        </span>
        <span className="font-bold mx-2 min-[240px]:text-sm text-gray-700">
          ₹ {Math.floor(price * 10)}
        </span>
      </div>
    </div>
  );
};
export default ItemCategoryCard;
