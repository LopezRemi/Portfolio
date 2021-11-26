import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "../Comp-Css/Contact.css";
import credit from "../data/Img/Credit.jpeg";

function Contact() {

    useEffect(() => { (setHide(true)) }, [])
    const [hide, setHide] = useState(false)
    return (
        <Container className="contact text-center">
            <Row className="align-items-center d-flex ontact">
                <Col className="text-white px-5">
                    <div className="mt-5" ><h1 className={`white ${!hide ? 'hide-classname' : 'active-class'}`}>Contactez moi <span className="red">!</span></h1></div>
                    <div className="contact-box mt-5">
                        <h5 className="heading-5 sec-color mb-s">Email📧</h5>
                        <a href="mailto:r.lopez76000@gmail.com" target="_blank" rel="nofollow noopener noreferrer">r.lopez76000@gmail.com</a>
                        <img fluid
                            alt="bye"
                            src={credit}
                            className="justify-self-center credit"
                        />{' '}
                    </div>
                </Col>
            </Row>
        </Container>
    );

};


export default Contact;
