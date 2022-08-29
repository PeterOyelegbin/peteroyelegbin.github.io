import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section className="my-5">
      <div className="container mx-auto px-5">
        <div className="md:flex md:flex-flow md:justify-between items-center">
          <div className="md:w-1/2 md:mr-2">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF1_JKHOXdGFQ/profile-displayphoto-shrink_200_200/0/1641303801425?e=1667433600&v=beta&t=_yLkKJSLsMunGxW76Wa2KujanMUH7qq-ZCTQaUYIuxc" className="rounded-lg mx-auto w-72 md:w-96 h-72 md:h-96" alt="profile_picture"/>

            <div className="mt-3 flex mx-auto w-fit px-4 py-2 rounded-full text-slate-300">
              <a className="mx-3" href="https://linkedin.com/in/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-blue-700 w-6 h-6'/></a>

              <a className="mx-3" href="https://mobile.facebook.com/peter.oyelegbin" target="_blank" rel="noopener noreferrer"><FaFacebook className='text-blue-700 w-6 h-6'/></a>

              <a className="mx-3" href="https://twitter.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-blue-700 w-6 h-6'/></a>

              <a className="mx-3" href="https://github.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaGithub className='text-blue-700 w-6 h-6'/></a>
            </div>
          </div>

          <div className="flex flex-col text-justify md:w-1/2 md:h-[450px] md:overflow-y-scroll">
            <h2>ABOUT ME</h2>

            <p>Hello! I am <strong>Peter Oyelegbin</strong> by name, a graduate of Industrial Maintenance Engineering from Yaba College of Technology. I got exposed to programming in 2020 during COVID-19 lock-down through my lecturer <strong>Dr Engr. Samson Oloketuyi</strong>, ever since then I have further exposed myself to various aspect of tech ranging from desktop app development using Tkinter and PyQt5, frontend web development using (HTML, CSS and JavaScript), backend web development using Flask and Django both python framework, data science using Pandas a python library, networking using Cisco Packet Traser and artificial intelligence using SKLearn a python library. Obviously, you can call me a python programmer, I love the programming language for its dynamic use in the tech space 😇</p>

            <p className="mt-3">I decided to specialize in python backend engineering after my exposure to the above listed technologies which has been instrumental to my decision making and allows me to focus on code reusability using the KISS and DRY principle. Hence, providing website solutions like:
            </p>

            <ul className="list-inside list-disc mt-3">
              <li>Building out the core application logic</li>
              <li>Working with APIs</li>
              <li>Building/maintaining database</li>
              <li>Working with data and application integration</li>
              <li>Domain registration</li>
              <li>Web hosting, and more</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About