import { Link } from "react-router-dom"
import About from "./About"
import Skills from "./Skills"

const Home = () => {
  return (
    <>
      <header className={`h-screen bg-home bg-no-repeat bg-cover bg-center md:bg-right bg-fixed mb-5`} id="home">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-center">
          <div className="flex flex-col justify-center items-center gap-3 w-11/12 md:gap-5 md:w-3/5" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="2000">
            <h1 className="font-extrabold text-slate-300 text-3xl md:text-5xl">Build a scalable, fast, and secure App/APIs.</h1>

            <h3 className="font-bold text-slate-300 text-xl md:text-3xl">Secure your digital life. Lock it down, protect it up, and block the hackers</h3>
            <Link className="btn" to="/portfolio" role="button">View my portfolio</Link>
          </div>
        </div>
      </header>

      <About/>
      <Skills/>
    </>
  )
}

export default Home