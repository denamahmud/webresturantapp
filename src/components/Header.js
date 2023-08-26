import React, { useState } from 'react'
import { FaEquals } from "react-icons/fa";
import MenuWindow from './MenuWindow';

function Header() {
 
  const [openMenu, setOpenMenu] = useState(false)

  const openMenuFun = () => {
    setOpenMenu(true)
  }

 
  return (
   <>
    <MenuWindow openMenu={openMenu} setOpenMenu={setOpenMenu} /> 
 
    
    <div className=' bg-bgcolor'>
        <div className='w-10/12 mx-auto pt-10 tablet:w-11/12 cursor-pointer'>

            <FaEquals size={40} color='#F9C982' onClick={openMenuFun}/>
        
        </div>
      </div> 
    
    
   </>
  )
}

export default Header