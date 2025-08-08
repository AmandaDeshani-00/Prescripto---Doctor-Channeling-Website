import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600 text-sm'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam veritatis asperiores, quisquam quis eligendi voluptates officia molestias aliquam soluta suscipit inventore aspernatur ad, ea fugiat consequatur quibusdam non, officiis rem.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odit veritatis aliquid natus. Molestiae, provident, quaerat fuga aliquid libero magnam aspernatur illum quia ipsam maxime dolorum in assumenda, dicta tenetur? Dignissimos atque quae eum. Nesciunt natus quidem aliquid. Nobis, officiis. Soluta. Dolores, asperiores doloremque. Soluta, atque.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores doloremque. Soluta, atque molestias aliquam soluta suscipit inventore aspernatur ad, ea fugiat consequatur quibusdam non, officiis rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div>
        <p className='text-xl my-4'>
          WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>
        </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>
            Efficiency:
          </b>
          <p>
            Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>
            Convenience:
          </b>
          <p>
            Access To A Network Of Trusted Healthcare Professionals At Your Convenience
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>
            Personalization
          </b>
          <p>
            Tailored Care That Aligns With Your Unique Needs And Preferences
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
