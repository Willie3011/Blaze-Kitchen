import { FaStar } from "react-icons/fa6";

const MenuCard = ({item, index}) => {
  return (
    <div key={index} className="w-full p-4 space-y-4">
      <div className="w-full h-60 rounded-lg bg-warm-white p-2">
        <img src={item.img} alt="" className="w-full h-full object-contain"/>
      </div>
      <h3 className="font-semibold text-sm">{item.name}</h3>
      {/* rating */}
      <div className="flex gap-2">
        <FaStar className="text-lg text-yellow-500"/>
        <FaStar className="text-lg text-yellow-500"/>
        <FaStar className="text-lg text-yellow-500"/>
        <FaStar className="text-lg text-yellow-500"/>
        <FaStar className="text-lg text-yellow-500"/>
      </div>
      <p className="font-semibold text-xl">R{item.price}</p>
      <button className="button-2">Order Now</button>
    </div>
  )
}

export default MenuCard