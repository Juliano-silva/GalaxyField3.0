import { useParams,useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import ProjectCard from './Api'
import MTL from '../../Arquivos/MTL.png'
import style from './Api.module.css'
function Projects () {
    const [projects, setProjects] = useState([])
    useEffect(() => {
      setTimeout(
        () =>
          fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((resp) => resp.json())
            .then((data) => {
              setProjects(data)
            })
      )
    }, [])
    function removeProject(id) {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(projects.filter((project) => project.id !== id))
        })
    }
    return (
        <div>
          <div >
            {projects.length > 0 &&
              projects.map((project) => (
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  texto={project.texto}
                  time={project.time}
                  title={project.title}
                  key={project.id}
                  handleRemove={removeProject}
                />
              ))}
          </div>
        </div>
      )
      function ProjectCard({ id, handleRemove,texto,title,time }) {
        const remove = (e) => {
          e.preventDefault()
          handleRemove(id)
        }
        return (
          <div className={style.container}>
            <Fade left>
            <div className={style.card}>
            <div className={style.content}>
            <p>{title}</p>
            <p>{texto}</p>
            <p>{time}</p>
            </div>
            <img src={MTL} />
          </div>
          </Fade>
          </div>
        )
      }
}
export default Projects