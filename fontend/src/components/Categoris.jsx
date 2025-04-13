import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const Categoris = () => {
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
    <section className='mt-10'>
        <div className='container'>
            <h1 className='text-lg lg:text-xl font-bold '>All Categoris</h1>
          <div className='grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 py-[20px]'>
            {allcategoris.map((item)=>(

              <Card className="xl:w-[200px] text-center">
             <CardHeader>
                <img className='' src={item.imege} alt="" />
              </CardHeader>
            <CardContent>
               {item.name}
            </CardContent>
      
            </Card>
            ))}
            
            
            
          </div>
     

        </div>
     
    </section>
    
  )
}
