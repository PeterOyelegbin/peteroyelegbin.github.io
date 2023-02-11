import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <section className="p-5 my-5 flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-3 xl:px-10">
      <div className="flex flex-col text-justify xl:w-1/2">
        <h2>ABOUT ME</h2>

        <p><strong>Peter Oyelegbin</strong> is a skilled Backend Engineer with a perfectionist personality based in Lagos. He has more than 2 years hands-on experience building functional and secure Apps/APIs. He currently volunteers as a Backend Engineer at See9ja remotely where he develops a scalable, fast, and secure server-side application and collaborate with other developers to build a fully functional web app.</p>

        <p className="mt-3">He is ecstatic about the tech industry, constantly eager to learn, collaborate with other developers and connect with other brilliant minds. He offer service like:</p>

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