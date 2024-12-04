import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=" bg-orange-200">

      
    <div className="  p-10 flex justify-between">
      
     <Image src ="/Group 110.png" alt="logo" width={350} height={300} />


       <div className= "flex justify-between">
      <Image src ="/Funiro Landing Page 4.png" alt="page" width={400} height={300} />
      
      <Image src ="/Funiro Landing Page 3.png" alt= "page" width={300} height={100}/>
      </div>
        
       
        
       
    </div>
    </div>

  )
}

export default Footer
