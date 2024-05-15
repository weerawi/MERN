import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png'
import Item from '../Components/Item';
// import all_product from '../Assets/all_product'

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);

    return (
        <div className='my-7 mx-auto w-[82%] max-w-[1280px]'>
            <img className='shopcategory-banner block ' src={props.banner} alt="" />
            <div className="shopcategory-indexSort flex justify-around  items-center mt-5">
                <p>
                    <span className='font-medium'>Showing 1-12</span> out of 36 products
                </p>

                <div className="shopcategory-sort py-2 px-5 border-2 rounded-full">
                    sort by <img className='mx-auto'  src={dropdown_icon} alt=""   />
                </div>

            </div>
        
            <div className="shopcategory-products  mx-auto mt-5 grid justify-center    sm:grid-cols-2 md:grid-cols-3     gap-8   ">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className="shopcategory-loadmore mx-auto flex items-center justify-center w-40 py-3 mt-16
            text-slate-700 bg-gray-200 text-sm font-base rounded-full cursor-pointer">
                Exploremore 
            </div>
        </div>
    )
}

export default ShopCategory