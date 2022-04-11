import React from 'react'
import cv from '../../Assets/cv.pdf';
const Headbtn = () => {
  return (
   <div className="cv">
    <a href={cv} download className='btn'>Downlaod CV</a>
    <a href="#contact" className='btn btn_primary'>Let's Chat</a>
   </div>
  );
};

export default Headbtn;