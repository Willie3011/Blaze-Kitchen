import combo from "../assets/combo.png";
import pasta from "../assets/pasta.png";
import burger from "../assets/burger.png";
import sandwich from "../assets/sandwich.png";
import chicken from "../assets/sides.png";
import kids from "../assets/kids.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  {
    img: combo,
    name: "Combo Meals"
  },
  {
    img: pasta,
    name: "Pasta"
  },
  {
    img: burger,
    name: "Burger"
  },
  {
    img: sandwich,
    name: "Sandwich"
  },
  {
    img: chicken,
    name: "Sides & Fries"
  },
  {
    img: kids,
    name: "Kids' Meals"
  }
];

const Categories = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const swiperRef = useRef(null); // ← useRef, not useState

  useEffect(() => {
    if (swiperRef.current && prevEl && nextEl) {
      swiperRef.current.params.navigation.prevEl = prevEl;
      swiperRef.current.params.navigation.nextEl = nextEl;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [prevEl, nextEl]);

  return (
    <section className='container h-[20vh]'>
      <div className="flex items-center justify-between h-full">
        <div className="relative flex overflow-x-auto w-full">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)} 
            navigation={{ prevEl, nextEl }}
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 4 },
              1024: { slidesPerView: 5 }
            }}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col items-center">
                  <div className="h-20 w-40">
                    <img src={category.img} alt={category.name} className="w-full h-full object-contain" />
                  </div>
                  <p className="font-medium">{category.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={(node) => setPrevEl(node)}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 rounded-full flex items-center justify-center transition bg-yellow-500">
            <FaLongArrowAltLeft />
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 rounded-full flex items-center justify-center transition bg-yellow-500">
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories