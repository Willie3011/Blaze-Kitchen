import blog from '../assets/blog.jpg'
import { FaLongArrowAltRight } from 'react-icons/fa'

const Blog = () => {
  return (
    <section className=''>
      <div className="container py-36 space-y-8">
        {/* heading */}
        <div className="flex flex-col text-center gap-4 items-center">
          <h2>Our <span className='text-green-500'>Blog</span></h2>
          <p className='line-clamp-2 max-w-150'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum id aut ullam fuga! Rem laborum asperiores blanditiis nam harum.</p>
        </div>
        {/* headline blog */}
        <div className="rounded-xl h-120 w-full overflow-hidden relative">
          <img src={blog} alt="" className='w-full h-full object-cover'/>
          
          <div className="absolute inset-0 flex flex-col justify-center px-12 space-y-6 text-warm-white bg-linear-to-r from-black/70 to-black/20">
            <span className='text-sm font-light block'>March 24, 2026</span>
            <h3 className='font-medium text-xl md:text-3xl lg:text-4xl max-w-100'>The Culinary Canvas: Artistry on a Plate Buffet</h3>
            <p className='line-clamp-2 max-w-120'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias consequuntur! Deleniti sint deserunt corrupti atque optio ad aperiam ipsa alias, nulla dolorum doloribus aspernatur cupiditate eligendi nostrum mollitia laboriosam eveniet unde. Repudiandae possimus nulla sequi quae consequuntur explicabo dicta. Sint eligendi ipsum in facere! Odio nesciunt facere a. Consequatur?</p>

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
            <h3 className='font-medium text-xl md:text-3xl lg:text-4xl'>The Culinary Canvas: Artistry on a Plate Buffet</h3>
            <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias consequuntur! Deleniti sint deserunt corrupti atque optio ad aperiam ipsa alias, nulla dolorum doloribus aspernatur cupiditate eligendi nostrum mollitia laboriosam eveniet unde. Repudiandae possimus nulla sequi quae consequuntur explicabo dicta. Sint eligendi ipsum in facere! Odio nesciunt facere a. Consequatur?</p>

            <button className='button-3'>Read More <FaLongArrowAltRight/></button>
          </div>
          {/* blog */}
          <div className="space-y-4 flex flex-col w-full hover:shadow-lg p-4">
            <span className='block text-sm font-light'>
              March 24, 2026
            </span>
            <h3 className='font-medium text-xl md:text-3xl lg:text-4xl'>Tasting Traditions: A Culinary and Odyssey</h3>
            <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias consequuntur! Deleniti sint deserunt corrupti atque optio ad aperiam ipsa alias, nulla dolorum doloribus aspernatur cupiditate eligendi nostrum mollitia laboriosam eveniet unde. Repudiandae possimus nulla sequi quae consequuntur explicabo dicta. Sint eligendi ipsum in facere! Odio nesciunt facere a. Consequatur?</p>

            <button className='button-3'>Read More <FaLongArrowAltRight/></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog