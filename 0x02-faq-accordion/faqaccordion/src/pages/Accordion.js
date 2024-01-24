import React from 'react'
import bgDesktop from '../assets/images/background-pattern-desktop.svg';
import bgMobile from '../assets/images/background-pattern-mobile.svg';
import iconStar from '../assets/images/icon-star.svg';

function Accordion() {
  return (
    <div>
      {/* <div>
        <div className='hidden absolute top-0 right-0 left z-10 md:block'>
            <img src={bgDesktop} alt="bg Desktop" className=''/>
        </div>
        <img src={bgMobile} alt="bg mobile" className='md:hidden absolute top-0 z-10 w-screen'/>
      </div> */}

      <div className='relative z-50 font-WorkSans'>
        <div>
            <div>
                <div>
                    <img src={iconStar} alt="icon star" />
                </div>
                <div>
                    <h1>FAQs</h1>
                </div>
            </div>
            <div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse bg-base-200">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Accordion;
