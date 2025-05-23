import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from 'react-toastify';
// import toast, { Toaster } from 'react-hot-toast';


const SingleProduct = () => {
  let {id}= useParams();
  const data=useSelector((state)=>state.authslice.value)
  const naviget=useNavigate()
  const[singleproduct,setsingleproduct]=useState({})
  const[productimage,setproductimage]=useState([])
  const [selectedimage,setseletedimage]=useState(0)
  const baseurl=import.meta.env.VITE_BASE_URL
  useEffect(()=>{
    function getsingleproduct(){
      axios.get(`${baseurl}/product/singleproduct/${id}`).then((res) => {
        console.log(res.data.product)
        setsingleproduct(res.data.product)
        setproductimage(res.data.product.images)
      })
      .catch((error)=>{
        console.log=(error)
      })
      
    };
    getsingleproduct()
  
  },[])
  const handleSelectedImage=(id)=>{
    setseletedimage(id)
  }

  const handleAddtocart=()=>{
    if(data){
      
      axios.post(`${baseurl}/cart/addtocart`,{
        productid:id,
        // quntity,
        userid:data.data._id
      }
      
      ,{
        headers:{
          token:data.token,

        }
      }
    
    ).then((res)=>{
        console.log(res)
      }).catch((error)=>{
        // toast.error('add to cart faild');
        console.log(error)
      })

      // toast("add to cart");
    }else{
      naviget("/login")
    }
  }
  return (
    <section className=" container py-40 bg-white  dark:bg-teal-900 antialiased">
     
  <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">

      <img
          className="w-[350px] hidden dark:block"
          src={productimage[selectedimage]}
          alt=""
        />
        <div className='flex w-[100px] gap-4 mt-3'>
         {productimage.map((imgsrc,i)=>(

           <img onClick={()=>handleSelectedImage(i)}
          className="w-full hidden dark:block"
          src={imgsrc}
          alt=""
        />
        )

         
        )} 
        </div>
        
        {/* <img
          className="w-full dark:hidden"
          src={productimage[0]}
          alt=""
        /> */}
        
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-0">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
         {singleproduct.title}
        </h1>
        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">

          
          <p className=" flex text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
          <FaBangladeshiTakaSign />
          {singleproduct.discountprice}
          </p>
          <del className=" flex text-2xl font-extrabold text-gray-500 sm:text-3xl dark:text-gray-500">
          <FaBangladeshiTakaSign />
            {singleproduct.sellingprice}
          </del>
          <div className="flex items-center gap-2 mt-2 sm:mt-0">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
              </svg>
            </div>
            <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
              (5.0)
            </p>
            <a
              href="#"
              className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
            >
              345 Reviews
            </a>
          </div>
        </div>
        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 ">
         
          <button
            onClick={handleAddtocart}
            className="text-black dark:text-white mt-4 sm:mt-0 bg-black cursor-pointer hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center"
            role="button"
          >
            <svg
              className="w-5 h-5 -ms-2 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
              />
            </svg>
            Add to cart
          </button>
        </div>
        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
        <p className="mb-6 text-gray-500 dark:text-gray-400">
          {singleproduct.discription}
        </p>
        
      </div>
    </div>
  </div>
</section>

  )
}

export default SingleProduct