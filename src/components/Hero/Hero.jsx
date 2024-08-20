import banner1 from '../../assets/hero/women.png'
import banner2 from '../../assets/hero/shopping.png'
import banner3 from '../../assets/hero/sale.png'
import Slider from 'react-slick'

const imageList = [
    {
        id : 1,
        img : banner1,
        title : "Upto 50% of on all Men's Wear",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci tempora ex quae, iusto quod inventore quibusdam culpa? Consequatur velit tempore corrupti placeat ipsam quo distinctio vitae voluptate dolorum."
    },
    {
        id : 2,
        img : banner2,
        title : "30% of on all Women's Wear",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci laceat ipsam quo distinctio vitae voluptate dolorum."
    },
    {
        id : 3,
        img : banner3,
        title : "Upto 70% of on all Products",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum adipisci tempora ex quae, iusto quod in."
    },
]

const Hero = () => {

    let setting = {
        dots : false,
        arrow : false,
        Infinite : true,
        speed : 800,
        slideToScroll : 1,
        autoplay : true,
        autoplaySpeed : 4000,
        cssEase : "ease-in-out",
        pauseOnHover : false,
        pauseOnFocus : true
    }

return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex items-center justify-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* Background Pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

        </div>
        {/* Hero Section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...setting}>
                {imageList.map( (data) => (
                    <div key={data.id}>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        {/* text content section */}
    
                        <div
                        className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'
                        >
                            <h1
                            data-aos = "zoom-out"
                            data-aos-duration = "500"
                            data-aos-once = "true"
                            className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
                            <p
                            data-aos = "fade-up"
                            data-aos-duration = "500"
                            data-aos-delay = "100"
                            className='text-sm'
                            >{data.discription}
                                <div
                                data-aos = "fade-up"
                                data-aos-duration = "500"
                                data-aos-delay = "300"
                                >
                                    <button
                                    className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'
                                    >Order Now</button>
                                </div>
                            </p>
                        </div>
    
    
                        {/* Image section */}
    
                        <div className='order-2 sm:order-1 '>
                            <div
                            data-aos = "zoom-in"
                            data-aos-once = "true"
                            className='relative z-10'>
                                <img src={data.img} alt="" 
                                className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                ) )}
            

            </Slider>
        </div>
    </div>
)
}

export default Hero
