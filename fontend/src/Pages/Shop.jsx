import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Proudct from '../components/Proudct'
import { ArrowBigDown, ArrowBigUp } from 'lucide-react'
import axios from 'axios'
  

const Shop = () => {
 const [categorishow,setcategotishow]=useState(false)

 const [arrowicon,setarrowicon]=useState(false)

const [allproduct,setallproduct]=useState([])
const[slicesproduct,setslicesproduct]=useState([])
const[showallproduct,setshowallproduct]=useState(false)

useEffect(()=>{
  function getallproduct(){
    axios.get("https://dummyjson.com/products").then((res) => {
      setslicesproduct(res.data.products.slice(0, 6))
      setallproduct(res.data.products)
      
    })
    .catch((error)=>{
      console.log=(error)
    })
    
  };
  getallproduct()
},[])

let handleshowallproduct=()=>{
  setshowallproduct(true)
}

    const allcategoris=[
        {
          name:'laptop',
          imege:'https://img.drz.lazcdn.com/static/bd/p/3df2b482b97e5de9234ca7fd1b882337.jpg_720x720q80.jpg_.webp',
        },
        {
          name:'laptop',
          imege:'https://img.drz.lazcdn.com/static/bd/p/3df2b482b97e5de9234ca7fd1b882337.jpg_720x720q80.jpg_.webp',
        },
        {
          name:'laptop',
          imege:'https://img.drz.lazcdn.com/static/bd/p/3df2b482b97e5de9234ca7fd1b882337.jpg_720x720q80.jpg_.webp',
        },
        {
          name:'laptop',
          imege:'https://img.drz.lazcdn.com/static/bd/p/3df2b482b97e5de9234ca7fd1b882337.jpg_720x720q80.jpg_.webp',
        },
        {
          name:'laptop',
          imege:'https://img.drz.lazcdn.com/static/bd/p/3df2b482b97e5de9234ca7fd1b882337.jpg_720x720q80.jpg_.webp',
        },
        {
          name:'laptop',
          imege:'https://img.drz.lazcdn.com/static/bd/p/3df2b482b97e5de9234ca7fd1b882337.jpg_720x720q80.jpg_.webp',
        },
       
      ]

  return (
    <main className='pt-20'>

        <div className='container'>
            <div className='grid grid-cols-12 gap-y-1 lg:gap-8 lg:mt-4'>
                <div className=' col-span-12 lg:col-span-2'>
                <Card>
                     <CardHeader>
                      <div className='flex justify-between'>
                        <CardTitle>Categoris</CardTitle>
                        


                        <ArrowBigDown 
                        onClick={()=> setcategotishow(!categorishow)}
                        className='w-5 lg:hidden'
                        
                        
                        />

                        <ArrowBigUp className='hidden' />
                      </div>
                         </CardHeader>
                    <CardContent className={`${categorishow ?"block" :"hidden"} lg:block`}>
                         <ul>
                            {allcategoris.map((item) => (
                                <li  className='mt-5 cursor-pointer '>{item.name}</li>
                            )
                            )}
                            
                         </ul>
                     </CardContent>
  
                </Card>
                </div>


                <div className=' col-span-12 lg:col-span-10'>
                <div className=' grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5'>
                  {showallproduct?
                    allproduct.map((item,i)=>(
                      <Proudct productinfo={item}/>
                    )):
                    slicesproduct.map((item,i)=>(
                      <Proudct productinfo={item}/>
                    ))
                  }


                </div>
                
                <div className='  flex justify-center mt-4'>
                  {!showallproduct&&
                  <Button 
                  onClick={handleshowallproduct}
                  variant="outline">More product</Button>
                  }
                  
                </div>
                </div>
                
            </div>
            

        </div>
    </main>
    
  )
}

export default Shop