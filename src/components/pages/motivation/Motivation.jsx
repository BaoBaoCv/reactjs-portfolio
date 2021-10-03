import React, { useEffect, useState } from "react";
import "./motivation.scss";
import { Col, Container, Row } from "react-bootstrap";
import Saly from "@/assets/images/Saly-16.png"


const Motivation = () => {
    return (
        <Row>
            <Col className="motivation" xl={6} md={12}>
                <h1>Thank you for visiting my site</h1>
                <p>{`First of all, I just want to say thank you to all of the people that have been joining this project. This project is only finished and reaches the edge of my imagination only because you participated in this project. Once again, I would like to show my gratitude to you all.

As a straight-out-of-school developer (actually not yet straight-out-of-school when this project was completed), going to work makes a human that always needs the inspiration to become productive like me feel somewhat exhausted. That's why I spent a few hours every day connecting, managing, and co-operating with my friends (that's what I always love to do) to make this exceptional site. I have been always wanting to do something more inspired, connect people, and help others if possible, and I was thinking making a project like this would improve myself and my friends a lot in their major. That's the reason why I proposed this project at the first hand. We spent a month going from the planning to the production phase. It was challenging at first because we had no experience with Reactjs and I am also having to go to work every day. But we managed to get this done wonderfully. `}</p>
            </Col>
            <Col xl={6} md={12}>
                <img src={Saly} className="motivation__image" />

            </Col>
        </Row>
    )
};

export default Motivation;
