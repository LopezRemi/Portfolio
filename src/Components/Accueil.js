import "../Comp-Css/Accueil.css"
import Ampoule from "../data/Img/Ampoule.jpeg"

function Accueil() {
    return (
        <div id="main" class="container">
            <img class="img-fluid banner" src={Ampoule} alt="banner" />
            <article class="text-banner">Lopez Rémi</article>
            
        </div>
    );

};


export default Accueil;
