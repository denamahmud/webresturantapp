import { AiOutlineClockCircle } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'

function Section3() {
  return (
    <div className='grid grid-cols-1 tablet:grid-cols-2 mt-20 tablet:mt-52'>
        <div className='w-96 p-5 tablet:p-0 text-justify mx-auto text-primary leading-10'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod , Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </div>
     
        <div className='flex flex-col p-10 tablet:p-0 tablet:p-auto'>
            <div className='flex'>
                <div className='bg-primary rounded-full p-2 mr-5'> 
                    <FaLocationArrow color='#191919' size={25}/>
                </div>
                <p className='text-primary'>1510 South Main StreetLas Vegas,</p>
            </div>
            <div className='flex my-5'>
                <div className='bg-primary rounded-full p-2 mr-5'> 
                    <AiOutlineClockCircle color='#191919' size={25}/>
                </div>
                <p className='text-primary'><span className='font-bold'>sun - fri : </span> 10:00a.m. - 12.00p.m.</p>
            </div>
            <div className='flex'>
                <div className='bg-primary rounded-full p-2 mr-5'> 
                    <BsFillTelephoneFill color='#191919' size={25}/>
                </div>
                <p className='text-primary'>5555 - 3333 - 1111</p>
            </div>
        </div>
      
    </div>
  )
}

export default Section3