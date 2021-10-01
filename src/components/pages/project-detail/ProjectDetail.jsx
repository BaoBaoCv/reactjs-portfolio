import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import { getMonthStr } from "@/constants";

import ProjectDescription from "./project-description/ProjectDescription";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";
import PageSpinner from "@/components/commons/page-spinner/PageSpinner";

import "./project-detail.scss";
import ImageWithTitle from "./ImageWithTitle";
const ProjectDetail = ({ location }) => {
    const [projectDetail, setProjectDetail] = useState(null);
    const project = location.state.project;
    useEffect(() => {
        const fetchData = async () => {
            const data = await import(`../../../mock/${project.id}.js`);
            setProjectDetail(data.default);
        };
        fetchData();
    }, []);
    return !projectDetail ? (
        <PageSpinner />
    ) : (
        <div className="project-detail">
            <div className="project-detail__intro project-detail__row">
                <div className="project-detail__intro-name project-detail__intro-item">
                    {projectDetail.name}
                </div>
                <div className="project-detail__intro-date project-detail__intro-item">
                    <div className="project-detail__intro-title">Client</div>
                    <div className="project-detail__intro-detail">
                        {projectDetail.client}
                    </div>
                    <div className="project-detail__intro-title">
                        {`${getMonthStr(project.date)}, ${
                            project.date.getYear() + 1900
                        }`}
                    </div>
                </div>
                <div className="project-detail__intro-role project-detail__intro-item">
                    <div className="project-detail__intro-title">Role</div>
                    <div className="project-detail__intro-detail">
                        {projectDetail.role}
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
                title={projectDetail.description1.title}
                isTwoCols={projectDetail.description1.contents.length === 2}
                col1={projectDetail.description1.contents[0]}
                col2={
                    projectDetail.description1.contents.length === 2
                        ? projectDetail.description1.contents[1]
                        : ""
                }
            />
            <ImageWithTitle
                className="project-detail__images project-detail__row"
                src1={projectDetail.images[0].image}
                description1={projectDetail.images[0].description}
                numberOfImage={projectDetail.images.length}
                src2={
                    projectDetail.images.length === 2
                        ? projectDetail.images[1].image
                        : null
                }
                description2={
                    projectDetail.images.length === 2
                        ? projectDetail.images[1].description
                        : ""
                }
            />
            <ProjectDescription
                className="project-detail__row"
                title={"Ideation"}
                isTwoCols={projectDetail.description2.contents.length === 2}
                col1={projectDetail.description2.contents[0]}
                col2={
                    projectDetail.description2.contents.length === 2
                        ? projectDetail.description2.contents[1]
                        : ""
                }
            />
            <div className="project-detail__separator project-detail__row" />
            <div className="project-detail__meta-data project-detail__row">
                <DescriptionCard
                    title={projectDetail.card1.title}
                    description={projectDetail.card1.detail}
                    className="meta-data-item"
                ></DescriptionCard>
                <DescriptionCard
                    title={projectDetail.card2.title}
                    description={projectDetail.card2.detail}
                    className="meta-data-item"
                ></DescriptionCard>
                <div className="project-detail__meta-data-tags meta-data-item">
                    {project.tags.map((tag) => (
                        <ProjectCategoryTag data={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
