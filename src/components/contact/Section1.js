import LogoComponent from "../LogoComponent" 




function Section1() {
  return (
    <>
   
        <LogoComponent/>
        
        <div className='w-full grid grid-cols-1 pt-52'>
            <span className='h-3 w-4/5 bg-primary'></span>
            <span className='h-3 w-2/4 bg-primary my-5'></span>
            <span className='h-3 w-1/4 bg-primary'></span>
        </div>
        <h3 className='text-center text-primary pt-20 pb-10 text-2xl tablet:text-5xl'>Contact</h3>
    </>
  )
}

export default Section1