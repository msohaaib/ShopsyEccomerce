import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';
import Logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import DarkMode from './DarkMode';


    const menu = [
        {
            id : 1,
            name : "Home",
            path : "/#"
        },
        {
            id : 2,
            name : "Top Rated",
            path : "/Top-Rated"
        },
        {
            id : 3,
            name : "Kids Wear",
            path : "/Kids-Wear"
        },
        {
            id : 4,
            name : "Men Wear",
            path : "/Men-Wear"
        },
        {
            id : 5,
            name : "Electronics",
            path : "/Electronics"
        },
    ]
    
    const dropDownLinks = [
        {
            id :1,
            name : "Trending Products",
            path : "/Trending-products"
        },
        {
            id :2,
            name : "Best Selling",
            path : "/Best-Selling"
        },
        {
            id :3,
            name : "Top Rated",
            path : "/Top-Rated"
        },
    ]
const Navbar = ({handleOrderPopup}) => {
return (
    <div className='shadow-md bg-white 
                dark:bg-gray-900 dark:text-white 
                duration-200 relative z-40'>
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
            <div 
            className='flex justify-between items-center gap-4 '
            >
                <div className='relative group hidden sm:block'>
                    <input 
                    type="text" 
                    placeholder='search'
                    className='w-[200px] sm:w-[200px] 
                    group-hover:w-[300px] transition-all 
                    duration-300 rounded-full border-gray-300 px-2 
                    py-1 focus:outline-none focus:border 
                    focus:border-primary dark:border-gray-500 dark:bg-gray-800'
                    />
                    <IoMdSearch
                    className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 '
                    />
                </div>
            {/* order Button */}
            <button 
            onClick={() => handleOrderPopup()}
            className='bg-gradient-to-t from-primary 
            to-secondary transition-all duration-200 
            text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
            <span
            className='group-hover:block hidden transition-all duration-200'
            >Order</span>
            <FaCartShopping 
            className='text-xl text-white drop-shadow-sm cursor-pointer'
            />
            </button>
            {/* dark mode Switch */}
            <div>
                <DarkMode />
            </div>
            </div>

        </div>
    </div>
    {/* Lower Navbar */}
    <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
            {menu.map((data) => (
                <li key={data.id}>
                    <a href={data.path}
                    className='inline-block px-4 hover:text-primary duration-200'
                    >{data.name}</a>
                </li>
            ))}
            {/* Simple DropDown and LInks */}
            <li className='group relative cursor-pointer'>
                <a href=""
                className='flex items-center gap-[2px] py-2'
                >
                    Trending Items 
                    <span>
                        <FaCaretDown 
                        className='transition-all duration-200 group-hover:rotate-180'
                        />
                    </span>
                </a>
                <div className='absolute z-[9999] hidden 
                group-hover:block bg-white w-[200px] rounded-md 
                p-2 text-black shadow-md'>
                    <ul>
                        {dropDownLinks.map( (data) => (
                            <li key={data.id}>
                                <a href={data.path}
                                className='inline-block w-full rounded-md p-2 hover:bg-primary/20'
                                >{data.name}</a>
                            </li>
                        ) )}
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    </div>
)
}

export default Navbar
