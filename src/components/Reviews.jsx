import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import profile1 from "../assets/profile-1.jpg"
import profile2 from "../assets/profile-2.jpg"
import profile3 from "../assets/profile-3.jpg"
import profile4 from "../assets/profile-4.jpg"
import profile5 from "../assets/profile-5.jpg"
import profile6 from "../assets/profile-6.jpg"

const reviewers = [
  {
    profile: profile1,
    name: "Thabo Mokoena",
    review: "Yoh this place is actually fire. Food came out quick quick and still hot, I was surprised. The wings were proper spicy just how I like it. Definitely pulling up again soon"
  },
  {
    profile: profile2,
    name: "Lerato Nkosi",
    review: "I really liked the vibe here hey. The burger was nice but a bit messy to eat lol. Service was good, they checked on us a few times. I’d come back, maybe try something else next time."
  },
  {
    profile: profile3,
    name: "Jason Williams",
    review: "Honestly didn’t expect it to be this good.The meat was cooked proper and not dry at all.Waited a little bit but it was worth it.Yeah I’d recommend it for sure."
  },
  {
    profile: profile4,
    name: "Ayesha Khan",
    review: "Cute spot, went there with friends. Food was tasty but my order came a bit late. They did apologize so it’s fine I guess. Overall still a nice place to chill and eat."
  },
  {
    profile: profile5,
    name: "Kabelo Sithole",
    review: "Blaze Kitchen is doing the most in a good way.Flavours are strong and different, not boring food. Portion was enough for me, I was full full. No complaints honestly, keep it up guys."
  },
  {
    profile: profile6,
    name: "Michael Johnson",
    review: "Food was good, no lies. Place was a bit busy so it felt noisy. But staff were friendly and helped fast. I’d still go back again though."
  },
]

const Reviews = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-36 space-y-12 z-10">
        <div className="space-y-6">
          <h2 className="z-20">What Our Customers <span className='text-green-500'>Say.</span></h2>
          <p className='max-w-160'>Hear from diners who have savored our bold, flavorful meals.
            Their experiences reflect the quality, care, and passion we deliver consistently.</p>
        </div>

        <div className="">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
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
            autoplay={{ delay: 3000 }}
            pagination={{
              clickable: true,
            }}
          >
            {
              reviewers.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className="space-y-4 bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-xl shadow-sm mb-16">
                    <div className="flex flex-row items-center">
                      <div className="h-20 w-20 rounded-full overflow-hidden me-6">
                        <img src={review.profile} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xl font-medium block">{review.name}</span>
                    </div>
                    <p className="text-sm font-light">“ {review.review} ”</p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
      <div className="absolute -right-60 -bottom-80 w-140 h-140 blur-3xl bg-yellow-100 rounded-full"></div>
      <div className="absolute -z-10 -left-60 -top-80 w-140 h-140 blur-3xl bg-yellow-100 rounded-full"></div>
    </section>
  )
}

export default Reviews