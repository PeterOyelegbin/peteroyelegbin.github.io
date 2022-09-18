const Hero = ({bgImage, heading1, heading2, link, linktext}) => {
  return (
    <header className={`h-screen ${bgImage} bg-no-repeat bg-cover bg-center md:bg-right bg-fixed mb-5`} id="home">
      <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-center">
        <div className="flex flex-col justify-center items-center gap-3 w-11/12 md:gap-5 md:w-3/5" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="2000">
          <h1 className="font-extrabold text-slate-300 text-3xl md:text-5xl">{heading1}</h1>

          <h3 className="font-bold text-slate-300 text-xl md:text-3xl">{heading2}</h3>

          <a className="btn" href={link}>{linktext}</a>
        </div>
      </div>
    </header>
  )
}

export default Hero