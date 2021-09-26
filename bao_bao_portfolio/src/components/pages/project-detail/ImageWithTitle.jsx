import React from 'react'
import placeholder_img from "@/assets/images/placeholder.jpg"
import { Container, Image, Row, Col } from "react-bootstrap";


import "./project-detail.scss";

function ImageWithTitle({ description1, description2, numberOfImage, src1, src2 }) {
    return (
        <div className="project-detail__images project-detail__row">
            <div className="project-detail__images-box">
                <img src={src1} />
                <p>{description1}</p>
            </div>
            {numberOfImage == 2 ? (<div className="project-detail__images-box">
                <img src={src2} />
                <p>{description2}</p>
            </div>) : ""}

        </div>
    )
}

export default ImageWithTitle
