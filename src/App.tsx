import './App.css'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import Main from './components/Main'
import Service from './components/service'

function App() {

  return (
    <>
    <Header />
    <Main>
    <Hero />
    <About />
    <Service />
    <Contact />
    <Footer />
    </Main>
   
    </>
  )
}

export default App
