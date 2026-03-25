import { FaFireFlameCurved } from "react-icons/fa6";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-999">
            <h1 className="text-white font-bold flex flex-col items-center text-2xl animate-pulse">
                <FaFireFlameCurved className='text-7xl me-2 text-center text-yellow-500 mb-2' /> Blaze Kitchen
            </h1>
        </div>
    );
};

export default Loader;