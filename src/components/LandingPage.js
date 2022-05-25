import { FiChevronsDown } from 'react-icons/fi'
import LandingPhoto from './../images/LandingPhoto.jpg'
import { Link } from 'react-scroll'

const LandingPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center relative">
            <img src={LandingPhoto} alt='LandingPhoto' className='object-cover object-left-top h-screen w-screen'/>
            <div className='absolute h-screen w-full bg-gray-900/50 flex flex-col items-center justify-center'>
            <h1 className="text-gray-100 text-3xl font-bold my-5 prose">
                Centralized IoT System for Raspberry Pi Vehicles
            </h1>
            <p className='text-xl text-gray-200 prose'>
                «A semi-physical simulation of traffic at an intersection»
            </p>
            <Link to='scroll-to' smooth={true} duration={500} className='my-5 border border-solid border-gray-200 rounded-full hover:bg-purple-600 cursor-pointer'>
                <FiChevronsDown className='m-2 text-gray-200 text-xl'/>
            </Link>
            </div>
            <div id='scroll-to'>
            </div>
        </div>
    )
}

export default LandingPage

