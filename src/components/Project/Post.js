import Api from './Api'
import style from './Api.module.css'
export default function Post(){
    return(
        <div className={style.Post}>
            <h1>Bem-vindo ao Post</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea alias veniam sapiente aliquid, voluptate sed quis sit praesentium autem ut ducimus minus animi est omnis doloremque excepturi ipsam voluptatem quasi!</p>
            <Api/>
        </div>
    )
}