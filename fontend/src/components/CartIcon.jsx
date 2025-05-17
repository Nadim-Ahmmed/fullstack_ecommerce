import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const CartIcon = () => {
    const data=useSelector((state)=>state.authslice?.value?.data)
  return (
    <>
     {
        data &&
         <div className=' bg-gray-700 fixed right-0 top-2/4 translate-x-[-50%] cursor-pointer rounded-2xl w-[50px] h-[50px] flex justify-center items-center'>
        <Link to="/cart">
        <FaCartArrowDown className=' text-white text-2xl'/>
        </Link>
        
    </div>
    }
    </>
   
   
  )
}

export default CartIcon