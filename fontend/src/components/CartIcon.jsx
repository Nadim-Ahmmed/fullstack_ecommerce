import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';

const CartIcon = () => {
    const data=useSelector((state)=>state.authslice?.value?.data)
    const baseurl=import.meta.env.VITE_BASE_URL
    

const[cartlist,setCartlist]=useState([])
  useEffect(()=>{
    
    function getCartlist(){
      axios.get(`${baseurl}/cart/usercartlist/${data?._id}`).then((res) => {
        setCartlist(res.data.data)
        
      })
      .catch((error)=>{
        console.log=(error)
      })}
    getCartlist()
  },[])
  return (
    <>
     {
        data &&
         <div className=' bg-gray-700 fixed right-0 top-2/4 translate-x-[-50%] cursor-pointer  rounded-xl w-[50px] h-[50px] flex justify-center items-center'>
        <Link to="/cart">
        <FaCartArrowDown className=' text-white text-2xl'/>
        </Link>
        <h2 className='  text-xl absolute top-[-16px] right-[-5px]'>{cartlist?.length}{""}</h2>
    </div>
    }
    </>
   
   
  )
}

export default CartIcon