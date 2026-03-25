import { FaFireFlameCurved } from "react-icons/fa6";
import { FaShoppingBasket, FaLongArrowAltRight } from "react-icons/fa";
import { CiSearch, CiMenuFries } from "react-icons/ci";


const Navbar = ({openMenu, setOpenMenu}) => {

 

  return (
    <nav className='fixed h-20 top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg'>
      <div className="container py-4 flex items-center justify-between text-warm-white">
        {/* logo */}
        <h3 className="text-lg text-nowrap md:text-xl lg:text-2xl xl:text-3xl flex items-center gap-2 font-bold"><FaFireFlameCurved className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-yellow-500" /> Blaze Kitchen</h3>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center xl:text-lg gap-6">
          <li>
            <a className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Home</a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">About Us</a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Menu</a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Services</a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Blog</a>
          </li>
          <li>
            <a className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Contact Us</a>
          </li>
        </ul>

        {/* buttons */}
        {/* large screens buttons */}
        <div className="hidden lg:flex items-center gap-2">
          <button className="px-2 py-3 hover:scale-110 transition duration-300 ease-in-out cursor-pointer rounded-lg text-xl"><CiSearch /></button>
          <button className="relative px-2 py-3 hover:scale-110 transition duration-300 ease-in-out cursor-pointer rounded-lg text-xl">
            <FaShoppingBasket />
            <span className="absolute top-1 right-0 rounded-full py-0.5 px-1 bg-yellow-500 text-black text-xs">0</span>
          </button>
          <button className="button">Order Now <FaLongArrowAltRight /></button>
        </div>

        {/* small screens buttons */}
        <div className="flex lg:hidden items-center gap-2">
          <button className="px-2 py-3 hover:scale-110 transition duration-300 ease-in-out cursor-pointer rounded-lg text-xl"><CiSearch /></button>
          <button className="relative px-2 py-3 hover:scale-110 transition duration-300 ease-in-out cursor-pointer rounded-lg text-xl">
            <FaShoppingBasket />
            <span className="absolute top-1 right-0 rounded-full py-0.5 px-1 bg-yellow-500 text-black text-xs">0</span>
          </button>
          <button onClick={() => setOpenMenu(prev => !prev)} className="px-2 py-3 hover:scale-110 cursor-pointer rounded-lg text-xl"><CiMenuFries /></button>
        </div>

        {/* mobile menu */}
        <div className={`absolute top-20 left-0 w-full p-4 sm:p-8 bg-black backdrop-blur-lg transition-all duration-300 ${openMenu ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col text-center gap-6">
            <li>
              <a onClick={() => setOpenMenu(false)} className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Home</a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(false)} className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">About Us</a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(false)} className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Menu</a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(false)} className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Services</a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(false)} className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Blog</a>
            </li>
            <li>
              <a onClick={() => setOpenMenu(false)} className="hover:text-yellow-500 duration-300 ease-in-out text-nowrap" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar