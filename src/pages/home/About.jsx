import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <section className="p-5 my-5 xl:flex xl:flex-flow xl:justify-between xl:items-center gap-3">
      <div className="xl:w-1/2">
        <img src={profile} className="rounded-full mx-auto lg:w-2/5 xl:w-1/2" alt="profile picture"/>

        <div className="mt-3 flex mx-auto w-fit px-4 py-2 rounded-full text-slate-300">
          <a className="mx-3" href="https://linkedin.com/in/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-blue-700 w-6 h-6'/></a>

          <a className="mx-3" href="https://mobile.facebook.com/peter.oyelegbin" target="_blank" rel="noopener noreferrer"><FaFacebook className='text-blue-700 w-6 h-6'/></a>

          <a className="mx-3" href="https://twitter.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-blue-700 w-6 h-6'/></a>

          <a className="mx-3" href="https://github.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaGithub className='text-blue-700 w-6 h-6'/></a>
        </div>
      </div>

      <div className="flex flex-col text-justify xl:w-1/2">
        <h2>ABOUT ME</h2>

        <p>Hello! I am <strong>Peter Oyelegbin</strong>, a Yaba College of Technology graduate in industrial maintenance engineering. My lecturer, <strong>Dr. Engr. Samson Oloketuyi</strong>, introduced me to programming in 2020 during the COVID-19 lock-down. Since then, I've been exposed to a variety of tech fields, including desktop, web apps, and data science utilizing Python libraries. Of course, you may call me a Python coder; I adore the language for its flexible application in the tech industry 🤗</p>

        <p className="mt-3">I choose to concentrate in <strong>Python Backend Engineering</strong> as a self-taught Python programmer that places an emphasis on <strong>clean, reusable, and functional code</strong> while adhering to best practices and possessing excellent problem-solving and debugging abilities. As a result, offering website options like:</p>

        <ul className="list-inside list-disc mt-3">
          <li>Building out the core application logic</li>
          <li>Working with APIs</li>
          <li>Building/maintaining database</li>
          <li>Working with data and application integration</li>
          <li>Domain registration</li>
          <li>Web hosting, and more</li>
        </ul>
      </div>
    </section>
  )
}

export default About