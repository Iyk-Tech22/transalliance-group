import Logo from '/logo.svg'
import Arrow from './assets/arrow.svg'
import './styles/header.css'
export default function Header() {
  return (
    <header>
        <div className='header-logo'><img src={Logo} alt="Logo" /></div>
        <nav className='header-nav'>
            <ul>
                <li>
                   <a href="#home">Home</a> 
                </li>
                <li>
                <a href="#about">About</a> 
                </li>
                <li>
                <a href="#solutions">Solutions</a> 
                </li>
                <li>
                <a href="#news&insight">News & Insights</a> 
                </li>
                <li>
                <a href="#contact">Contact Us</a> 
                </li>
                <li className='header-btn'>
                <a href="#getStarted">Get Started </a> 
                <img src={Arrow} alt="arrow" className='header-arrow' />
                </li>
            </ul>
        </nav>
    </header>
  )
}
