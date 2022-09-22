import { useAxiosGet } from "../../hooks/useAxiosAsync";
import Hero from "../../components/Hero";

const Portfolio = () => {
  const url = "/peter";
  const {loading, error, data: portfolio} = useAxiosGet(url)
  
  return (
    <>
      <Hero bgImage="bg-portfolio" heading1="Back-end Development Portfolio" heading2="Gain online success with a dependable, user-friendly website that was developed using best practices and with a desire for maximum functionality." link="" linktext="View Resume"/>
      <section className="text-center p-5 my-5 xl:px-10">
        <h2>MY WORKS</h2>
        <p className="md:text-center">Here is a selection of my most recent work. View the remainder of my work on <a href="https://github.com/PeterOyelegbin" className="text-blue-500">Github</a>.</p>

        <div className="flex flex-wrap gap-10 justify-center mt-3">
          {loading ? <h3 className="text-center text-2xl">Loading...</h3> : error ? <h3 className="text-center text-2xl">{error}</h3> : portfolio && portfolio.backend?.map((project) => {
            return (
              <div className="card" data-aos="flip-left" data-aos-duration="2000" key={project.id}>
                <img src={project.image || ""} className="w-full" alt="project-image" />
                <div className=" flex flex-col gap-3 p-3">
                  <p>{project.description || ""}</p>
                  <a href={project.link || "#"} className="btn w-40 m-0" target="_blank" rel="noopener noreferrer">Preview</a>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Portfolio