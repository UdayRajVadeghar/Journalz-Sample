import React from 'react';
import '../App.css';
import image1 from './image1.jpg';

const ImageSection = () => {
  let cont = 125;
  return (
    <div className='ImageBackground bg-gradient-to-b from-yellow-50 to-red-50'>
      <div className='pl-40'>
        <img src={image1} className='Image1 shadow-outline'></img>
        <div className='quote font-serif text-5xl pl-40'>The act of writing is the act of discovering what you believe.</div>
        </div>
      </div>
      
      
  );
}

export default ImageSection;
