import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import About from './components/About'
import BestSelling from './components/BestSelling'
import Services from './components/Services'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className='h-dvh w-full font-Poppins'>
        <Hero />
        <Categories />
        <About />
        <BestSelling />
        <Services />
        <Menu />
        <Contact />
        <Reviews />
        <Blog />
      </main>
      <Footer />
    </>
  )
}

export default App