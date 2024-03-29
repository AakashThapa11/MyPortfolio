import React from 'react'
import Layout from '../components/Layout';
import { FaCss3, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import {SiTailwindcss, SiFlutter, SiAndroidstudio} from 'react-icons/si';
import resume from '../components/resources/Aakash-cv.pdf';
import { Link } from 'react-router-dom';
import AOS from 'aos';
AOS.init(
  {duration:1000}
);
const Home = () => {
  return (
    <Layout>
      <div>

        {/* Intro Section*/}
        <div className="min-h-screen bg-theme">
          <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
            mx-10 z-10 bg-theme
          border-white transform rotate-12 md:rotate-0">
            <div className='h-1/2'>
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_kkflmtur.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
            </div>
            
            <div className='font-bold text-white md:px-5'>
              <h1 className='text-7xl md:text-4xl' data-aos='slide-right'>Hi, I am <b className='text-yellow-500'>Aakash</b></h1>
              <h1 className='text-4xl md:text-xl' data-aos='slide-left'>FullStack <b className='text-red-500'>Developer</b></h1>
              <button className='border-2 rounded border-white py-2 hover:bg-orange-500 px-5 mt-5 text-white'><Link to={resume} target="_blank" download="Aakash-cv.pdf">Download CV</Link></button>
              
            </div>
          </div>
        </div>

        {/* Technologies*/}
          <div className='mt-20'>
            <h1 className='text-4xl text-blue-800 font-bold text-center my-8 'data-aos='slide-up'>Technologies I USE</h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <FaReact size={180} color='cyan' className='w-full text-center mt-20'/>
            <SiFlutter size={180} color='darkblue' className='w-full text-center mt-20 animate-bounce'/>
            <FaJava size={180} color='orange' className='w-full text-center mt-20 animate-bounce'/>
            <FaNodeJs size={180} color='green' className='w-full text-center mt-20'/>
            <SiTailwindcss size={180} color='blue' className='w-full text-center mt-20 animate-bounce'/>
            <SiAndroidstudio size={180} color='green' className='w-full text-center mt-20'/>
            <FaHtml5 size={180} color='orange' className='w-full text-center mt-20'/>
            <FaCss3 size={180} color='cadetblue' className='w-full text-center mt-20 animate-bounce'/>
          </div>
          </div>

          {/* Technologies*/}
          <div className="my-20">

            <div className="text-center h-52 bg-primary">
              <h1 className="text-white font-bold text-4xl py-10">Yes, I want to become full stack developer</h1>
            </div>

            <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
            <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ne6kcqfz.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
            </div>
            <p className='text-xl my-5 font-semi md:px-5 px-14 py-10'>
            JavaScript is one of the most top-ranked programming languages because of its ubiquitous use on all platforms and mass adoption. Main Use Cases: Web Development.
            </p>
            </div>
          </div>

          {/* Dev Section*/}
          <div className="my-20">

            <div className="text-center h-52 bg-red-500">
              <h1 className="text-white font-bold text-4xl py-10">My Dev Stack</h1>
            </div>

            <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_u4jjb9bd.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
            </div>
            
            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className='text-xl font-bold'>Front End</h1>
                <hr/>
                <p className='font-semibold mt-2'>HTML</p>
                <p className='font-semibold mt-2'>CSS</p>
                <p className='font-semibold mt-2'>React</p>
                <p className='font-semibold mt-2'>Javascript</p>
                <p className='font-semibold mt-2'>DART</p>
              </div>

              <div>
                <h1 className='text-xl font-bold'>Database</h1>
                <hr/>
                <p className='font-semibold mt-2'>MangoDB</p>
                <p className='font-semibold mt-2'>My SQL</p>
                <p className='font-semibold mt-2'>Firebase</p>
              </div>

              <div>
                <h1 className='text-xl font-bold'>Backend</h1>
                <hr/>
                <p className='font-semibold mt-2'>Node JS</p>
                <p className='font-semibold mt-2'>Express JS</p>
                <p className='font-semibold mt-2'>PHP</p>
              </div>
            </div>

            
            </div>
          </div>

          {/* Info Section*/}

          <div>
              <h1 className="text-4xl text-gray-500 text-center">Who is Aakash ?</h1>

              <div className='h-screen relative text-gray-500'>
                <div className='h-full'>
                <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_dcatp5cr.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h1 className='text-2xl font-bold text-left '>Hi, Hello, Namaste...

                  <hr/>

                  <pre className='text-xl md:text-sm my-5 font-mont font-semibold'>
                    {JSON.stringify({
                      name: "Aakash Thapa",
                      age: "23",
                      gender: "Male",
                      country: 'Australia'
                    }, null, 2)}
                  </pre>
                  </h1>
                </div>
              </div>
            </div>
      </div>
    </Layout>
  )
}

export default Home