import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <section className="p-5 my-5 flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-3 xl:px-10">
      <div className="flex flex-col text-justify xl:w-1/2">
        <h2>ABOUT ME</h2>

        <p>Hello! My name is <strong>Peter Oyelegbin</strong>, and I have two years of expertise in tech, including desktops, online apps, and data science using the Python library. I graduated from Yaba College of Technology with a degree in Industrial Maintenance Engineering. You may categorically refer to me as a <strong>Python programmer</strong>, as I adore this language's flexible application in the computer industry 🤗</p>

        <p className="mt-3">I choose to concentrate on Python Backend Engineering as a self-taught Python programmer with a focus on <strong>clean, reusable, and functional code that adheres to best practices</strong> and has excellent problem-solving and debugging skills. As a result, offering website options like:</p>

        <ul className="list-inside list-disc mt-3">
          <li>Building out the core application logic</li>
          <li>Working with APIs</li>
          <li>Building/maintaining database</li>
          <li>Working with data and application integration</li>
          <li>Domain registration</li>
          <li>Web hosting, and more</li>
        </ul>
      </div>

      <div className="xl:w-1/2">
        <img src={profile} className="rounded-full mx-auto lg:w-2/5 xl:w-1/2" alt="profile picture"/>

        <div className="mt-3 flex mx-auto w-fit px-4 py-2 rounded-full text-slate-300">
          <a className="mx-3" href="https://linkedin.com/in/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='text-blue-700 w-6 h-6'/></a>

          <a className="mx-3" href="https://mobile.facebook.com/peter.oyelegbin" target="_blank" rel="noopener noreferrer"><FaFacebook className='text-blue-700 w-6 h-6'/></a>

          <a className="mx-3" href="https://twitter.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaTwitter className='text-blue-700 w-6 h-6'/></a>

          <a className="mx-3" href="https://github.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaGithub className='text-blue-700 w-6 h-6'/></a>
        </div>
      </div>
    </section>
  )
}

export default About