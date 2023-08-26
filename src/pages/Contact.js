import Section1 from '../components/contact/Section1'
import Section2 from '../components/contact/Section2'
import Section3 from '../components/contact/Section3'

function Contact() {
  return (
    <div className='bg-bgcolor font-font1 text-base tablet:text-xl'>
         
        <Section1/>
        <Section2/>
        <Section3/> 
    </div>
  )
}

export default Contact