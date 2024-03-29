import React from 'react';

import '../App.css';


const Title = () => {
  return (
    <div id="titlediv">
      <div className='bg-gradient-to-r from-red-600 to-red-500 p-2 pt-2 flex justify-between'>
        <h1 className="text-6xl text-white font-serif font-bold pl-10" id="title">Journalz </h1>
        <div>
          <button className='text-2xl align-middle text-white font-sans font-thin pt-3'>Sign up</button>
          <button className='text-2xl align-middle text-white font-sans font-thin pt-3 pl-10 pr-10'>Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Title;
