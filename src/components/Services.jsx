import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import icon4 from '../assets/icon-1.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: icon1,
    title: "Warm & Enjoy",
    subtitle: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form."
  },
  {
    icon: icon2,
    title: "Savour & Replay",
    subtitle: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form."
  },
  {
    icon: icon3,
    title: "Delivery Services",
    subtitle: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form."
  },
  {
    icon: icon4,
    title: "Organic Food",
    subtitle: "There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form."
  },
]

const Services = () => {
  return (
    <section className='h-fit bg-yellow-100'>
      <div className="container py-32 flex flex-col-reverse gap-6 lg:flex-row">
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
          <h2 className='text-center lg:text-start'>The Choice of <span className='text-green-500'>Customers</span></h2>
          <p className="lg:max-w-140 text-center lg:text-start lg:text-balance lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro recusandae hic culpa veritatis debitis eum eligendi quis, quibusdam quia ducimus! Pariatur explicabo soluta sapiente recusandae a mollitia sint tempore voluptates?</p>
          <button className='button'>View More <FaLongArrowAltRight/></button>
        </div>
      </div>
    </section>
  )
}

export default Services