import { FaFireFlameCurved } from "react-icons/fa6";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-999">
            <h1 className="text-white text-2xl animate-pulse">
                <h3 className='text-2xl font-bold flex flex-col items-center'><FaFireFlameCurved className='text-7xl me-2 text-center text-yellow-500 mb-2' /> Blaze Kitchen</h3>
            </h1>
        </div>
    );
};

export default Loader;