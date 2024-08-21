import Banner from '../../assets/website/orange-pattern.jpg'

const BannerImg = {
    backgroundImage : `url(${Banner})`,
    backgroundPosition : "center",
    backgroundRepeat : 'no-repeat',
    backgroundSize : "cover",
    hight : "100%",
    width : "100%"
}

const Subscribe = () => {
  return (
    <div
    data-aos = "zoom-in"
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImg}
    >
      <div className='coantainer backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1
            className='text-2xl text-center sm:text-left sm:text-4xl font-semibold'
            >Get Notified About New Product</h1>
            <input type="email" 
            data-aos = "fade-up"
            placeholder='Enter your Email'
            className='w-full p-3'
            />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
