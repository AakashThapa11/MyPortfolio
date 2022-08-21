import React, { useRef, useState } from 'react'
import Layout from '../components/Layout';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dmnzedt', 'template_kzhxlna', form.current, 't7xT2wVLsX-1lvtDd')
      .then((result) => {
          console.log(result.text);
          alert(`${name}, The email has been sent.`);
          setName('');
          setEmail('');
          setMessage('');
      }, (error) => {
          console.log(error.text);
          alert(`${name}, There is error. Please try again`);
      });
      e.target.reset();
  }

  return (
    <Layout>
      <div>
        <div className="h-screen mt-10">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_kdx6cani.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
        </div>

        <div className='w-screen flex justify-center'>
            <form className='md:w-full w-1/2 p-10 shadow-2xl bg-gray-50' onSubmit={handleSubmit} ref={form}>
              <h1 className='text-2xl font-semibold'>Contact me to know more</h1>
              <input type="text" className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' placeholder='Name' value={name} name='name' onChange={(e) => setName(e.target.value)} />
              <input type="text" className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} name='email'/>
              <textarea type="text" className='w-full border-2 border-gray-400 rounded p-1 shadow-lg mt-5' placeholder='Query' name='message' value={message} onChange={(e) => setMessage(e.target.value)} />
              <button className='bg-red-500 rounded text-white px-5 py-1 mt-3' type="submit">Submit</button>
            </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact