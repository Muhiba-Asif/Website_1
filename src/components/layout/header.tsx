import React from 'react'
import {Search,Contact,Heart,ShoppingBag} from "lucide-react"
import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-between
    ">
        <Search />
        <Image src="/Frame 168.png"  alt ="logo"width={100} height={100} />
      
    <div/>
        <div>
        <h2>Home</h2>
    </div>
    <div>
        <h3>Shop</h3>
    </div>
    <div>
        <h1 >About</h1>
    </div>
<div>
    <h3>Contact</h3>
</div>
<div >
    <Contact/>
</div>
<div>
    <Heart/>
</div>
<div>
    <ShoppingBag/>
</div>
</div>
  )

}

export default Header
