import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addWishList, removeWishList } from "../utills/wishListSlice";

const ItemCategoryCard = ({ items, index }) => {
  const wishlist = useSelector((store) => store.wishList.items);
  const dispatch = useDispatch();

  // Check if item is in wishlist
  const isInWishlist = wishlist.some((item) => item.id === items.id);

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeWishList(items.id)); // Better to use ID instead of index
    } else {
      dispatch(addWishList(items));
    }
  };

  const { category, image, title, price, rating, id } = items;

  return (
    <div className="group relative flex flex-col p-4 m-3 border-2 border-gray-300 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 min-w-[200px] max-w-[260px]">
      <button
        onClick={handleWishlistToggle}
        className="absolute top-3 right-3 z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm hover:bg-gray-100 transition-colors"
      >
        {isInWishlist ? (
          <AiFillHeart className="w-6 h-6 text-red-500 animate-pulse" />
        ) : (
          <AiOutlineHeart className="w-6 h-6 text-gray-400 hover:text-red-300" />
        )}
      </button>

      <div className="aspect-square w-full bg-gray-50 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-contain hover:object-scale-down transition-[object-fit] duration-300 p-4"
          src={image}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-gray-900 font-medium text-sm leading-tight line-clamp-2 hover:text-green-700 transition-colors">
          {title}
        </h3>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ₹{Math.floor(price * 10)}
          </span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              rating.rate > 3.8
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {rating.rate} ★
          </span>
        </div>
        <button className="w-full py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          View Product
        </button>
      </div>
    </div>
  );
};

export default ItemCategoryCard;
