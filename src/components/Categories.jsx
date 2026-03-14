import combo from "../assets/combo.png";
import pasta from "../assets/pasta.png";
import burger from "../assets/burger.png";
import sandwich from "../assets/sandwich.png";
import chicken from "../assets/sides.png";
import kids from "../assets/kids.png";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

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
      left: -250, behavior: 'smooth'
    });
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250, behavior: 'smooth'
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
    <section className='container h-[20vh]'>
      <div className="flex items-center justify-between h-full">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`h-10 w-10 p-2 rounded-full flex items-center justify-center border-2 transition ${canScrollLeft ? "border-yellow-500 bg-yellow-500 text-warm-white hover:text-yellow-500 hover:bg-transparent" : "border-gray-300 text-gray-300 cursor-not-allowed"}`}>
          <FaLongArrowAltLeft className='text-xl' />
        </button>
        <div ref={scrollRef} className="flex gap-10 overflow-x-auto scroll-smooth px-4 no-scrollbar snap-x snap-mandatory">
          {
            categories.map((category, index) => (
              <div key={index} className="snap-start flex flex-col items-center min-w-30">
                <div className="h-20 w-40">
                  <img src={category.img} alt={category.name} className="w-full h-full object-contain" />
                </div>
                <p className="font-medium">{category.name}</p>
              </div>
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
    </section>
  )
}

export default Categories