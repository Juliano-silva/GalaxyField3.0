import style from './Portfolio.module.css'
import Autor from '../../Arquivos/Autor.jfif'
export default function Portfolio(){
    return(
        <div className={style.Portfolio}>
            <img src={Autor} />
            <h1>Juliano</h1>
            <p>Estudante de tecnologia com foco em desenvolvimento de software, busco me inserir no mercado e desenvolver as habilidades necessárias pra me tornar melhor</p>
            <h2>Uma Pergunta para mim daqui 10 anos</h2>
            <h3>Eu Consegui?</h3>
        </div>
    )
}