import React, { useEffect, useState } from "react";
import "./motivation.scss";
import { Col, Container, Row } from "react-bootstrap";
import Saly from "@/assets/images/Saly-16.png"


const Motivation = () => {
    return (
        <Row>
            <Col className="motivation" xl={6} md={12}>
                <h1>Thank you for visiting my site</h1>
                <p>{`First of all, I just want to say thank you to all of the person participated in this project. trước hết, tôi muốn gửi lời cảm ơn tới tất những người đã tham gia vào project này. Project này chỉ có thể được hoàn thiện và đạt the edge of my imagination only because of your participation in this project. Một lần nữa tôi xin cảm ơn

As a straight-out-of-school developer (actually not yet straight-out-of-school when this project was completed), thì việc đi làm có thể khiến một con người luôn cần sự inspiration như tôi to become productive, cảm thấy mệt mỏi. That's why I spent a few hours everyday, colaberating with my teammate (which re-fueled me a lot), and make this exceptional site. I have been always want to do something that is more inspired, connect people,   `}</p>
            </Col>
            <Col xl={6} md={12}>
                <img src={Saly} className="motivation__image" />

            </Col>
        </Row>
    )
};

export default Motivation;
