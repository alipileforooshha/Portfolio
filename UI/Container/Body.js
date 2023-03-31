import React, { Fragment } from 'react'
import {AiFillLinkedin , AiOutlineTwitter} from 'react-icons/ai'
import {BsInstagram , BsTwitter} from 'react-icons/bs'
function Body() {
    return (
        <div className='text-center p-10'>
            <h2 className='text-4xl py-2 text-teal-500 font-medium'>Ali Pileforooshha</h2>
            <h3 className=' text-2xl py-2'>Full-Stack Developer</h3>
            <p className=' text-lg leading-8 text-gray-800'>Hi, I'm Ali Pileforooshha a Full-Stack developer working with Laravel and Next.js
            Over the many years of web developing i have experinced developing many webistes 
            and have gained alot of experince in both backend and frontend</p>
            <div className='flex justify-center align-center my-10'>
                <AiFillLinkedin className=' text-blue-600 text-6xl'/>
                <AiOutlineTwitter className=' text-blue-300 text-6xl'/>
                <BsInstagram className=' text-red-600 text-6xl'/>
                {/* <BsTelegram /> */}
            </div>
        </div>
    )
}

export default Body