import navlogo from '../assets/nav-logo.svg'
import navProfile from '../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className=' flex items-center justify-between px-14 py-4 shadow-md mb-1 bg-gray-100  '>
        <img className='w-[150px] sm:w-[200px] lg:w-[230px] ' src={navlogo} alt="" />
        <img className='w-[50px] sm:w-[100px] lg:w-[130px] ' src={navProfile} alt="" />
    </div>
  )
}

export default Navbar