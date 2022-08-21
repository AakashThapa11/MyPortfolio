import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'


const Layout = ({children}) => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[]);
  return (
    <div>
        <Header />
        <div className="content font-mont">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout