import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import icon4 from '../assets/icon-1.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: icon1,
    title: "Expertly Crafted Meals",
    subtitle: "Our dishes are thoughtfully prepared using refined techniques to bring out bold, balanced, and memorable flavors."
  },
  {
    icon: icon2,
    title: "Seamless Ordering Experience",
    subtitle: "From browsing to checkout, every step is designed to be smooth, convenient, and effortlessly satisfying."
  },
  {
    icon: icon3,
    title: "Fast and Reliable Service",
    subtitle: "Enjoy timely service without compromising quality, ensuring your meals arrive fresh, hot, and ready to enjoy."
  },
  {
    icon: icon4,
    title: "Fresh, Premium Ingredients",
    subtitle: "We use only carefully selected ingredients to ensure every dish delivers exceptional flavor and consistent quality."
  },
]

const Services = () => {
  return (
    <section id='services' className='h-fit bg-yellow-100'>
      <div className="container py-36 flex flex-col-reverse gap-6 lg:flex-row">
        {/* left - grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full lg:w-1/2">
          {
            services.map((service, index) => (
              <ServiceCard service={service} index={index}/>
            ))
          }
        </div>

        {/* right - content */}
        <div className="space-y-8 w-full flex flex-col items-center lg:justify-center lg:items-start lg:w-1/2">
          <h2 className='text-center lg:text-start'>Exceptional Service Rooted in  <span className='text-green-500'>Quality</span></h2>
          <p className="lg:max-w-140 text-center lg:text-start lg:text-balance lg:text-xl">
            We are committed to delivering more than just great meals.
            Every detail is designed to enhance your overall dining experience.
            From preparation to presentation, quality remains at the heart.
            Enjoy consistency, care, and excellence with every single order.</p>
          <button className='button'>Learn More <FaLongArrowAltRight/></button>
        </div>
      </div>
    </section>
  )
}

export default Services