import React from 'react'

import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { Link, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';

const product = {
  name: "Red Hat",
  href: "#",
  image: "https://bundui-images.netlify.app/products/04.jpeg",
  price: "$28",
  category: "Clothing"
};

const Product = ({productinfo}) => {
  const data=useSelector((state)=>state.authslice.value)
  const baseurl=import.meta.env.VITE_BASE_URL
  const naviget=useNavigate()
  const handleAddtoCart=(id)=>{
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
    <div className=" mt-4  group relative space-y-4 shadow-lg dark:shadow-teal-950 p-4">
      
      <Link to={`/singleproduct/${productinfo&&productinfo._id}`}>
      <figure className="group-hover:opacity-90">
        
        
         <img
          className="w-full rounded-lg aspect-square"
          src={productinfo? productinfo.images[0]:product.image}
          
          alt={productinfo? productinfo.images:product}
        />
        
       
      </figure>
      </Link>
      
      <div className=" flex-col lg:flex-row justify-between">
        <div>
          <h3 className="text-sm lg:text-lg">
            <Link to={`/singleproduct/${productinfo&&productinfo._id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {productinfo?productinfo.title:product.name}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <div className='flex gap-3'>
          <p className=" text-sm lg:text-lg font-semibold">${productinfo?productinfo.discountprice:product.discountprice}</p>
        <del className="lg:text-lg font-semibold">${productinfo?productinfo.sellingprice:product.sellingprice}</del>
        </div>
        
      </div>
      <div onClick={()=>handleAddtoCart(productinfo._id)} className="flex gap-4">
        
        <Button variant="outline" className="w-full !z-50">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </div>
    </div>
  )
}

export default Product




