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
import { useEffect, useState } from 'react'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000)

    return () => clearTimeout(timer)
  }, [])


  if(loading) return <Loader/>
  return (
    <>
      <main className='h-dvh w-full font-Poppins'>
        <Navbar />
        <Hero />
        <Categories />
        <About />
        <BestSelling />
        <Services />
        <Menu />
        <Contact />
        <Reviews />
        <Blog />
        <Footer />
      </main>
    </>
  )
}

export default App