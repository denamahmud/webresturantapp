import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';

 

function Home() {
   
  
    return(


        <div className='bg-bgcolor font-font1 text-base tablet:text-xl'>

            <Section1/> 
            <Section2/>
            <Section3/>
    
        </div>
  )
}

export default Home