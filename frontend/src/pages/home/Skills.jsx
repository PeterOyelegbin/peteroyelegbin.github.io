const Skills = () => {
  const technical = [
    {id: 1, skill: "HTML5",},
    {id: 2, skill: "CSS3",},
    {id: 3, skill: "Bootstrap5",},
    {id: 4, skill: "JavaScript",},
    {id: 5, skill: "Python",},
    {id: 6, skill: "Django",},
    {id: 7, skill: "MySQL",},
    {id: 8, skill: "Postgres",},
    {id: 9, skill: "Git",},
    {id: 10, skill: "Debugging",}
  ];

  const soft = [
    {id: 1, skill: "Organization",},
    {id: 2, skill: "Leadership",},
    {id: 3, skill: "Teamwork",},
    {id: 4, skill: "Management",},
    {id: 5, skill: "Adaptive",},
    {id: 6, skill: "Problem solving",}
  ];

  return (
    <section className="flex flex-col gap-5 my-5 lg:flex-row justify-center p-5 xl:gap-10 xl:px-10">
      <div className="lg:w-1/2 xl:w-[60%]" data-aos="flip-up" data-aos-duration="2000">
          <h2 className="text-center lg:text-start">Technical skills</h2>
          <div className="flex flex-wrap justify-center lg:justify-start my-3 gap-5">
            {technical?.map(obj => {
              return <p className="bg-slate-300 text-center rounded-lg w-32 py-3 hover:-translate-y-2 duration-300" key={obj.id}>{obj.skill}</p>
            })}
          </div>
      </div>

      <div className="lg:w-1/2 xl:w-[40%]" data-aos="flip-up" data-aos-duration="2000">
          <h2 className="text-center lg:text-start">Soft skills</h2>
          <div className="flex flex-wrap justify-center lg:justify-start my-3 gap-5">
            {soft?.map(obj => {
              return <p className="bg-slate-300 text-center rounded-lg w-32 py-3 hover:-translate-y-2 duration-300" key={obj.id}>{obj.skill}</p>
            })}
          </div>
      </div>
    </section>
  )
}

export default Skills