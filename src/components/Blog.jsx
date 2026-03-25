import blog from '../assets/blog.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Blog = () => {
  return (
    <section className=''>
      <div className="container py-36 space-y-8">
        {/* heading */}
        <div className="flex flex-col text-center gap-4 items-center">
          <h2>Blaze Kitchen <span className='text-green-500'>Insights</span></h2>
          <p className='line-clamp-2 max-w-150'>Discover the stories behind our dishes, chefs, and culinary inspirations.
            Learn tips, trends, and secrets that make every meal unforgettable.</p>
        </div>
        {/* headline blog */}
        <div className="rounded-xl h-120 w-full overflow-hidden relative">
          <img src={blog} alt="" className='w-full h-full object-cover'/>
          
          <div className="absolute inset-0 flex flex-col justify-center px-12 space-y-6 text-warm-white bg-linear-to-r from-black/70 to-black/20">
            <span className='text-sm font-light block'>March 24, 2026</span>
            <h3 className='font-medium text-xl md:text-3xl lg:text-4xl max-w-100'>The Art of Flame-Grilled Perfection</h3>
            <p className='line-clamp-2 max-w-120'>At Blaze Kitchen, mastering the flame-grill is both science and passion. From selecting the finest ingredients to perfecting cooking techniques, every dish reflects our dedication to bold, consistent, and unforgettable flavors.</p>

            <button className='button-3'>Read More <FaLongArrowAltRight /></button>
          </div>
          <button className="absolute right-8 top-8 p-4 rounded-full bg-yellow-500 text-warm-white text-lg cursor-pointer transition duration-300 hover:scale-105"><FaLongArrowAltRight/></button>
        </div>
        {/* other blogs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* blog */}
          <div className="space-y-4 flex flex-col w-full hover:shadow-lg p-4">
            <span className='block text-sm font-light'>
              March 24, 2026
            </span>
            <h3 className='font-medium text-xl md:text-3xl lg:text-4xl'>Fresh Ingredients, Exceptional Taste</h3>
            <p className='line-clamp-2'>Quality begins with ingredients. We carefully source the freshest produce and proteins, ensuring each dish delivers a full-bodied flavor experience that our customers keep coming back for.</p>

            <button className='button-3'>Read More <FaLongArrowAltRight/></button>
          </div>
          {/* blog */}
          <div className="space-y-4 flex flex-col w-full hover:shadow-lg p-4">
            <span className='block text-sm font-light'>
              March 24, 2026
            </span>
            <h3 className='font-medium text-xl md:text-3xl lg:text-4xl'>Behind the Scenes at Blaze Kitchen</h3>
            <p className='line-clamp-2'>Step into our kitchen and discover the meticulous care behind every meal. From our chefs’ expertise to our dedication to consistency, we bring passion and precision to every plate.</p>

            <button className='button-3'>Read More <FaLongArrowAltRight/></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog