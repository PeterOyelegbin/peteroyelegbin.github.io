import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Nav from "../../components/Nav"

const Portfolio = () => {
  const url = "https://trusting-lizard-91.hasura.app/api/rest/peter";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPortfolio(data);
          setLoading(false);
      })
      .catch(err => {
          setError(err && "Unable to fetch data!");
          setLoading(false);
      });
  }, [url]);
  
  return (
    <>
      <Nav/>
      <Hero bgImage="bg-portfolio" heading1="Back-end Development Portfolio" heading2="Gain online success with a dependable, user-friendly website that was developed using best practices and with a desire for maximum functionality." link="" linktext="Resume"/>
      <section className="text-center py-10">
        <div className="container mx-auto px-5">
          <h2>MY WORKS</h2>
          <h4>Here is a selection of my most recent work. View the remainder of my work on <a href="https://github.com/PeterOyelegbin" className="text-blue-500">Github</a>.</h4>

          <div className="flex flex-wrap gap-5 justify-center mt-3">
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
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Portfolio