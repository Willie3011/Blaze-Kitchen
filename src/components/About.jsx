import { FaLongArrowAltRight } from "react-icons/fa";
import burger from "../assets/burger.jpg";
import kebab from "../assets/kebab.jpg";

const About = () => {
  return (
    <section id="about" className='container min-h-[40vh] py-36'>
      <div className="flex items-center justify-between lg:flex-row flex-col-reverse gap-12">
        {/* images */}
        <div className="relative w-full lg:w-1/2 grid grid-cols-2 lg:flex flex-wrap lg:flex-row justify-center md:justify-start">
          {/* main image */}
          <div className="w-full max-w-md h-80 lg:h-105 border-4 border-white rounded-xl overflow-hidden">
            <img src={burger} alt="Burger" className="w-full h-full object-cover"/>
          </div>
          {/* secondary image */}
          <div className="h-80 w-full lg:w-56 lg:h-56 lg:absolute lg:-bottom-10 lg:right-10 border-4 border-white overflow-hidden rounded-xl mt-5 md:mt-0">
            <img src={kebab} alt="Kebab" className="h-full w-full object-cover"/>
          </div>
        </div>
        {/* content */}
        <div className="space-y-5 md:w-1/2 w-full">
          <h2 className="text-center lg:text-start">
            Crafted With Fire and <span className="text-green-500">Passion.</span>
          </h2>
          <p className="font-medium text-center lg:text-start">Blaze Kitchen was created for those who appreciate the art of truly good food. Every dish is thoughtfully prepared using carefully selected ingredients, flame-grilled techniques, and a dedication to delivering bold, refined flavors. From the first bite to the last, our focus is on quality, consistency, and creating moments worth savoring. Whether you're dining in or ordering out, Blaze Kitchen brings you a seamless blend of comfort, craftsmanship, and unforgettable taste.</p>
          <div className="flex items-center gap-4 flex-col sm:flex-row justify-center lg:justify-start">
            <button className="button text-nowrap">Explore Our Menu <FaLongArrowAltRight /></button>
            <button className="text-green-500 font-semibold text-lg underline cursor-pointer transition-all duration-300 hover:-translate-y-1">Learn More</button>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About