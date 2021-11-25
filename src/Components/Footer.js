import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Navbar} from 'react-bootstrap';

function Footer() {
    return (
        <div className="botLane bg-black mt-5">
            <div className="row">
                <div className="col-md-12">
                    <Navbar bg="black" variant="dark" expand="lg" sticky="top" className="d-flex justify-content-center">
                        <section class="pb-3">
                            <a class="btn btn-outline-light btn-floating m-2" target="_blank" href="https://twitter.com/DevInsidetheweb" role="button"
                            ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>

                            <a class="btn btn-outline-light btn-floating m-2" target="_blank" href="https://www.linkedin.com/in/r%C3%A9mi-lopez-36834b220/" role="button"
                            ><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>

                            <a class="btn btn-outline-light btn-floating m-2" target='_blank' href="https://github.com/LopezRemi" role="button"
                            ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                        </section>
                    </Navbar>
                </div>
            </div>
        </div>
    );
}

export default Footer;
