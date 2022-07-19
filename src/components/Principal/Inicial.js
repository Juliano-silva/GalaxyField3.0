import Projects from "../Project/projetos"
import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";
import style from './Principal.module.css'
import img1 from '../../Arquivos/1.jpg'
import img2 from '../../Arquivos/2.jpg'
import img3 from '../../Arquivos/3.gif'
import img4 from '../../Arquivos/4.gif'
import img5 from '../../Arquivos/5.gif'
export default function Inicial(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return(
        <div className={style.Inicial}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className={style.Carousel}><img src={img1}/></Carousel.Item>
            <Carousel.Item className={style.Carousel}><img src={img2}/></Carousel.Item>
            <Carousel.Item className={style.Carousel}><img src={img3}/></Carousel.Item>
            <Carousel.Item className={style.Carousel}><img src={img4}/></Carousel.Item>
            <Carousel.Item className={style.Carousel}><img src={img5}/></Carousel.Item>
            </Carousel>
            <div className={style.ContIni}>
            <h1>Nossa História</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, possimus perspiciatis repudiandae voluptas ad iure consequatur cum itaque id cupiditate corporis nemo obcaecati voluptatum amet repellat illum nihil quasi voluptate maxime dignissimos! Eos quibusdam provident eum saepe voluptas delectus? Maxime provident quas delectus, commodi placeat saepe a aliquid amet est possimus, voluptatibus accusantium iste voluptatem dolore voluptate harum quod at? Dignissimos beatae excepturi iste quas amet blanditiis cumque accusamus assumenda nobis quisquam incidunt nisi dolorum saepe et sint at, iure placeat. Mollitia fugit officiis illum nemo adipisci explicabo animi consequuntur eligendi cupiditate. Provident minima ut cum sequi, adipisci asperiores distinctio.</p>
            </div>
     <div className={style.ProjetCorpo}>
        <Projects/>
        </div>
        </div>
    )
}