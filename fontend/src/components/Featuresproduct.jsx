import React from 'react'
import Product from './Proudct'

export const Featuresproduct = () => {
    const featuresproductlist=[
        {
            name: "Red Hat",
            href: "#",
            image: "https://bundui-images.netlify.app/products/04.jpeg",
            price: "$28",
            category: "Clothing"
        },
        {
            name: "Red Hat",
            href: "#",
            image: "https://bundui-images.netlify.app/products/04.jpeg",
            price: "$28",
            category: "Clothing"
        },
        {
            name: "Red Hat",
            href: "#",
            image: "https://bundui-images.netlify.app/products/04.jpeg",
            price: "$28",
            category: "Clothing"
        },
        {
            name: "Red Hat",
            href: "#",
            image: "https://bundui-images.netlify.app/products/04.jpeg",
            price: "$28",
            category: "Clothing"
        },
        {
            name: "Red Hat",
            href: "#",
            image: "https://bundui-images.netlify.app/products/04.jpeg",
            price: "$28",
            category: "Clothing"
        },

    ]
  return (
    <section>
        <div className='container mt-4'>
        <h1 className='text-lg lg:text-xl font-bold '>FeaturesProduct</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5'>
             {
            featuresproductlist.map((item)=>(
                <Product/>
            ))
        }
           
        </div>
       
        </div>

    </section>
    
  )
}
