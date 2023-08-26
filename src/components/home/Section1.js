 import { motion } from "framer-motion" 
import LogoComponent from "../LogoComponent"
import { Link } from "react-router-dom"

function Section1() {
  return (
    <div className='grid grid-cols-1 tablet:grid-cols-2 '>
           
        <div className='w-full'>
            <LogoComponent/>

            
            <div className='mt-40 tablet:mt-40 w-9/12 mx-auto p-2 text-center tablet:text-left'>

                <h3 className='text-2xl tablet:text-6xl text-primary'>We have the best food</h3>
    
                <p className=' text-secondary my-10 '>
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups
                </p>

                
                <motion.div 
                     
                    whileHover={{ 
                        scale : 1.1, 
                    }}  
                    transition={{
                        type : 'tween',
                        stiffness : 80 
                    }}
                className='w-full py-2 tablet:py-5 bg-primary text-center rounded-b-full cursor-pointer'>
                        <a href="#/menu" className=' text-bgcolor text-2xl'>
                            Menu 
                        </a>
                </motion.div>
            </div>
        </div>
        <div className='relative w-9/12 tablet:w-10/12 mx-auto top-20 tablet:-top-20 tablet:-right-14'>
            <img src='imgs/food1.jpg' className='shadow-[-8px_10px_4px_rgba(249,201,130)]'/>
        </div>
    </div>
  )
}

export default Section1
