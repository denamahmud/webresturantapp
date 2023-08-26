import React from 'react'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className=' bg-bgcolor font-font1'>
      <div className='footer-img'>
        <div className='relative -bottom-2/4'>
            <div className='flex justify-between w-40 mx-auto py-12 tablet:py-32'>
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
                     className='bg-primary rounded-full p-2'> 
                    <FaFacebookF color='#191919' size={30}/>
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
                  className='bg-primary rounded-full p-2'> 
                            <AiOutlineInstagram color='#191919' size={30}/>
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
                  className='bg-primary rounded-full p-2'> 
                    <AiFillYoutube color='#191919' size={30}/>
                </motion.div>
            
            </div>
            <div className='text-center text-secondary text-lg tablet:text-2xl'>
              <p>Powered by Nelo.</p>
              <p>All rights reserved. 2023</p>
            </div>

        </div>
        
    </div>
    </div>
  )
}

export default Footer