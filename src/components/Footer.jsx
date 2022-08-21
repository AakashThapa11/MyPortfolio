import React from 'react'
import {FaFacebook, FaInstagram, FaGithub, FaLinkedin,FaMailBulk} from 'react-icons/fa' 

const Footer = () => {
  return (
    <>
    <div className="h-44 md:h-24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#2a2a2a"
            fill-opacity="1"
            d="M0,128L0,128L288,128L288,256L576,256L576,64L864,64L864,160L1152,160L1152,64L1440,64L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"
          ></path>
        </svg>
      </div>
    <div className='bg-theme w-screen flex justify-center'>
      <div className='md:w-full w-1/2'>
        <div className='p-10 font-mont text-center'>
          <p className='text-gray-50 pb-5'>Designed and Developed By</p>

          <div className='h-1 border-2 border-gray-50 border-dotted'></div>

          <div className='flex text-white w-full justify-between py-3'>
            <a rel="noopener noreferrer" href="https://facebook.com" target="_blank" ><FaFacebook/></a>
            <a rel="noopener noreferrer" href="https://instagram.com" target="_blank" ><FaInstagram/></a>
            <a rel="noopener noreferrer" href="https://github.com/AakashThapa11" target="_blank" ><FaGithub/></a>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/aakash-thapa-620888219/" target="_blank" ><FaLinkedin/></a>
            <a rel="noopener noreferrer" href="mailto:aakash.thapa19168@gmail.com" target="_blank" ><FaMailBulk/></a>
          </div>
          <div className='h-1 border-2 border-gray-50 border-dotted'></div>
          <p className='text-gray-50 my-2'>Aakash Thapa</p>

        </div>
      </div>
    </div>
    </>
  )
}

export default Footer