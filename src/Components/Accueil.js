import "../Comp-Css/Accueil.css";
import Projects from "./Projects";
import Swapi from "../data/Img/Swapi.jpg";
import Memory from "../data/Img/Memory.jpeg";
import Norimmo from "../data/Img/Norimmo.jpg";
import Paper from "../data/Img/Paper.jpg";
import Terre from "../data/Img/Terre.PNG";
import banque from "../data/Img/banque.jpg";
import { useState, useEffect } from "react";




function Accueil() {
    const [hide, setHide] = useState(false)

    useEffect(()=>{(setHide(true))},[])
     return (
         <div id="main" className="container-fluid">
            <article className="mx-3 row justify-content-center puff-in-top" >
                <h1 className={`white mt-4 ${!hide ? 'hide-classname' :'active-class'}`}  >Mes projets</h1>
                <p className={`white subtitle ${!hide ? 'hide-classname' :'active-class'}`}>Voici les projets réalisés pendant ma formation de developpeur web</p>
                <Projects title="SWAPI Réalisation ReactJS" text="Exploitation d'une API via ReactJS." img={Swapi} Github={"https://github.com/LopezRemi/Projet-swapi"} site={"https://lopezremi.github.io/projet-swapi/"} />
                <Projects title="Memory game en JS" text="Developpement d'un jeu des paires en Javascript dans le cadre de ma formation developpeur web à l'afpa." img={Memory} Github={"https://github.com/LopezRemi/Jeu_des_paires"} site={"https://lopezremi.github.io/Jeu_des_paires/"} />
                <Projects title="Norimmo immobilier" text="Premier projet de groupe réalisé à l'afpa dans le cadre de ma formation developpeur web." img={Norimmo} Github={"https://github.com/LopezRemi/NorImmo"} site={"https://lopezremi.github.io/NorImmo/"} />
                <Projects title="Banque Normande" text="Premiere utilisation du DOM dans la création d'un site" img={banque} Github={"https://github.com/LopezRemi/banque_normande"} site={"https://lopezremi.github.io/banque_normande/"} />
                <Projects title="Terre de Geek" text="Réalisation de mon premier site avec les outils de bases" img={Terre} Github={"https://github.com/LopezRemi/terre_de_geek"} site={"https://lopezremi.github.io/terre_de_geek/index.html"} />
                <Projects title="Premier Projet Shifumi" text="Création d'un jeu de shifumi en JavaScript avec les premières bases acquises " img={Paper} Github={"https://github.com/LopezRemi/Shi_Fu_Mi"} site={"https://lopezremi.github.io/Shi_Fu_Mi/"} />
            </article>
        </div>
    );
};


export default Accueil;
