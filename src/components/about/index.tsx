
import Person1 from './assets/person1.svg'
import Person2 from './assets/person2.svg'
import Person3 from './assets/person3.svg'
// import ArrowDownLeft from './assets/arrow-down-left.svg'
// import ArrowRightCircle from './assets/arrow-right-circle.svg'
import Iphone from './assets/iphone.svg'
export default function About() {
  return (
    <div>
        <div>
            <h3>About</h3>
            <div>
           <h1>Payment pathways, built for you</h1> 
           <p>Transalliance Group. Money Out and Money In solutions give our customers the ability to complete cross-border, multi-currency transactions securely and at speed. And with a single provider for both payouts and pay-ins, say goodbye to the operational headaches of multi-supplier management</p>
            </div>
        </div>
        <div>
            <div>
            <div><img src={Person1} alt="" /></div>
            <div><img src={Person2} alt="" /></div>
            </div>
         
            <div>
            <div><img src={Person3} alt="" /></div>
            <div><img src={Iphone} alt="" /></div>
            </div>
            
        </div>
    </div>
  )
}
