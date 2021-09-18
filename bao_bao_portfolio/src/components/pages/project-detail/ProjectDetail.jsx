import React from "react";
import { Image } from "react-bootstrap";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import ProjectDescription from "./project-description/ProjectDescription";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";

import "./project-detail.scss";
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
            />
            <div className="project-detail__images project-detail__row">
                <div className="project-detail__images-box"></div>
                <div className="project-detail__images-box">
                    <Image
                        className="project-detail__images-character"
                        src={
                            CHARACTER_IMAGES[
                                getRndInteger(0, CHARACTER_IMAGES.length - 1)
                            ]
                        }
                    />
                </div>
            </div>
            <ProjectDescription
                className="project-detail__row"
                title={"Ideation"}
            />
            <div className="project-detail__separator project-detail__row" />
            <div className="project-detail__meta-data project-detail__row">
                <DescriptionCard
                    width={500}
                    height={170}
                    title={"credit"}
                    description={
                        "FEATURING BAO DANG KIM, HOANG VAN THIEN, DINH QUY TRI THONG, TRAN MINH THU, BUI NGUYEN MAI TRUC, BAO PHAM."
                    }
                    className="meta-data-item"
                ></DescriptionCard>
                <DescriptionCard
                    width={500}
                    height={170}
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
