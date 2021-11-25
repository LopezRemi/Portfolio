import { useState, useEffect } from "react";
import Profile from "../data/Img/Profile.jpg";
import { Col, Row, Container, Image } from "react-bootstrap";
import "../Comp-Css/Biographie.css";
import bio from '../data/data-js/bio'

function Biographie() {


    useEffect(() => { (setHide(true)) }, [])
    const [hide, setHide] = useState(false)

    return (
        <Container fluid className="bio">
            <Row className="align-items-center">
                <Col lg={4}><div><Image src={Profile} fluid className="slit-in-diagonal-1" roundedCircle /></div></Col>
                <Col lg={8}> <div className="text-white px-5">
                    <div className="mt-5" ><h1 className={`white ${!hide ? 'hide-classname' : 'active-class'}`}>J'aime la glace <span className="red">!</span></h1></div>
                        <p className="align-left puff-in-top">{bio.text}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}


export default Biographie;