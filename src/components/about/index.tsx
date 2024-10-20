import Logo from '../../../public/logo.svg'
import Person1 from './assets/person1.svg'
import Person2 from './assets/person2.svg'
import Person3 from './assets/person3.svg'
import Person4 from './assets/person4.svg'
import ArrowDownLeft from './assets/arrow-down-left.svg'
import ArrowRightCircle from './assets/arrow-right-circle.svg'
import ArrowRight from './assets/arrow-right.svg'
import Iphone from './assets/iphone.svg'
import './about.css'
export default function About() {
  return (
    <div className='about-container' id='about'>
        <div className='about-section'>
            <h3>About us</h3>
            <div>
           <h1>Payment pathways, built for you</h1> 
           <p>Transalliance Group. Money Out and Money In solutions give our customers the ability to complete cross-border, multi-currency transactions securely and at speed. And with a single provider for both payouts and pay-ins, say goodbye to the operational headaches of multi-supplier management</p>
            </div>
        </div>
        <div className='row-1-con'>
        <div className='row-1'>
            <div className='image-1'><img src={Person1} alt="" /><div className='box-btn'><span>Money Out</span> <img src={ArrowRight} alt="arrow right with circle" className='arrow-right'/> <div className='box-btn-b'></div></div> </div>
           
            <div className='image-2'><img src={Person2} alt="" /> <div className='line'></div><div className='box'><p>Customer portal for live transaction monitoring</p>
            </div> </div>
            </div>
        </div>
           
         <div className='row-2-con'>
            <div className='row-2'>
            <div className='image-1'>
                <img src={Person3} alt="" /> <div className='box-btn'> <img src={ArrowDownLeft} alt="arrow right with circle" className='arrow-right'/></div> <div className='box'><p>Danish FSA regulated</p></div> </div>
            <div className='image-2'><img src={Iphone} alt="" />  <div className='box-btn'> <img src={ArrowDownLeft} alt="arrow right with circle" className='arrow-right'/></div> <div className='box'><p>90+ currencies served</p></div> <div className='box-btn-l'><span>Learn More</span> <img src={ArrowRightCircle} alt="arrow right with circle" className='arrow-right'/></div></div>
            </div>
            </div>
            
     <div className='row-3'>
        <div className='content'>
            <h1>The human-powered payments network
            </h1>
            <p>Driven by a team of over 200 global payments experts with absolute dedication to solving our customers’ most complex cross-border payments challenges.
            </p>
            <div className='box-btn'> <p>Learn More</p> <img src={ArrowRight} alt="arrow right with circle" className='arrow-right'/></div>
        </div>
        <div className='image-1'>
            <div><img src={Person4} alt="" /></div>

<img src={Logo} alt=""  className='logo'/>
        </div>
     </div>
    </div>
  )
}
