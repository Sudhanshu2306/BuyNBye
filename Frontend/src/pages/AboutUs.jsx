import React from 'react'
import me1 from '../Images/me1.jpg'
import me2 from '../Images/me2.jpg'
import me3 from '../Images/me3.jpg'

function About() {
  return (
    <div>
      <div className="md:flex items-center max-w-screen-xl h-full">
        <div className="w-full md:w-1/2 p-10 mt-10 text-center ">
          <div className="image object-center">
            <img 
              src="https://i.imgur.com/WbQnbas.png" 
              alt="Company Logo" 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto mx-auto" 
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-5">
          <div className="text">
            {/* <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span> */}
            <h2 className="my-4 font-bold text-3xl sm:text-4xl ">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
              Welcome to Read Sphere—your go-to destination for immersive online reading. At Read Sphere, we believe that books have the power to unlock worlds, ignite imaginations, and inspire personal growth. Our mission is to make reading more accessible to everyone, anytime, anywhere.
              <br/><br/>
              <span className='md:block'>With a vast collection spanning multiple genres, Read Sphere is designed for book lovers who cherish the joy of reading without limits. Whether you’re into fiction, non-fiction, science, fantasy, or classics, you’ll find something that suits your taste here.</span>
              <br/><br/>
              <span className='md:block'>We are more than just a digital library. Read Sphere fosters a community of readers and learners. Our platform allows users to not only explore new books but also connect with fellow readers, exchange ideas, and grow their love for literature. Dive into curated reading lists, discover hidden gems, and enjoy a seamless reading experience across devices.</span>
            </p>
          </div>

          <br/>

          <section className="f6 mt-3 mb-0 pb-2 color-fg-muted width-full md:block" aria-label="Release Contributors">
            <h6 className="color-fg-muted text-normal">Contributors</h6>
            <div className="mt-1">
              <ul className="list-style-none mb-n2 flex flex-wrap">
                <li className="mb-2 mr-2 rounded-lg">
                  <a href="https://github.com/Sudhanshu2306" className='' data-hovercard-type="user">
                    <img 
                      src={me1} 
                      alt="Sudhanshu2306"  
                      height="40" 
                      width="40" 
                      className="rounded-[200px]"
                    />
                  </a>
                </li>
                <li className="mb-2 mr-2 rounded-lg">
                  <a href="https://github.com/ujjwalagrawal-1" className='' data-hovercard-type="user">
                    <img 
                      src={me2} 
                      alt="ujjwalagrawal-1"  
                      height="40" 
                      width="40" 
                      className="rounded-[200px]"
                    />
                  </a>
                </li>
                <li className="mb-2 mr-2 rounded-lg">
                  <a href="https://github.com/siddhanttomar2003" className='' data-hovercard-type="user">
                    <img 
                      src={me3} 
                      alt="siddhanttomar2003"  
                      height="40" 
                      width="40" 
                      className="rounded-[200px]"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About;
