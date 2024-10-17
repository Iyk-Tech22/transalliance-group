import React from 'react'
import SideImage from './assets/laptop-headphone.jpg'
import BottomImage from './assets/travel-document.jpg'
import ArrowRight from './assets/arrow-right-circle.svg'
import Image1 from './assets/image1.svg'
import Image2 from './assets/image2.svg'
import Image3 from './assets/image3.svg'
import Image4 from './assets/image4.svg'
import Image5 from './assets/image5.svg'
import Image6 from './assets/image6.svg'
import './hero.css'
export default function Hero() {
  return (
    <>
    <div className='hero-container'>
        <div className='hero-content'>
        <div className='hero-content-text'><p className='title'>Simplified cross-border payment</p>
        <h1>We are the payments people</h1>
        <p className='hero-content-long-text'>Transalliance Group.’s cross-border payments solutions connect organisations and communities globally to the network they need to thrive. Together, we make money move.</p>
        </div>
       
        <div className='hero-content-image'>
            
            <div className='image-outside-box'><p>24/7, 365 transaction tracking</p></div>
            <div className='box'></div>
<img src={SideImage} alt="flat lay with laptop and headphones" />
<div className='line'></div>
        </div>
        </div>
        <div className='discover-more'>
            <div className='discover-more-content'>
            <div className='box'><span>Discover More</span> <img src={ArrowRight} alt="arrow right with circle" className='arrow-right'/></div>
            <img src={BottomImage} alt="travel concert with document" className='img'/>
            
            </div>
            <div className='side-box'></div>
           
        </div>
      
    </div>
    <div className='hero-service'>
       <h2>Send and Receive Money from all over with ease.</h2>
       <div className='hero-service-images'>
        <img src={Image4} alt="image1" className='image1'/>
        <img src={Image2} alt="image2" className='image2'/>
        <img src={Image1} alt="image3" className='image3'/>
        <img src={Image3} alt="image4" className='image4'/>
        <img src={Image6} alt="image5" className='image5'/>
        <img src={Image5} alt="image6" className='image6'/>
       </div>
   </div>
   </>
  )

}
