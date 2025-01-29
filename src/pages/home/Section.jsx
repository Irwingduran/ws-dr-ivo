import React from 'react'

const Section = ({ heading , paragraph}) => {
  return (
    <div className='pt-[100px]'>
        <div className='flex gap-6 items-center sm:flex-row flex-col'>
             <h2 className='font-semibold text-2xl bg-blue-300 sm:text-[40px] px-2 '>{heading}</h2>
             <p className='text-[18px] lg:max-w-[600px]'>{paragraph}</p>
        </div>
    </div>
  )
}

export default Section