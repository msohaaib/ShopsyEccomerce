import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
const Navbar = () => {
return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        {/* upper Navbar */}
    <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
            <div>
                <a href="#"
                className='font-bold text-2xl sm:text-3xl flex gap-2'
                >
                    <img 
                    src={Logo} 
                    alt="Logo" 
                    className='w-10'
                    />
                    Shopsy
                </a>
            </div>
            {/* Search Bar*/}
            <div>
                <div className='relative group hidden sm:block'>
                    <input 
                    type="text" 
                    placeholder='search'
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary'
                    />
                    <IoMdSearch
                    className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 '
                    />
                </div>
            </div>
            {/* order Button */}
            <button 
            onClick={()=> alert("Order not available yet.")}
            className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white'
            >
                <span>Order</span>
            </button>
        </div>
    </div>
    {/* Lower Navbar */}
    <div>

    </div>
    </div>
)
}

export default Navbar
