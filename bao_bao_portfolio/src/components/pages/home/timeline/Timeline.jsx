import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Col, Image, Row } from "react-bootstrap";

import ProjectBox from "./project-box/ProjectBox";
import img1 from "@/assets/images/character1.svg";
import img2 from "@/assets/images/character2.svg";
import img3 from "@/assets/images/character3.svg";
import { user } from "@/mock";

import "./timeline.scss";
import "react-vertical-timeline-component/style.min.css";

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Timeline = () => {
    const imgs = [img1, img2, img3];
    const charaPostions = [
        "timeline__character-left",
        "timeline__character-center",
    ];
    return (
        <div className="timeline">
            <div className="timeline__subtitle">
                <div className="timeline__subtitle-year">
                    {user.timelineStartYear}
                </div>
                <div className="timeline__subtitle-line" />
                <div className="timeline__subtitle-year">
                    {user.timelineEndYear}
                </div>
            </div>
            <div className="timeline__title">{user.timelineTitle}</div>
            <VerticalTimeline animate={true} layout="1-column-left">
                {user.timelineProjects.map((project, index) => (
                    <VerticalTimelineElement
                        iconStyle={
                            project.isYearHidden
                                ? {
                                      width: "0",
                                      height: "0",
                                  }
                                : {}
                        }
                        icon={
                            <div className="timeline__date">
                                <div
                                    className={`timeline__date-year ${
                                        project.isYearHidden ? "hidden" : ""
                                    }`}
                                >
                                    2021
                                </div>
                                <div className="timeline__date-month">JUL</div>
                            </div>
                        }
                    >
                        <Row>
                            <Col
                                lg={{
                                    order: index % 2 === 0 ? "first" : "last",
                                    span: 6,
                                }}
                            >
                                <ProjectBox project={project} />
                            </Col>
                            <Col
                                className="timeline__character"
                                lg={{
                                    order: index % 2 !== 0 ? "first" : "last",
                                    span: 6,
                                }}
                            >
                                <Image
                                    className={
                                        charaPostions[
                                            getRndInteger(
                                                0,
                                                charaPostions.length - 1
                                            )
                                        ]
                                    }
                                    src={
                                        imgs[getRndInteger(0, imgs.length - 1)]
                                    }
                                />
                            </Col>
                        </Row>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
