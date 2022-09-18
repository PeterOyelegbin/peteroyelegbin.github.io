const Skills = () => {
  const technical = [
    {id: 1, skill: "HTML5",},
    {id: 2, skill: "CSS3",},
    {id: 3, skill: "Bootstrap5",},
    {id: 4, skill: "JavaScript",},
    {id: 5, skill: "Python",},
    {id: 6, skill: "Django",},
    {id: 7, skill: "MySQL",},
    {id: 8, skill: "Flutter",},
    {id: 9, skill: "Git",},
    {id: 10, skill: "Debugging",}
  ];

  const soft = [
    {id: 1, skill: "Creative",},
    {id: 2, skill: "Leadership",},
    {id: 3, skill: "Teamwork",},
    {id: 4, skill: "Management",},
    {id: 5, skill: "Adaptive",}
  ];

  return (
    <section className="flex flex-col gap-3 my-5 lg:flex-row p-5">
      <div className="lg:w-1/2" data-aos="flip-up" data-aos-duration="2000">
          <h2 className="text-center lg:text-start">Technical skills</h2>
          <div className="flex flex-wrap justify-center lg:justify-start my-3 gap-5">
            {technical?.map(obj => {
              return <p className="bg-slate-300 text-center rounded-lg w-32 py-3 hover:-translate-y-2 duration-300" key={obj.id}>{obj.skill}</p>
            })}
          </div>
      </div>

      <div className="lg:w-1/2" data-aos="flip-up" data-aos-duration="2000">
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