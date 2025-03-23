import React from 'react'
import amel from '../../assets/amel.jpg'

const ContactComponent = () => {
  return (
    <div className='container-contact'>
        <div>
         <img className='img-contact' src={amel} alt="Girl working with a laptop and drinking coffee from a cafeteria" />    
        </div>
     <div className='contact-info'>
        <h1 className='title-contact'>We are here to help you 24/7</h1>
        <p className='p-contact'>Contact our customer service team through our email anamolina.r08@gmail.com</p>
        <p className='p-contact'>You can also call us on +34 000 00 00 00, an exclusive help line for Spanish accounts.</p>
     </div>
      
    </div>
  )
}

export default ContactComponent
