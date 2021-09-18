import React from "react";
import "./projectDetail.scss";

const ProjectDetail = () => {
    return (
        <div className="project-detail">
            <div className="project-detail__intro">
                <div className="project-detail__intro-line" />
                <div className="project-detail__intro-name">
                    Android Application Robot
                </div>
                <div className="project-detail__intro-date">
                    <div className="project-detail__intro-title">Client</div>
                    <div className="project-detail__intro-detail">
                        Google Inc
                    </div>
                    <div className="project-detail__intro-title">
                        2021, July 16
                    </div>
                </div>
                <div className="project-detail__intro-role">
                    <div className="project-detail__intro-title">Role</div>
                    <div className="project-detail__intro-detail">
                        Developer
                    </div>
                </div>
            </div>
            <div className="project-detail__cover"></div>
        </div>
    );
};

export default ProjectDetail;
