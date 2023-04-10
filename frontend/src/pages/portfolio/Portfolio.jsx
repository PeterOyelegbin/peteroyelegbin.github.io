import { FaInternetExplorer, FaGithub } from 'react-icons/fa';
import { useAxiosGet } from "../../hooks/useAxiosAsync";

const Portfolio = () => {
  const url = "/projects";
  const {loading, error, data: portfolio} = useAxiosGet(url)

  return (
    <>
      <header className={`h-screen bg-portfolio bg-no-repeat bg-cover bg-center md:bg-right bg-fixed mb-5`} id="home">
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50 text-center">
          <div className="flex flex-col justify-center items-center gap-3 w-11/12 md:gap-5 md:w-3/5" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="2000">
            <h1 className="font-extrabold text-slate-300 text-3xl md:text-5xl">Back-end Development Portfolio</h1>

            <h3 className="font-bold text-slate-300 text-xl md:text-3xl">Gain online success with a dependable, user-friendly website that was developed using best practices and with a desire for maximum functionality.</h3>
            <a className="btn" href="https://drive.google.com/file/d/12Zfoayd8hriDJrE94Dnw9SMsRhz7FGVN/view?usp=drivesdk">View Resume</a>
          </div>
        </div>
      </header>

      <section className="text-center p-5 my-5 xl:px-10">
        <h2>MY WORKS</h2>
        <p className="md:text-center">Here is a selection of my most recent work. View the remainder of my work on <a href="https://github.com/PeterOyelegbin" className="text-blue-500">Github</a>.</p>

        <div className="flex flex-wrap gap-10 justify-center mt-3">
          {loading ? <h3 className="text-center text-2xl">Loading...</h3> : error ? <h3 className="text-center text-2xl">{error}</h3> : portfolio && portfolio?.map((project) => {
            return (
              <figure className="card ease-linear duration-300 hover:bg-slate-200" data-aos="flip-left" data-aos-duration="2000" key={project.id}>
                <img src={project.cover_image || ""} className="w-full rounded-t-2xl" alt="project-image" />
                <figcaption className=" flex flex-col gap-3 p-3">
                  <h4>{project.title || ""}</h4>
                  <p className='text-sm'>{project.description || ""}</p>
                  <div className='flex gap-5 items-center justify-end text-2xl'>
                    <a href={project.project_url || "#"} className="ease-in-out duration-300 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                      <FaInternetExplorer/>
                    </a>
                    <a href={project.github_url || "#"} className="ease-in-out duration-300 hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                      <FaGithub/>
                    </a>
                  </div>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Portfolio