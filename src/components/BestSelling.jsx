import best1 from '../assets/best-1.png'
import best2 from '../assets/best-2.png'
import best3 from '../assets/best-3.png'
import best4 from '../assets/best-4.png'
import best5 from '../assets/best-5.png'
import best6 from '../assets/best-6.png'
import best7 from '../assets/best-7.png'
import { useEffect, useRef, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import BestSellingCard from './BestSellingCard'

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
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;

    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  }


  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -316, behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 316, behavior: 'smooth'
    });
  }

  useEffect(() => {
    const el = scrollRef.current;

    checkScroll();

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

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
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`h-10 w-10 p-2 rounded-full flex items-center justify-center border-2 transition ${canScrollLeft ? "border-yellow-500 bg-yellow-500 text-warm-white hover:text-yellow-500 hover:bg-transparent" : "border-gray-300 text-gray-300 cursor-not-allowed"}`}>
            <FaLongArrowAltLeft className='text-xl' />
          </button>
          <div ref={scrollRef} className="flex gap-16 overflow-x-auto scroll-smooth px-20 no-scrollbar snap-x snap-mandatory">
            {
              bestSellingItems.map((best, index) => (
                <BestSellingCard index={index} best={best}/>
              ))
            }
          </div>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`h-10 w-10 p-2 rounded-full flex items-center justify-center border-2 transition ${canScrollRight ? "border-yellow-500 bg-yellow-500 text-warm-white hover:text-yellow-500 hover:bg-transparent" : "border-gray-300 text-gray-300 cursor-not-allowed"}`}>
            <FaLongArrowAltRight className='text-xl' />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BestSelling