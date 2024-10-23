import './footer.css'
import Logo from './assets/footer-logo.svg'
import ArrowRightCircle from './assets/arrow-right-circle.svg'
import Facebook from './assets/facebook.svg'
import Twitter from './assets/twitter.svg'
import Instagram from './assets/instagram.svg'
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
        <div className='item-1 items'>
          <div className='image-container'><img src={Logo} alt="" /> <p>Transalliance Group.</p></div>
          <button className='btn'>Contact Us <span><img src={ArrowRightCircle} alt="" /></span></button>
        </div>
        <div className='item-2 items'>
            <h3>Offices</h3>
            <p>Denmark:Toldbodgade 55B1253, Copenhagen United Kingdom:  </p>
            <p>1 PoultryEC2R 8EJ, London info@inpay.comPhone: +45 88 610 600</p>
        </div>
        <div className='two-items'>
        <div className='items'>
            <h3>Solutions</h3>
            <p>Money Out</p>
            <p>Money In</p>
        </div>
        <div className='item-3 items'><h3>Sectors</h3>
        <p>Financial Services</p>
        <p>iGaminig</p>
        <p>Corporates</p>
        <p>NGOs</p>
        </div>
        </div>
   
       
<div className='item-4 items'>
    <h3>
        Other
    </h3>
    <p>About Us</p>
    <p>News & Insights</p>
    <p>Compliance</p>
    <p>Careers</p>
    <p>Contact us</p>
</div>
      
        </div>
        <div className='social-media'>
            <h3>Social Media</h3>
            <div className='icons-container'>
             <div className='image-container'>
                <img src={Facebook} alt="" />
             </div>
             <div className='image-container'>
                <img src={Twitter} alt="" />
             </div>
             <div className='image-container'>
                <img src={Instagram} alt="" />
             </div>
            </div>
        </div>
    </div>
  )
}
