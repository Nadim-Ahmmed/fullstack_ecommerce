import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select"

const Checkout = () => {
  const baseurl=import.meta.env.VITE_BASE_URL
const data=useSelector((state)=>state.authslice?.value?.data)
const[cartlist,setCartlist]=useState([])
const[divisionlist,setDivisionlist]=useState([])
const[selectdivision,setSelectDivision]=useState('')
const [deliveryCharge,setDeliveryCharge]=useState(0)
const [paymentmethord,setPaymentMethor]=useState("")
const [fullname,setFullName]=useState("")
const [phone,setPhone]=useState("")
const [address,setAddress]=useState("")
const [state,setState]=useState("")
const [zip,setZip]=useState("")

const navigate=useNavigate()
   useEffect(()=>{
    if(!data){
      navigate("/login")
    }
    function getCartlist(){
      axios.get(`${baseurl}/cart/usercartlist/${data?._id}`).then((res) => {
        setCartlist(res.data.data)
        
      })
      .catch((error)=>{
        console.log=(error)
      })}
    getCartlist()
  },[])
  useEffect(()=>{
    function getDivision(){
      axios.get("https://bdapi.vercel.app/api/v.1/division").then((res)=>{
        setDivisionlist(res.data.data)
      })
    }
    getDivision()
  },[])

 
  
   const totaldiscountprice=cartlist.reduce(function(total, item) {
    
  return total + Math.round(item.productid.discountprice*item.quntity);
}, 0);

const handledivision=(value)=>{
  setSelectDivision(value)

  if(value == 6){
    setDeliveryCharge(60)
  }else{
    setDeliveryCharge(120)
  }
 
}
//  const handelpayment=(item)=>{
// setPaymentMethor(item.id)
//  }

const handlepayment=(value)=>{
  setPaymentMethor(value)
}


const handlePlaceOrder=()=>{
  axios.post("http://localhost:5000/order/placeorder",{
    fullname,
    phone,
    address,
    state,
    zip,
    paymentmethord,
    deliveryCharge,
    cartlist,
    userid:data._id
  }).then((res)=>{
    console.log(res)
  }).catch((error)=>{
    console.log(error)
  })
}
  return (
    <div className="bg-white sm:px-8 px-4 py-6">
  <div className="max-w-screen-xl max-md:max-w-xl mx-auto">
    <div className="flex items-start mb-16">
      <div className="w-full">
        <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-sm text-white font-semibold">1</span>
          </div>
          <div className="w-full h-[3px] mx-4 rounded-lg bg-blue-600" />
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-sm font-semibold text-slate-900">Cart</h6>
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center w-full">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-sm text-white font-semibold">2</span>
          </div>
          <div className="w-full h-[3px] mx-4 rounded-lg bg-slate-300" />
        </div>
        <div className="mt-2 mr-4">
          <h6 className="text-sm font-semibold text-slate-900">Checkout</h6>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <div className="w-8 h-8 shrink-0 mx-[-1px] bg-slate-300 p-1.5 flex items-center justify-center rounded-full">
            <span className="text-sm text-white font-semibold">3</span>
          </div>
        </div>
        <div className="mt-2">
          <h6 className="text-sm font-semibold text-slate-400">Order</h6>
        </div>
      </div>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 lg:gap-x-12">
      <div className="lg:col-span-2">
        <form>
          <div>
            <h2 className="text-xl text-slate-900 font-semibold mb-6">
              Delivery Details
            </h2>
            <div className="grid lg:grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <label className="text-sm text-slate-900 font-medium block mb-2">
                  First Name *
                </label>
                <input
                onChange={(e)=>setFullName(e.target.value)}
                  type="text"
                  placeholder="Enter First Name"
                  className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                />
              </div>
              
              <div>
                <label className="text-sm text-slate-900 font-medium block mb-2">
                  Phone No. *
                </label>
                <input
                onChange={(e)=>setPhone(e.target.value)}
                  type="number"
                  placeholder="Enter Phone No."
                  className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                />
              </div>
              <div>
                <label className="text-sm text-slate-900 font-medium block mb-2">
                  Address *
                </label>
                <input
                onChange={(e)=>setAddress(e.target.value)}
                  type="text"
                  placeholder="Enter Address Line"
                  className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                />
              </div>
              <div>
                <label className="text-sm text-slate-900 font-medium block mb-2">
                  Division *
                </label>
                   <Select
                   onValueChange={handledivision}
                    value={selectdivision}
                    >
                    <SelectTrigger className=" px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      {divisionlist.map((item)=>(
                        <SelectItem key={item.name} value={item.id}>{item.name}</SelectItem>
                      ))}
                      
                      
                    </SelectContent>
                  </Select>
              </div>
              <div>
                <label className="text-sm text-slate-900 font-medium block mb-2">
                  State
                </label>
                <input
                onChange={(e)=>setState(e.target.value)}
                  type="text"
                  placeholder="Enter State"
                  className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                />
              </div>
              <div>
                <label className="text-sm text-slate-900 font-medium block mb-2">
                  Zip Code
                </label>
                <input
                onChange={(e)=>setZip(e.target.value)}
                  type="text"
                  placeholder="Enter Zip Code"
                  className="px-4 py-2.5 bg-white border border-gray-400 text-slate-900 w-full text-sm rounded-md focus:outline-blue-600"
                />
              </div>
            </div>
          </div>
          {/* <div className="mt-12">
            <h2 className="text-xl text-slate-900 font-semibold mb-6">
              Payment
            </h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                <div>
                  <div className="flex items-center">
                    <input
                      onClick={()=>handelpayment()}
                      
                      type="radio"
                      name="method"
                      className="w-5 h-5 cursor-pointer"
                      id="COD"
                      defaultChecked=""
                     
                    />{console.log(item)}
                    <h3 className="text-xl text-slate-900 ml-5" >Cash on Delivwry</h3>
                  </div>
                </div>
               
              </div>
              <div className="bg-gray-100 p-4 rounded-md border border-gray-300 max-w-sm">
                <div>
                  <div className="flex items-center">
                    <input
                    onClick={()=>handelpayment(item)}
                      type="radio"
                      name="method"
                      className="w-5 h-5 cursor-pointer"
                      id="online"
                    />
                  <h3 className="text-xl text-slate-900 ml-5">Online Payment</h3>
                  </div>
                </div>
                
              </div>
            </div>
          </div> */}
           <Select onValueChange={handlepayment} value={paymentmethord}>
                 <SelectTrigger className="px-4 py-2.5 mt-5 bg-white border border-gray-400 text-slate-900 w-80 text-sm rounded-md focus:outline-blue-600">
                   <SelectValue placeholder="Select paymet Method" />
                 </SelectTrigger>
                 <SelectContent>
                   <SelectItem key={"COD"} value="COD">COD</SelectItem>
                   <SelectItem key={"Online"} value="Online">Online</SelectItem>

                 </SelectContent>
                </Select>
          <div className="mt-12 max-w-md">
            
            <div className="flex gap-4">
              
              <button
              onClick={handlePlaceOrder}
                type="button"
                className="flex items-center justify-center font-medium tracking-wide bg-blue-600 hover:bg-blue-700 px-4 py-2.5 rounded-md text-sm text-white cursor-pointer"
              >
                Pay
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="relative">
        <h2 className="text-xl text-slate-900 font-semibold mb-6">
          Order Summary
        </h2>
        <ul className="text-slate-500 font-medium space-y-4">
          {cartlist.map((item)=>(
            <li className="flex flex-wrap gap-4 text-sm">
        {item.productid.title.slice(0,20)}
            <span className="ml-auto font-semibold text-slate-900">{item.productid.discountprice*item.quntity}</span>
          </li>
          ))}
          
          {/* <li className="flex flex-wrap gap-4 text-sm">
            Discount{" "}
            <span className="ml-auto font-semibold text-slate-900">$0.00</span>
          </li> */}
          <li className="flex flex-wrap gap-4 text-sm">
            Shipping{" "}
            <span className="ml-auto font-semibold text-slate-900">{deliveryCharge}</span>
          </li>
          {/* <li className="flex flex-wrap gap-4 text-sm">
            Tax{" "}
            <span className="ml-auto font-semibold text-slate-900">$5.00</span>
          </li> */}
          <hr className="border-slate-300" />
          <li className="flex flex-wrap gap-4 text-[15px] font-semibold text-slate-900">
            Total <span className="ml-auto">{totaldiscountprice + deliveryCharge}</span>
          </li>
        </ul>
        <div className="space-y-4 mt-8">
          <button
            type="button"
            className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            Complete Purchase
          </button>
          <button
            type="button"
            className="rounded-md px-4 py-2.5 w-full text-sm font-medium tracking-wide bg-gray-100 hover:bg-gray-200 border border-gray-300 text-slate-900 cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Checkout