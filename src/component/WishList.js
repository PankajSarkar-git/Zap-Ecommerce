import ItemCategoryCard from "./ItemCategoryCard";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const WishList = () => {
 const wishList = useSelector((store)=>{
  return store.wishList.items;
 }) 
  // console.log(wishList);

  return wishList.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="bg-gray-200">
        <p className="p-2 flex-wrap pt-6 px-36 text-3xl">Our Store</p>
        <div className=" flex justify-around shadow-md p-2 flex-wrap px-36">
          {wishList.map((items , index) => {
            return (
              <Link to={"/ProductList/" + items.id} key={items.id}>
              <ItemCategoryCard
                  items={items}
                  itemno={index}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default WishList;
