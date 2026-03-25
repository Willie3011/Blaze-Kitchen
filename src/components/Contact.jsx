import { FaLongArrowAltRight } from 'react-icons/fa'
import background from '../assets/hero_backgound.png'

const Contact = () => {
  return (
    <section className='h-auto w-screen bg-no-repeat bg-cover bg-center bg-fixed text-warm-white' style={{backgroundImage: `url(${background})`}}>
      <div className="container py-36 flex items-center justify-between flex-col-reverse lg:flex-row gap-12">
        <div className="w-full lg:w-1/2">
          <form className='w-full min-h-80 h-auto rounded-xl bg-warm-white text-black shadow-lg px-4 py-6 space-y-6 flex flex-col items-center'>
            <h3 className='text-xl md:text-2xl lg:text-3xl font-medium px-4'>Book now for a flawless dining experience.</h3>
            <div className="w-full h-full grid grid-cols-2 md:gap-x-4 px-6 space-y-4">
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="name" className='text-sm'>Your Name*</label>
                <input type="text" id='name' placeholder='Your full name' className='bg-gray-200 p-3 text-sm w-full rounded-lg' required/>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="email" className='text-sm'>Your Email*</label>
                <input type="email" id='email' placeholder='Your email' className='bg-gray-200 p-3 text-sm w-full rounded-lg' required/>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="phone" className='text-sm'>Phone Number*</label>
                <input type="text" id='phone' placeholder='Your phone number' className='bg-gray-200 p-3 text-sm w-full rounded-lg' required/>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="date" className='text-sm'>Reservation Date*</label>
                <input type="date" id='date' className='bg-gray-200 p-3 text-sm w-full rounded-lg' required/>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="time" className='text-sm'>Reservation Time*</label>
                <input type="time" id='time' placeholder='5:30pm' className='bg-gray-200 p-3 text-sm w-full rounded-lg' required/>
              </div>
              <div className="col-span-2 md:col-span-1">
                <label htmlFor="count" className='text-sm'>Head Count*</label>
                <input type="number" min={0} max={10} id='count' placeholder='2' className='bg-gray-200 p-3 text-sm w-full rounded-lg' required/>
              </div>
              <div className="col-span-2">
                <label htmlFor="notes" className='text-sm'>Notes*</label>
                <textarea id='notes' placeholder='Your email' className='bg-gray-200 p-3 text-sm w-full rounded-lg resize-none' rows={6} required/>
              </div>
            </div>
              <button className='button'>Request Resevation</button>
          </form>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2 space-y-6 max-lg:text-center">
          <h2>Reserve Your Table For An Unforgettable Dining Experience at <span className='text-green-500'>Blaze Kitchen</span></h2>
          <p className='text-warm-white/80'>
            Secure your spot and enjoy a meal crafted with care.
            Every detail is designed to ensure comfort, flavor, and satisfaction.
          </p>

          <button className='w-full button'>Explore Our Menu <FaLongArrowAltRight/></button>
        </div>
      </div>
    </section>
  )
}

export default Contact