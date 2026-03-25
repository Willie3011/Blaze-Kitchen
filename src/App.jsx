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
  const [openMenu, setOpenMenu] = useState(false);
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
        <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu}/>
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
        {
          openMenu && (
            <div onClick={() => setOpenMenu(prev => !prev)} className="fixed inset-0 bg-black/50 z-40" />
          )
        }
      </main>
    </>
  )
}

export default App