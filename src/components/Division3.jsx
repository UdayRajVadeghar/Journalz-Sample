import React from 'react'

const Division3 = () => {
  return (
    <div className='bg-grey-50 pb-40'>
      <div className='pl-20'>
        <p className='text-5xl font-serif pt-40 pl-20'>Services we offer:</p>
      </div>
      <div className='pl-20 pr-20 pt-20 mr-20 ml-20'>
        <div className='grid grid-cols-3 gap-2'>
          <div className="p-4">
            <div className="p-4">
              <i className="fa-solid fa-notes-medical icon1 pb-4"></i>
              <p className='text-3xl pb-2'>Unlimited Entries</p>
              <p className='text-xl'>Unlike other platforms for journaling, you have the freedom to write without limitations on the amount or frequency, and it's completely free.</p>
            </div>
          </div>
          <div className="p-4">
            <div className="p-4">
              <i className="fa-solid fa-mobile icon1 pb-4"></i>
              <p className='text-3xl pb-2'>Mobile Apps</p>
              <p className='text-xl'>You can write in your journal when not at your computer with our iOS and Android apps..</p>
            </div>
          </div>
          <div className="p-4">
            <div className="p-4">
              <i className="fa-regular fa-floppy-disk icon1 pb-4"></i>
              <p className='text-3xl pb-2'>Saves as you go</p>
              <p className='text-xl'>Never worry about losing your work — Penzu saves as you type at your computer or on the go..</p>
            </div>
          </div>
          <div className="p-4">
            <div className="p-4">
              <i className="fa-solid fa-clipboard icon1 pb-4"></i>
              <p className='text-3xl pb-2'>Custom journals</p>
              <p className='text-xl'>Choose different covers, backgrounds, fonts and more for each of your journals and entries.</p>
            </div>
          </div>
          <div className="p-4">
            <div className="p-4">
              <i className="fa-solid fa-bell icon1 pb-4"></i>
              <p className='text-3xl pb-2'>Reminders</p>
              <p className='text-xl'>Set custom reminders to ensure that you never forget to write in your journal.</p>
            </div>
          </div>
          <div className="p-4">
            <div className="p-4">
              <i className="fa-solid fa-circle-info icon1 pb-4"></i>
              <p className='text-3xl pb-2'>So much more...</p>
              <p className='text-xl'>Enjoy unlimited devices, encryption, tagging, search, prompts, journal and more.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Division3
