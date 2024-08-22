// import React from "React"
import Slider from 'react-slick'

const TestimonalData = [
    {
        id : 1,
        name : "Victor",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium voluptatum ea est quibusdam deserunt.",
        img : "https://picsum.photos/101/101"
    },
    {
        id : 2,
        name : "Satya Nadela",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium voluptatum ea est quibusdam deserunt.",
        img : "https://picsum.photos/102/102"
    },
    {
        id : 3,
        name : "Lincoln",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium voluptatum ea est quibusdam deserunt.",
        img : "https://picsum.photos/103/103"
    },
    {
        id : 4,
        name : "John",
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum praesentium voluptatum ea est quibusdam deserunt.",
        img : "https://picsum.photos/104/104"
    },
]

const Testimonials = () => {
    let settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
        {
            breakpoint: 10000,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            },
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ],
        };
return (
    <div className="py-10 mb-10">
        <div className="container">
            {/* Header Section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
                <p data-aos = "fade-up" className="text-sm text-primary">What our customers are saying</p>
                <h1 data-aos = "fade-up" className="text-3xl font-bold">Testimonials</h1>
                <p data-aos = "fade-up" className="text-xs text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur eos magni quas?</p>
            </div>

            {/* Testimonials Card */}
            <div>
                <Slider {...settings}>
                    {
                        TestimonalData.map( (data) => (
                            <div
                            key={data.id}
                            className='my-6'
                            >
                                <div
                            className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'
                            >
                                <div className='mb-4'>
                                    <img src={data.img} 
                                    className='rounded-full w-20 h-20'
                                    />
                                </div>
                                <div className='flex flex-col items-center gap4'>
                                    <div
                                    className='space-y-3'
                                    >
                                    <p
                                    className='text-xs text-gray-500'
                                    >{data.text}</p>
                                    <h1
                                    className='text-xl font-bold text-black/80 dark:text-white'
                                    >{data.name}</h1>
                                    </div>
                                </div>
                                <p
                                className='text-black/20 text-9xl font-serif absolute top-0 right-0'
                                >
                                    &#39;&#39;
                                </p>
                            </div>
                            </div>
                        ) )
                    }
                </Slider>
            </div>

        </div>
    </div>
)
}

export default Testimonials
