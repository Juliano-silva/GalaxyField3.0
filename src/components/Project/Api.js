import { useParams,useHistory } from 'react-router'
import { useState, useEffect } from 'react'
import style from './Api.module.css'
import { Projects } from "./projetos";
function Project() {
  let { id } = useParams()
  const [project, setProject] = useState([])
  const [services, setServices] = useState([])
  useEffect(() => { setTimeout( () => fetch(`http://localhost:5000/projects/${id}`, {
          method: 'GET',headers: {'Content-Type': 'application/json',},})
          .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
            setServices(data.services)
          }),0,)}, [id])
  function removeService(cost) {
    const projectUpdated = project
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)
      .then((resp) => resp.json())}
  return (
    <><div>{services.map((service) => (
                  <div id={service.id} name={service.name} cost={service.cost}description={service.description}key={service.id} handleRemove={removeService}></div>
                ))}
            </div>
    </>
  )
}
function NewProject() {
  const history = useHistory()
  function createPost(project) {fetch('http://localhost:5000/projects', {method: 'POST',headers: {'Content-Type': 'application/json'},body: JSON.stringify(project)})
      .then((resp) => resp.json())
      .then(() => {history.push('/Home')})}
  return (
    <div >
      <ProjectForm handleSubmit={createPost}  btnText="Tweetar" />
    </div>
  )
}
function SubmitButton({ text }) {
  return (
    <div>
      <button className={style.Tuitar}>{text}</button>
    </div>
  )
}
function Textarea({name, placeholder, handleOnChange, value}){
  return(
    <div className={style.Input}> 
    <textarea name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}></textarea>
    </div>
  )
}
function Input({name, placeholder, handleOnChange, value}){
  return(
    <div className={style.Input}>
    <input name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
    </div>
  )
}
function Time({name, handleOnChange, value}){
  return(
    <div>
      <input className={style.Time} name={name} onChange={handleOnChange} value={value}/>
    </div>
  )
}
function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [project, setProject] = useState(projectData || {})
  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }
  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value })
  }
  var date = new Date
  var hour = date.getHours()
  var min = date.getMinutes()
  var day = date.getDate()
  var Horário = "Dia "+day+"."+"Hora "+hour+":"+min
  return (
    <form onSubmit={submit} className={style.ListApi}>
      <ul>
      <label>Nome:</label>
      <li><Input text="title" name="title" placeholder="Insira o nome do seu personagem" handleOnChange={handleChange} value={project.title}/></li>
      <label>Texto:</label>
        <li><Textarea text="Texto" name="texto" placeholder="Escreva algo sobre ele" handleOnChange={handleChange} value={project.texto}/></li>
        <li className={style.Timer}><Time text="time" name="time" handleOnChange={handleChange} value={project.time=Horário}/></li>
      </ul>
      <SubmitButton handleOnChange={handleChange} id="SB" text={btnText} />
      <br />
    </form>
  )
}
export default function Api(){
    return(
        <div className={style.Api}>
            <NewProject/>
        </div> 
    )
}