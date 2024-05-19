import {Link} from 'react-router-dom';
import add_product_icon from '../assets/Product_Cart.svg';
import list_product_icon from '../assets/Product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className="fle flex-col pt-7   w-[100%] max-w-[250px] h-auto min-h-[86vh] bg-red-400">
        <Link to={'/addproduct'} >
            <div className="sidebar-item flex items-center justify-center my-5 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <img src={add_product_icon} alt="" />
                <p>Add Product</p>
            </div>
        </Link>

        <Link to={'/listproduct'} >
            <div className="sidebar-item flex items-center justify-center my-0 mx-5 py-2 px-3 gap-3 rounded-3xl bg-gray-50 cursor-pointer">
                <img src={list_product_icon} alt="" />
                <p>List Product</p>
            </div>
        </Link>


    </div>
  )
}

export default Sidebar