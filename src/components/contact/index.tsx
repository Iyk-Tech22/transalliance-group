import Image from './assets/image.svg'
import ArrowRightCirce from './assets/arrow-right-circle.svg'
import './contact.css'

export default function Contact() {
  return (
    <div className='contact-container'>
        <div className='image-container'>
         <img src={Image} alt="" />
        </div>
        <div className='contact-form'>
            
            <form>
            <h1>Speak to Sales</h1>
            <div className='form-content'>
            <label htmlFor="email">Email</label>
                <input type="text" />
                <label htmlFor="fname">First Name</label>
                <input type="text" />
                <label htmlFor="lname">Last Name</label>
                <input type="text" />
                <label htmlFor="message">Email</label>
                <textarea name="message" id="message"></textarea>
                
                <label className="agree-content">I agree to receiving payment news and trends from Inpay, including updates to our products and services. I am aware that I can withdraw this consent at any time by contacting Inpay or unsubscribing via email. I agree to Inpay processing my personal data in accordance with its Privacy Policy.
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
                    {/* <input type="checkbox" />
                    <span className='checkmark'></span>
                    <span></span> */}
                 <button className='btn'>Submit <span><img src={ArrowRightCirce} alt="" /></span></button>
            </div>
                
              
            </form>
        </div>
    </div>
  )
}
