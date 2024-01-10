import React from 'react'
import illustration from '../assets/images/illustration-article.svg'
import avatar from '../assets/images/image-avatar.webp'

function Card() {
  return (
    <div className='font-Figtree mx-4 border border-darky rounded-2xl bg-whity card-shadow'>

      <div className='p-6'>
        <div>
          <img src={illustration} alt="illustrator" className='rounded-xl' />
        </div>

        <div>
          <div>
            <p>Learning</p>
          </div>
          <div>
            <p>Published 21 Dec 2023</p>
          </div>
          <div>
            <h4>HTML & CSS foundations</h4>
          </div>
          <div className=''>
            These languages are the backbone of every 
            {/* website,
            defining structure, content and presentation */}
          </div>
        </div>

        <div>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
          <div>
            <h5>Greg Hooper</h5>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Card;
