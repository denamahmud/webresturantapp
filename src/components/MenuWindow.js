import React from 'react'
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube} from "react-icons/ai";
import { motion } from 'framer-motion'; 


function MenuWindow({ openMenu, setOpenMenu}) {
 
  
  const closeMenuFun = () => {
    setOpenMenu(false)
    
  }
 
  return (
   

    <motion.div
   
      animate = {
        openMenu === true ? { x : 0 , opacity : 10} :  {x : -2000, opacity : 0}
       
      }
      initial = {
         {x : -2000, opacity : 0}
      }
      
      transition={{ 
        type : 'tween',
        stiffness : 100 ,
        duration : 3
      }}
      className=' bg-primary fixed z-10 w-full h-full font-font1'>

        <div className='w-80 pt-10 px-20'>
         <div className='cursor-pointer'>
            <FaTimes size={40} onClick={closeMenuFun}/>
         </div>
          <Link to='/' className='absolute block top-10 left-[40%] tablet:left-[46%] text-white-color text-5xl font-font1'>
              <span className='text-bgcolor'>
                  NE
              </span>
              <span className=' text-white-color'>
                  LO
              </span>
            </Link>
          
        </div>
        <div className='text-center grid grid-cols-1 gap-14 font-font1 my-28 text-3xl'>
        
            <motion.a
                transition={{ duration : .5 , type : 'spring'}}
                whileHover={{ 
                    scale : 1.3,
                    backgroundColor : '#191919' ,  
                    cursor : 'pointer',
                    color : '#fff', 
                  }}
                  whileTap={{ 
                
                    backgroundColor : null ,
                    color :  '#191919'
                }}
                className='text-lg tablet:text-3xl w-52 block mx-auto rounded-b-full' 
                href='#/'
                onClick={closeMenuFun} 
                >
                
                Home 
            </motion.a>
      
      
            <motion.a
                transition={{ duration : .5 , type : 'spring'}}
                whileHover={{ 
                    scale : 1.3,
                    backgroundColor : '#191919' , 
                    cursor : 'pointer',
                    color : '#fff', 
                  }}
                  whileTap={{ 
                
                    backgroundColor : null ,
                    color :  '#191919'
                }} 
                className='text-lg tablet:text-3xl w-52 mx-auto rounded-b-full '
                onClick={closeMenuFun}
                href='#/our-story'
                >
                
                Our Story
            
            </motion.a>
            
            <motion.a 
                  transition={{ duration : .5 , type : 'spring'}}
                  whileHover={{ 
                      scale : 1.3,
                    backgroundColor : '#191919' ,  
                    cursor : 'pointer',
                    color : '#fff', 
                  }}
                  whileTap={{ 
                
                    backgroundColor : null ,
                    color :  '#191919'
                }}
                className='text-lg tablet:text-3xl w-52 mx-auto rounded-b-full'
                href='#/menu'
                onClick={closeMenuFun} 
                >
                
                Menu
            
            </motion.a>
            
            <motion.a
                  transition={{ duration : .5 , type : 'spring'}}
                  whileHover={{ 
                      scale : 1.3,
                    backgroundColor : '#191919' ,  
                    cursor : 'pointer',
                    color : '#fff' 
                  }}
                  whileTap={{ 
                
                    backgroundColor : null ,
                    color :  '#191919'
                }}
                className='text-lg tablet:text-3xl w-52 mx-auto rounded-b-full'
                   href='#/contact'
                   onClick={closeMenuFun} 
                >
                
                Contact
            
            </motion.a>


      
        </div>
        <div className='flex justify-between w-40 mx-auto my-20'>
          <motion.div 
                whileHover={{ 
                    cursor : 'pointer' ,
                    rotate : 180
                }}
                transition={{
                  type: 'tween',
                  stiffness: 200,
                  damping: 50
                }}
              className=' bg-bgcolor rounded-full p-2'> 
              <FaFacebookF color='#fff' />
          </motion.div>


          <motion.div
              whileHover={{ 
                    cursor : 'pointer' ,
                    rotate : 180
                }}
                transition={{
                  type: 'tween',
                  stiffness: 200,
                  damping: 50
                }} 
          className='bg-bgcolor rounded-full p-2'> 
              <AiOutlineInstagram color='#fff' />
          </motion.div>
          <motion.div 
              whileHover={{ 
                cursor : 'pointer' ,
                rotate : 180
                }}
                transition={{
                  type: 'tween',
                  stiffness: 200,
                  damping: 50
                }}
              className='bg-bgcolor rounded-full p-2'> 
              <AiFillYoutube color='#fff' />
          </motion.div>

        </div>
    </motion.div> 

  
  )
}

export default MenuWindow
