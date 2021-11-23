import "../Comp-Css/Accueil.css";
import Projects from "./Projects";
import Swapi from "../data/Img/Swapi.jpg";
import Memory from "../data/Img/Memory.jpeg";
import Norimmo from "../data/Img/Norimmo.jpg";


function Accueil() {
    return (
        <div id="main" class="container-fluid">
            <article class="mx-3 row justify-content-center my-5" >
                <h1 className="white mt-5" >Mes projets</h1>
                <p class="white subtitle mb-5">Voila les projets réalisés pendant ma formation de developpeur web</p>
            
                <Projects title="Projet SWAPI Réalisation ReactJs" text="Exploitation d'une API via ReactJS dans le cadre de ma formation developpeur web à l'afpa." img={Swapi} href={"https://github.com/LopezRemi/Projet-swapi"} />
                <Projects title="Projet Memory game en js" text="Developpement d'un jeu des paires en Javascript dans le cadre de ma formation developpeur web à l'afpa." img={Memory} />
                <Projects title="Projet Norimmo immobilier" text="Premier projet de groupe réalisé à l'afpa dans le cadre de ma formation developpeur web." img={Norimmo} />
                <Projects title="Projet SWAPI Réalisation ReactJs" text="Exploitation d'une API via ReactJS" img={Swapi} />
                <Projects title="Projet SWAPI Réalisation ReactJs" text="Exploitation d'une API via ReactJS" img={Swapi} />
                <Projects title="Projet SWAPI Réalisation ReactJs" text="Exploitation d'une API via ReactJS" img={Swapi} />
               
            </article>
        </div>
    );

};


export default Accueil;
