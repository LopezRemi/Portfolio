import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import "../Comp-Css/Projets.css";


function Projects(props) {
    return (
        <div class="col-xl-3 col-md-4 col-sm-12 m-3">
            <div class="card">
                <figure class="card__thumb">
                    <img src={props.img} />
                    <figcaption class="card__caption">
                        <h2 class="card__title">{props.title}</h2>
                        <p class="card__snippet">{props.text}</p>
                        <a target="_blank" href={props.href}  class="card__button btn-danger">Voir <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}


export default Projects;