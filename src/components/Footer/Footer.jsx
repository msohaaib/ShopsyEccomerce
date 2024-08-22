import footerLogo from '../../assets/logo.png'
import Banner from '../../assets/website/footer-pattern.jpg'

const bannerImage = {
    backgroundImage : `url(${Banner})`,
    backgroundPosition : "bottom",
    backgroudRepeat : "np-repeat",
    backgroudSize : "cover",
    width : "100%",
    hight : "100%"
}

const footerLinks = [
    {
        title : "Home",
        link : "/#"
    },
    {
        title : "Contact",
        link : "/#Contact"
    },
    {
        title : "About",
        link : "/#About"
    },
    {
        title : "Blog",
        link : "/#Blog"
    },
]

const Footer = () => {
return (
    <div 
    style={bannerImage}
    className='text-white mb-20'>
        <div className='container'>
            <div>
                {/* Company Details */}
                <div>
                    <h1>Shopsy</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quas obcaecati ab sequi molestias ad?</p>
                </div>

                {/* Footer Links */}
            </div>
        </div>
    </div>
)
}

export default Footer
