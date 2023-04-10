import React from 'react';
import { FaFacebook, FaLinkedinIn, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-300 font-light flex flex-col-reverse justify-center py-5 md:flex-row md:justify-between md:px-5 xl:px-10">
      <p className="text-center mt-3 md:mt-0"><small>&copy; {year} Moon :: All Right Reserved.</small></p>

      {/* container holding the footer contact links */}
      <div className="flex text-slate-300 mx-auto md:mx-0">
        <a className="mx-3" href="https://linkedin.com/in/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='w-6 h-6'/></a>

        <a className="mx-3" href="https://mobile.facebook.com/peter.oyelegbin" target="_blank" rel="noopener noreferrer"><FaFacebook className='w-6 h-6'/></a>

        <a className="mx-3" href="https://mobile.twitter.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaTwitter className='w-6 h-6'/></a>

        <a className="mx-3" href="https://github.com/PeterOyelegbin" target="_blank" rel="noopener noreferrer"><FaGithub className='w-6 h-6'/></a>
      </div>
    </footer>
  )
}

export default Footer