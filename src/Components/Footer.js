import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <footer class="bg-dark text-center text-white mb-0">
            <div class="container p-4 pb-0">
                <section class="pb-3">
                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
                    ><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>

                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
                    ><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>

                    <a class="btn btn-outline-light btn-floating m-2" href="#!" role="button"
                    ><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
                </section>
                </div>
        </footer>
    );
}

export default Footer;