import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import ProjectDescription from "./project-description/ProjectDescription";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";
import placeholder_img from "@/assets/images/placeholder.jpg";

import "./project-detail.scss";
import ImageWithTitle from "./ImageWithTitle";
const ProjectDetail = () => {
    return (
        <div className="project-detail">
            <div className="project-detail__intro project-detail__row">
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
                isTwoCols={true}
                col1={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }
                col2={`discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \n
                "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory
                of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section`}
            />
            <ImageWithTitle
                className="project-detail__images project-detail__row"
                src1={placeholder_img}
                description1={"this is just an image"}
                numberOfImage={2}
                src2={placeholder_img}
                description2={"dcm"}
            />
            <ProjectDescription
                className="project-detail__row"
                title={"Ideation"}
                col1={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.\n\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
                }
            />
            <div className="project-detail__separator project-detail__row" />
            <div className="project-detail__meta-data project-detail__row">
                <DescriptionCard
                    title={"credit"}
                    description={
                        "FEATURING BAO DANG KIM, HOANG VAN THIEN, DINH QUY TRI THONG, TRAN MINH THU, BUI NGUYEN MAI TRUC, BAO PHAM."
                    }
                    className="meta-data-item"
                ></DescriptionCard>
                <DescriptionCard
                    title={"open link"}
                    description={
                        "YOU CAN WATCH MORE ABOUT THE PROJECT VIA: YOUTUBE, GOOGLE, VNEXPRESS"
                    }
                    className="meta-data-item"
                ></DescriptionCard>
                <div className="project-detail__meta-data-tags meta-data-item">
                    <ProjectCategoryTag data="java" />
                    <ProjectCategoryTag data="ui/ux" />
                    <ProjectCategoryTag data="computer" />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
