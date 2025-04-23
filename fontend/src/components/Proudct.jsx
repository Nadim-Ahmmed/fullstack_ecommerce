import React from 'react'

import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";

const product = {
  name: "Red Hat",
  href: "#",
  image: "https://bundui-images.netlify.app/products/04.jpeg",
  price: "$28",
  category: "Clothing"
};

const Product = ({productinfo}) => {
  
  return (
    <div className=" mt-4  group relative space-y-4 shadow-lg dark:shadow-teal-950 p-4">
      <figure className="group-hover:opacity-90">
        <img
          className="w-full rounded-lg aspect-square"
          src={productinfo? productinfo.thumbnail:product.image}
          
          alt={productinfo? productinfo.thumbnail:product}
        />
      </figure>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h3 className="text-sm lg:text-lg">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {productinfo?productinfo.title:product.name}
            </a>
          </h3>
          <p className="text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="lg:text-lg font-semibold">${productinfo?productinfo.price:product.price}</p>
      </div>
      <div className="flex gap-4">
        
        <Button variant="outline" className="w-full">
          <PlusIcon className="size-4 me-1" /> Add to Card
        </Button>
      </div>
    </div>
  )
}

export default Product




