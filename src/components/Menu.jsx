import menu1 from '../assets/menu-1.png'
import menu2 from '../assets/menu-2.png'
import menu3 from '../assets/menu-3.png'
import menu4 from '../assets/menu-4.png'
import menu5 from '../assets/menu-5.png'
import menu6 from '../assets/menu-6.png'
import menu7 from '../assets/menu-7.png'
import menu8 from '../assets/best-3.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import MenuCard from './MenuCard'

const menuItems = [
  {
    img: menu1,
    name: "Single Patty Cheese Burger",
    price: 79.99
  },
  {
    img: menu2,
    name: "Double Cheese Burger & Chips",
    price: 159.99
  },
  {
    img: menu3,
    name: "Lemon Ice Tea",
    price: 59.99
  },
  {
    img: menu4,
    name: "Pasta Salad Bowl",
    price: 119.99
  },
  {
    img: menu5,
    name: "Mint & Orange Cocktail",
    price: 89.99
  },
  {
    img: menu6,
    name: "Margarita Pizza",
    price: 129.99
  },
  {
    img: menu7,
    name: "Cheesy steak sandwich",
    price: 69.99
  },
  {
    img: menu8,
    name: "Peperoni and Tomato Pizza",
    price: 169.99
  },
]

const Menu = () => {
  return (
    <section className=''>
      <div className="container py-36 space-y-12">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4">
          <div className="space-y-4">
            <h2 className='text-center lg:text-start lg:max-w-170'>Handpicked Culinary <span className='text-green-500'>Masterpieces</span></h2>
            <p className='text-center lg:text-start lg:max-w-170 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, vel sint. Vero animi voluptatum consequuntur eos. Adipisci eum maiores illum accusamus molestiae eaque explicabo doloribus?</p>
          </div>

          <button className='button text-nowrap'>View More <FaLongArrowAltRight /></button>

        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            menuItems.map((item, index) => (
              <MenuCard item={item} index={index} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Menu