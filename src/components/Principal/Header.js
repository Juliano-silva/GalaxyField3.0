import style from './Principal.module.css'
import {HiMenu} from 'react-icons/hi'
import DarkMode from '../../DarkTheme';
import {Link} from 'react-router-dom'
function Aparecer(){
    var cd = document.getElementById("abc");
    var txt = document.getElementById("sub-menu");
    if(cd.checked == true){
         txt.style.display="block";
    }else{
         txt.style.display="none";
    }
}
function rain(){
    let amount = 220;
    let body = document.querySelector('body')
    let i = 0;
    while (i<amount){
        let drop = document.createElement("i");
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        drop.style.width= 1 + size + 'px';
        drop.style.left = posX + 'px'
        drop.style.animationDelay = delay+'s';
        drop.style.animationDuration = 0.4+duration+'s';
        body.appendChild(drop)
        i++
    }
  }
  rain()
function Header(){
    return(
        <div className={style.Header}>
            <div className={style.HeaderCont}>
            <h1>GalaxyField</h1>
            <input type="checkbox" id='abc' onClick={Aparecer} />
            <label htmlFor="abc">
            <HiMenu/>
            </label>
           </div>
           <ul className={style.sub_menu} id='sub-menu'>
            <Link to="/">Home</Link>
            <Link to="/Post">Post</Link>
            <Link to="/Portfolio">Portfolio</Link>
            <DarkMode/>
           </ul>
        </div>
    )
}
export default Header