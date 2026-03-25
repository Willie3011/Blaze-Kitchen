import background from '../assets/hero_backgound.png';
import heroImg from '../assets/hero.png';
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={`w-screen bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden text-warm-white flex flex-col items-center justify-center gap-4`} style={{ backgroundImage: `url(${background})` }}>
      <div className="container flex items-center justify-center gap-12 flex-col md:flex-row py-66">
        <div className="flex flex-col space-y-5 w-full md:w-1/2 items-center md:items-start text-center md:text-start">
          <h1 className='tracking-wide'>Where Every Bite Is Packed with Flavor, Fire, and <span className='text-green-500'>Pure Satisfaction!</span></h1>
          <p className='md:text-lg text-warm-white/80 max-w-120'>Indulge in expertly crafted, flame-grilled dishes made with the finest ingredients and a passion for exceptional taste.</p>
          <button className='button outline-none'>Explore Our Menu <FaLongArrowAltRight /></button>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-full max-md:w-3/4 overflow-hidden">
            <img src={ heroImg} loading='lazy' alt="A burger" className='h-full w-full object-cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero