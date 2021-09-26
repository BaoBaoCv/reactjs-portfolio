import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import ProjectDescription from "./project-description/ProjectDescription";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";
import placeholder_img from "@/assets/images/placeholder.jpg"

import "./project-detail.scss";
import ImageWithTitle from "./ImageWithTitle";
const ProjectDetail = () => {
    return (
        <div className="project-detail">
            <div className="project-detail__intro project-detail__row">
                <div className="project-detail__intro-line" />
                <div className="project-detail__intro-name project-detail__intro-item">
                    Android Application Robot
                </div>
                <div className="project-detail__intro-date project-detail__intro-item">
                    <div className="project-detail__intro-title">Client</div>
                    <div className="project-detail__intro-detail">
                        Google Inc
                    </div>
                    <div className="project-detail__intro-title">
                        2021, July 16
                    </div>
                </div>
                <div className="project-detail__intro-role project-detail__intro-item">
                    <div className="project-detail__intro-title">Role</div>
                    <div className="project-detail__intro-detail">
                        Developer
                    </div>
                </div>
            </div>
            <div className="project-detail__cover project-detail__row">
                <Image
                    className="project-detail__cover-character"
                    src={
                        CHARACTER_IMAGES[
                        getRndInteger(0, CHARACTER_IMAGES.length - 1)
                        ]
                    }
                />
            </div>
            <ProjectDescription
                className="project-detail__row"
                title={"Overview"}
                isMulti={true}
                col1={`ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section`}
                col2={`discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section`}
            />
            <ImageWithTitle src1={placeholder_img} description1={'this is just an image'} numberOfImage={2} src2={placeholder_img} description2={'dcm'} />
            <ProjectDescription
                className="project-detail__row"
                title={"Ideation"}
                col1={`discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \n "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section`}
            />
            <div className="project-detail__separator project-detail__row" />
            <div className="project-detail__meta-data project-detail__row">
                <Container style={{ marginLeft: 0 }}>
                    <Row>
                        <Col lg={{ span: 4 }} md={{ span: 12 }}>
                            <DescriptionCard
                                width={'100%'}
                                title={"credit"}
                                description={
                                    "FEATURING BAO DANG KIM, HOANG VAN THIEN, DINH QUY TRI THONG, TRAN MINH THU, BUI NGUYEN MAI TRUC, BAO PHAM."
                                }
                                className="meta-data-item"
                            ></DescriptionCard>
                        </Col>
                        <Col lg={{ span: 4 }} md={{ span: 12 }}>
                            <DescriptionCard
                                width={'100%'}
                                title={"open link"}
                                description={
                                    "YOU CAN WATCH MORE ABOUT THE PROJECT VIA: YOUTUBE, GOOGLE, VNEXPRESS"
                                }
                                className="meta-data-item"
                            ></DescriptionCard>
                        </Col>
                        <Col lg={{ span: 3 }} md={{ span: 12 }}>
                            <div className="project-detail__meta-data-tags meta-data-item">
                                <ProjectCategoryTag data="java" />
                                <ProjectCategoryTag data="ui/ux" />
                                <ProjectCategoryTag data="computer" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default ProjectDetail;
