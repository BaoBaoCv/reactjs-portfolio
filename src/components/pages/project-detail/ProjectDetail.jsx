import React, { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import { CHARACTER_IMAGES, getRndInteger, PIXEL_ARTS } from "@/constants";
import { getMonthStr } from "@/constants";

import ProjectDescription from "./project-description/ProjectDescription";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";
import PageSpinner from "@/components/commons/page-spinner/PageSpinner";
import ImageWithTitle from "./ImageWithTitle";

import "./project-detail.scss";

const ProjectDetail = ({ location }) => {
    const [projectDetail, setProjectDetail] = useState(null);
    const project = location.state.project;
    useEffect(() => {
        const fetchData = async () => {
            const root = project.id.split("/")[0];
            const id = project.id.split("/")[1];
            const data = await import(
                `../../../mock/${root}/projects/${id}.js`
            );
            setProjectDetail(data.default);
            console.log(project)
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
                        {`${getMonthStr(project.date)}, ${project.date.getYear() + 1900
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
                <img
                    // className="project-detail__cover-character"
                    className="project-detail__images-header"
                    src={
                        PIXEL_ARTS[
                        getRndInteger(0, PIXEL_ARTS.length - 1)
                        ]
                    }
                />
                <p>Source: https://jefflin276.wixsite.com/pixeljeff</p>
            </div>
            {projectDetail.contents.map((component) => {
                if (component.component === "ProjectDescription") {
                    return <ProjectDescription
                        title={component.title}
                        col1={component.col1}
                        col2={component.col2}
                    />
                } else if (component.component === "ImageWithTitle") {
                    return <ImageWithTitle
                        src1={component.src1}
                        src2={component.src2}
                        description1={component.description1}
                        description2={component.description2}
                    />
                }
            })}
            <div className="project-detail__separator project-detail__row" />
            <div className="project-detail__meta-data project-detail__row">
                {projectDetail.card1 && (<DescriptionCard
                    title={projectDetail.card1.title}
                    description={projectDetail.card1.detail}
                    className="meta-data-item"
                ></DescriptionCard>)}
                {projectDetail.card2 && (<DescriptionCard
                    title={projectDetail.card2.title}
                    description={projectDetail.card2.detail}
                    className="meta-data-item"
                ></DescriptionCard>)}
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
