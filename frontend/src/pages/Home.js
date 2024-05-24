import React from 'react'
import  './Home.css';
import { Link } from 'react-router-dom';
// import '.. /Images';
const Home = () => {
    const image = require("../Images/images.jpg");
  return (
    <div className='Home-Page bg-dark text-white container-fluid  d-flex justify-content-start align-items-center align-items-lg-center flex-column'>
        <div className='row container'>
            <div className='col-lg-6 d-flex justify-content-center align-items-center align-items-lg-start flex-column' style={{height: '91.5vh'}}>
                <h2 style={{fontSize : '80px'}}> Book STORE  </h2>
                <h3 style={{fontSize : '50px'}}> FOR YOU </h3>
                <p style={{color:'silver'}} className='mb-0'>Checkout The book's from Here </p>
                <Link to="/book" className='viewBook my-3 button'>View Book</Link>
            </div>
            <div  style={{height: '91.5vh'}} className='col-lg-6 d-flex justify-content-center align-items-center flex-column'>
                <img className='img-fluid homeimg'  src={image} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Home