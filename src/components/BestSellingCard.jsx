import { FaStar } from "react-icons/fa6";

const BestSellingCard = ({ index, best }) => {
    return (
        <div key={index} className="snap-start flex flex-col min-w-62.5 space-y-4">
            <div className="h-60 w-full">
                <img src={best.img} alt={best.name} className="w-full h-full object-contain" />
            </div>
            <h3 className="font-semibold text-sm">{best.name}</h3>
            {/* rating */}
            <div className="flex gap-2">
                <FaStar className="text-lg text-yellow-500"/>
                <FaStar className="text-lg text-yellow-500"/>
                <FaStar className="text-lg text-yellow-500"/>
                <FaStar className="text-lg text-yellow-500"/>
                <FaStar className="text-lg text-yellow-500"/>
            </div>
            <div className="text-lg font-semibold">
                R{best.price.toFixed(2)}
            </div>
        </div>
    )
}

export default BestSellingCard