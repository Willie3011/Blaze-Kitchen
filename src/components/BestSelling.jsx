import best1 from '../assets/best-1.png'
import best2 from '../assets/best-2.png'
import best3 from '../assets/best-3.png'
import best4 from '../assets/best-4.png'
import best5 from '../assets/best-5.png'
import best6 from '../assets/best-6.png'
import best7 from '../assets/best-7.png'
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import BestSellingCard from './BestSellingCard'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';


const bestSellingItems = [
  {
    img: best1,
    name: "Lemon Mojito",
    price: 99.99
  },
  {
    img: best2,
    name: "Ceasar Salad",
    price: 109.99
  },
  {
    img: best3,
    name: "Peperoni & Tomato Pizza",
    price: 169.99
  },
  {
    img: best4,
    name: "Bacon & Cheese Burger",
    price: 119.99
  },
  {
    img: best5,
    name: "Chicken Pasta",
    price: 139.99
  },
  {
    img: best6,
    name: "Double cheese burger & chips",
    price: 159.99
  },
  {
    img: best7,
    name: "Noodles Stirfry",
    price: 89.99
  }
]


const BestSelling = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className='min-h-[40vh]'>
      <div className="container py-16 space-y-12">
        {/* heading */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2>Our Most Loved <span className='text-green-500'>Dishes</span></h2>
          <p className='text-center max-w-160 text-gray-700'>Discover the dishes our customers keep coming back for every time.
            Carefully crafted, full of flavor, and consistently delivering a truly satisfying experience.</p>
        </div>

        {/* slider */}
        <div className="flex items-center justify-between h-full">
          
          <div className="relative flex gap-16 overflow-x-auto scroll-smooth px-20 no-scrollbar snap-x snap-mandatory">
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation={{
                prevEl, nextEl
              }}
              autoplay={{delay: 8000}}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 3
                }
              }}
            >
              {
                bestSellingItems.map((best, index) => (
                  <SwiperSlide key={index}>
                    <BestSellingCard best={best} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
            <button ref={(node) => setPrevEl(node)} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-500  p-3 rounded-full">
              <FaLongArrowAltLeft/>
            </button>
            <button ref={(node) => setNextEl(node)} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-yellow-500 p-3 rounded-full">
              <FaLongArrowAltRight/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestSelling