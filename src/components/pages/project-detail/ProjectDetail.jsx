import React, { useEffect, useState } from "react";
import { getRndInteger, PIXEL_ARTS } from "@/constants";
import { getMonthStr } from "@/constants";

import ProjectDescription from "./project-description/ProjectDescription";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";
import PageSpinner from "@/components/commons/page-spinner/PageSpinner";
import ImageWithTitle from "./ImageWithTitle";
import VideoWithTitle from "./VideoWithTitle";

import "./project-detail.scss";

const ProjectDetail = ({ location }) => {
    const [projectDetail, setProjectDetail] = useState(null);
    const [userData, setUserData] = useState(null);
    const [projectMetaData, setProjectMetaData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const pathname = location.pathname;
            const root = pathname.split("/")[2];
            const id = pathname.split("/")[3];
            const data = await import(
                `../../../mock/${root}/projects/${id}.js`
            );
            const { user } = await import("../../../mock/userData.js");
            const fullId = root + "/" + id;
            setProjectDetail(data.default);
            setUserData(user);
            user.timelines.every(timeline => {
                const tempt = (timeline.timelineProjects.find(({ id }) => id === fullId));
                setProjectMetaData(tempt);
                if (tempt) {
                    return false;
                }
                return true;
            })
        };
        fetchData();
    }, []);
    return !projectDetail || !userData || !projectMetaData ? (
        <PageSpinner />
    ) : (
        <div className="project-detail">
            <div className="project-detail__intro project-detail__row">
                <div className="project-detail__intro-name project-detail__intro-item">
                    {projectMetaData.name}
                </div>
                <div className="project-detail__intro-date project-detail__intro-item">
                    <div className="project-detail__intro-title">Client</div>
                    <div className="project-detail__intro-detail">
                        {projectMetaData.company}
                    </div>
                    <div className="project-detail__intro-title">
                        {`${getMonthStr(projectMetaData.date)}, ${projectMetaData.date.getYear() + 1900
                            }`}
                    </div>
                </div>
                <div className="project-detail__intro-role project-detail__intro-item">
                    <div className="project-detail__intro-title">Role</div>
                    <div className="project-detail__intro-detail">
                        {projectMetaData.role}
                    </div>
                </div>
            </div>
            <div className="project-detail__cover project-detail__row">
                <img
                    // className="project-detail__cover-character"
                    className="project-detail__images-header"
                    src={PIXEL_ARTS[getRndInteger(0, PIXEL_ARTS.length - 1)]}
                />
                <a href="https://jefflin276.wixsite.com/pixeljeff">
                    Source: Pixel Jeff
                </a>
            </div>
            {projectDetail.contents.map((component) => {
                if (component.component === "ProjectDescription") {
                    return (
                        <ProjectDescription
                            title={component.title}
                            col1={component.col1}
                            col2={component.col2}
                        />
                    );
                } else if (component.component === "ImageWithTitle") {
                    return (
                        <ImageWithTitle
                            src1={component.src1}
                            src2={component.src2}
                            description1={component.description1}
                            description2={component.description2}
                        />
                    );
                } else if (component.component === "VideoWithTitle") {
                    return (
                        <VideoWithTitle
                            src={component.src}
                            description={component.description}
                        />
                    );
                }
            })}
            <div className="project-detail__separator project-detail__row" />
            <div className="project-detail__meta-data project-detail__row">
                {projectDetail.card1 && (
                    <DescriptionCard
                        title={projectDetail.card1.title}
                        description={projectDetail.card1.detail}
                        className="meta-data-item"
                    ></DescriptionCard>
                )}
                {projectDetail.card2 && (
                    <DescriptionCard
                        title={projectDetail.card2.title}
                        description={projectDetail.card2.detail}
                        className="meta-data-item"
                    ></DescriptionCard>
                )}
                <div className="project-detail__meta-data-tags meta-data-item">
                    {projectMetaData.tags.map((tag) => (
                        <ProjectCategoryTag data={tag} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
