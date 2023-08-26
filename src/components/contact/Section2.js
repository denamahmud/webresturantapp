import { motion } from "framer-motion" 


function Section2() {
  return (
    <form >
        <div className='grid grid-cols-1 tablet:grid-cols-2 p-10'>
            <div className='grid grid-cols-1 my-auto tablet:pt-32 '>
                <div className='grid grid-cols-1 tablet:px-32'>
                    <label className='text-primary '>*Name</label>
                    <input type='text' placeholder='name.. ' className=' border-2 rounded-xl border-primary	outline-none bg-input p-2 text-white-color'/> 
                </div>
                <div className='grid grid-cols-1 tablet:px-32 my-5'>
                    <label className='text-primary'>*Email</label>
                    <input type='email' placeholder='email.. ' className=' border-2 rounded-xl border-primary outline-none bg-input p-2  text-white-color'/> 
                </div>
                <div className='grid grid-cols-1 tablet:px-32 '>
                    <label className='text-primary'>*Phone</label>
                    <input type='text' placeholder='phone.. ' className=' border-2 rounded-xl border-primary	outline-none bg-input p-2  text-white-color'/> 
                </div>
            </div>

            <div className='grid grid-cols-1 tablet:mt-auto w-full mt-10 '>  
                <label className='text-primary'>*Message</label>
                <textarea className='tablet:mr-40 h-60 rounded-xl border-primary border-2 outline-none bg-input p-2  text-white-color textarea1'>

                </textarea>
            </div>
        </div>
        <motion.div  
            whileHover={{ 
                scale : 1.1, 
            }}  
            transition={{
                type : 'tween',
                stiffness : 80 
            }}
            className='w-60 my-10 py-2 mx-auto tablet:py-2 bg-primary text-center rounded-b-full cursor-pointer'>
               Send gggggggggggg
        </motion.div> 
    </form>
  )
}

export default Section2
