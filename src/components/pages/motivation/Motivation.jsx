import React, { useEffect, useState } from "react";
import "./motivation.scss";
import { Col, Container, Row } from "react-bootstrap";
import Saly from "@/assets/images/Saly-16.png"


const Motivation = () => {
    return (
        <Row>
            <Col className="motivation" xl={6} md={12}>
                <h1>Thank you for blabla blabla</h1>
                <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
             It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, \n
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</p>
            </Col>
            <Col xl={6} md={12}>
                <img src={Saly} className="motivation__image" />

            </Col>
        </Row>
    )
};

export default Motivation;
