import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState({});

  const fetchProjects = async () => {
    const res = await fetch(url);
    const response = await res.json();
    setProjects(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchProjects();
  }, [])

  useEffect(() => {
    setSelectedProject(projects[0]);
  }, [projects])

  const selectProject = (id) => {
    const newProject = projects.filter((item)=> item.id === id)[0];
    setSelectedProject(newProject);
  }

  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }

  const{title, company, duties, dates} = selectedProject;

  return <>
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {projects.map((project) => {
            return (
              <button 
                key={project.id} 
                onClick={() => selectProject(project.id)} 
                className={`job-btn ${project === selectedProject && "active-btn"}`}>

                {project.company}
                </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
              </div>
            )
          })}

        </article>
      </div>
      <button type="button" className='btn'>more info</button>
    </section>
  
  </>
}

export default App
