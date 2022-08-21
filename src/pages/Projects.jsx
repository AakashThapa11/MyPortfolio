import React from 'react'
import Layout from '../components/Layout';
import projectsData from '../components/resources/projects';


const Projects = () => {
  return (
    <Layout>
      <div className='mt-20'>
        <div className="h-screen">
          <div className='h-3/4'>
          <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_ygiuluqn.json"  background="transparent"  speed="1"   loop autoplay></lottie-player>
          </div>
          <p className='text-xl font-semibold text-center'>Good ideas are not adopted automatically. They must be driven into practice with courageous patience</p>
          <h1 className='text-4xl text-center text-bold mt-5' data-aos='slide-up'>BECAUSE</h1>  
          </div>      
          <div className='font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5'>
            <h1 className='text-8xl md:text-3xl' data-aos='slide-left'> The game is... </h1>
            <h1 className='text-8xl md:text-3xl' data-aos='slide-right'> CONSISTANCY</h1>
        </div>
      </div>

      <div className='grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5'>
        {projectsData.map((projects=>{
          return <div>
            <div className='relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
              <img src={projects.image} className='w-full h-52 text-center' alt=''/>
              
              <div className='absolute inset-0 flex items-center justify-center flex-col rounded-tr-3xl rounded-bl-3xl opacity-0 bg-black hover:opacity-80'>
                <h1 className='text-4xl font-semibold text-white'>{projects.title}</h1>
                <a className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white' rel="noopener noreferrer" href={projects.link} target="_blank">CODE</a>
                <h1 className='text-xl mt-5 text-white'>{projects.description}</h1>
              </div>
            </div>
          </div>
        }))}

      </div>

    </Layout>
  )
}

export default Projects