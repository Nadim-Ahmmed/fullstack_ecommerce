import axios from 'axios'
import React, { useState } from 'react'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"


import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Otpverify = () => {
  const data=useSelector((state)=>state.authslice.value?.payload)
 console.log(data)
  const [otp,setotp]=useState(null)
  const Naviagate=useNavigate()
  



  const handleotpsubmit=()=>{

    axios.post("http://localhost:5000/auth/verifiotp",{
      email:data.email,
      otp: otp
    }).then(()=>{
      Naviagate('/')
    }).catch((error)=>{
      console.log(error)
    })
    
  }
  return (
    <div className='container  flex items-center justify-center h-screen'>

      <input onChange={((e)=>setotp(e.target.value))} className=' border border-b-cyan-600' type="text" />
      <button onClick={handleotpsubmit}>Submit</button>
         {/* <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP> */}
    </div>
  )
}

export default Otpverify

