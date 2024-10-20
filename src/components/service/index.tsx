import Icon1 from './assets/icon1.svg'
import Icon2 from './assets/icon2.svg'
import Icon3 from './assets/icon3.svg'
import Icon4 from './assets/icon4.svg'
import Person from './assets/person.svg'
import Image1 from './assets/image1.svg'
import Image2 from './assets/image2.svg'
import Image3 from './assets/image3.svg'
import Image4 from './assets/image4.svg'
import Image5 from './assets/image5.svg'
import Screen from './assets/screen.svg'
import Logo from '../../../public/logo.svg'
import ArrowDownLeft from './assets/arrow-down-left.svg'
import ArrowRight from './assets/arrow-right.svg'
import './service.css'
export default function Service() {
  return (
    <div className='service-container' id='solutions'>
      <div className='service-content-1'>  
       
        <div className='col-1'>
        <h3>Our Service</h3>
        <div className='icons-container'>
        <div className='content'>
          <div className='image-container'><img src={Icon2} alt="" /></div>
          
          <h2>We are your trusted partner</h2>
          <p>We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together.</p>
        </div>
        <div className='content'>
          <div className='image-container'><img src={Icon1} alt="" /></div>
          <h2>We provide the network you need</h2>
          <p>We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed.</p>
        </div>
        <div className='content'>
          <div className='image-container'> <img src={Icon3} alt="" /></div>
         
          <h2>We bring certainty through compliance</h2>
          <p>We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy.</p>
        </div>
        <div className='content'>
          <div className='image-container'><img src={Icon4} alt="" /></div>
          
          <h2>We execute with expertise</h2>
          <p>We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise.
          </p>
        </div>
      </div>
        </div>
       
        <div className='col-2'>
          <div> <h1>The Transalliance Group. difference</h1>
          <p>Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.
          </p> </div>
         <div className='image-container'>
         
          
         <div className='image-1'> <img src={Image1} alt="" /> <div className='box'><p>Our Team</p><h2>Over 200 Experts </h2></div></div>
         <div className='image-2'><img src={Person} alt="" /><div className='box'><h2>Meet our best financial experts</h2> <img src={ArrowDownLeft} alt="" /></div></div>
       </div>

        </div>
       
      </div>
      <div className='service-content-2'>
        <div className='col-1'>
          <img src={Logo} alt="" className='logo' />
          <img src={Screen} alt="" className='screen'/>
        </div>
        <div className='col-2'>
          <h1>One portal, 
every transaction
</h1>
<p>Our customer portal provides an intuitive interface to access all of our services via a simple, single login.
  <ul>
    <li>Real-time, 24/7, 365 transaction tracking</li>
    <li>Customizable & downloadable reports</li>
    <li>Rich data analysis</li>
    <li>Multiple integration methods, built to suit your needs</li>
  </ul>
</p>
        </div>
      </div>
      <div className='service-content-3'>
        <h1>Sectors we serve</h1>
        <p>We simplify the complexities of cross-border payments in some of the world’s most demanding sectors. Learn more about who we serve and how we add value below.</p>
        <div className='image-container'>
          <div className='content'>
          <div className='image'>
            <img src={Image2} alt="" /></div>
            <div className='content-box1'>
              <h3>Financial Services</h3>
              <div><span>Learn More</span> <img src={ArrowRight}alt="" /></div>
              </div>
          </div>
          <div className='content'>
            <div className='image'>
            <img src={Image3} alt="" /></div>
            <div className='content-box2'>
              <h3>iGaming</h3>
              <div><span>Learn More</span> <img src={ArrowRight}alt="" /></div>
            </div>
            
          </div>
          <div className='content'>
            <div className='image'>
            <img src={Image5} alt="" /></div>
            <div className='content-box3'>
              <h3>NGOs </h3>
              <div><span>Learn More</span> <img src={ArrowRight}alt="" /></div>
            </div>
          </div>
          <div className='content'>
            <div className='image'>
            <img src={Image4} alt="" /></div>
            <div className='content-box4'>
              <h3>Corporates</h3>
              <div><span>Learn More</span> <img src={ArrowRight}alt="" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className='service-content-4' id='news&insight'>
<h1>2023 Annual Report</h1>
<p>Click below to read more about Inpay’s impressive year-on-year growth and to download the full report.</p>
      </div>
    
    </div>
  )
}
