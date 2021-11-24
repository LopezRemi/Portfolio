import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../Comp-Css/Projets.css";
import { ButtonGroup } from "react-bootstrap";



function Projects(props) {
    return (
        <div class="col-xl-3 col-md-4 col-sm-12 m-3">
            <div class="card border-0">
                <figure class="card__thumb mb-0">
                    <img className="img-fluid" src={props.img} />
                    <figcaption class="card__caption w-100">
                        <h2 class="card__title">{props.title}</h2>
                        <p class="card__snippet">{props.text}</p>
                        <ButtonGroup>
                        <a target="_blank" href={props.Github}  class="card__button btn-danger mx-1">Github <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                        <a target="_blank" href={props.site}  class="card__button btn-info">Voir <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></a>
                        </ButtonGroup>
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}


export default Projects;