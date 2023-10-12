import React from 'react'
import { Link } from 'react-router-dom';
import ShimmerUi from './ShimmerUi';
const ListViwe = ({products}) => {
    if (products.length === 0) {
      return <ShimmerUi/>
    }
  return (
    <div>
     {products.map((items)=>{
        const {image, category,description,price,rating,title} = items;
        return(
            <>
            <Link to={"/ProductList/" + items.id} key={items.id}>
            <div key={items.id} className='flex gap-6 p-3 bg-white my-5'>
                <div className="flex items-center">
                    <img src={image} alt="" className='max-h-64 max-w-[12rem]'/>
                </div>
                <div className='p-3 text-lg'>
                    <h2 className='text-3xl font-bold mb-2'>{title}</h2>
                    <p className='text-2xl mb-1'>{category}</p>
                    <p className=' mb-1'>{description.substring(0,100)}......</p>
                    <span className= {rating.rate>3.8 ? "bg-green-600 block w-fit px-1 py-[2] rounded-lg m-2" : "bg-red-600 block w-fit px-1 py-[2] rounded-lg m-2" }>{rating.rate} ⭐</span>
                    <p className='text-2xl mb-1 font-bold'>MRP : {price}</p>
                </div>
            </div>
            </Link>
            </>
        )
     })}
    </div>
  )
}

export default ListViwe
