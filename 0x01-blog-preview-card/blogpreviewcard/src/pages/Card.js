import React from 'react'
import illustration from '../assets/images/illustration-article.svg'
import avatar from '../assets/images/image-avatar.webp'

function Card() {
  return (
    <div className='max-w-sm font-Figtree mx-4 border border-darky rounded-2xl bg-whity card-shadow'>

      <div className='p-6'>
        <div className='hover:scale-105 transition duration-300 ease-in-out'>
          <img src={illustration} alt="illustrator" className='rounded-xl cursor-pointer' />
        </div>

        <div className='py-6 text-darky'>
          <div className='flex flex-col space-y-4'>
            <div className='flex '>
              <p className='bg-primary py-1 px-2 font-bold rounded-lg'>Learning</p>
            </div>
            <div className='text-sm'>
              <p>Published 21 Dec 2023</p>
            </div>
          </div>

          <div className='flex flex-col py-2 space-y-2'>
            <div className='text-2xl font-bold'>
              <h4 className='cursor-pointer hover:underline'>HTML & CSS foundations</h4>
            </div>
            <div className='text-secondary'>
              <p>
                These languages are the backbone of every website, 
                defining structure, content and presentation
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center -space-x-5'>
          <div>
            <img src={avatar} alt="avatar" className='w-1/2 cursor-pointer'/>
          </div>
          <div className='font-bold text-md md:text-sm'>
            <h5 className='cursor-pointer hover:underline'>Greg Hooper</h5>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Card;
