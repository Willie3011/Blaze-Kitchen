import background from '../assets/hero_backgound.png';
import heroImg from '../assets/hero.png';
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={`h-dvh bg-no-repeat bg-cover bg-center bg-fixed text-warm-white flex items-center justify-center`} style={{ backgroundImage: `url(${background})` }}>
      <div className="container flex items-center justify-center gap-12 flex-col md:flex-row">
        <div className="flex flex-col space-y-5 w-full md:w-1/2">
          <h1 className='tracking-wide'>Your Go-To Spot for Quick and <span className='text-green-500'>Tasty Eats!</span></h1>
          <p className='md:text-lg text-warm-white/80 max-w-120'>It is a long established fact that a reader will be distracted by the readable content of a page when looking...</p>
          <button className='outline-none'>Order Now <FaLongArrowAltRight /></button>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full h-full overflow-hidden">
            <img src={ heroImg} alt="A burger" className='h-full w-full object-cover'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero