 
import LogoComponent from '../LogoComponent' 

function Section1() {
  return (
    <>
        <LogoComponent/>
        <h3 className='text-center text-primary pt-52 pb-10 text-2xl tablet:text-5xl '>Menu</h3>
        <div className='w-full grid grid-cols-1 mb-0 tablet:mb-32'>
            <span className='h-3 w-full bg-primary my-3'></span>
            <span className='h-3 w-4/5 bg-primary'></span>
        </div>
    </>
  )
}

export default Section1