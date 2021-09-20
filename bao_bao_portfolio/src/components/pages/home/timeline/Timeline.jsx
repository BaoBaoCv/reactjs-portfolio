import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Col, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import ProjectBox from "./project-box/ProjectBox";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import { user } from "@/mock";

import "./timeline.scss";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
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
                        key={project.name}
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
                                <motion.img
                                    drag
                                    dragConstraints={{
                                        right: 10,
                                        top: 10,
                                        left: 10,
                                        bottom: 10,
                                    }}
                                    className={
                                        charaPostions[
                                            getRndInteger(
                                                0,
                                                charaPostions.length - 1
                                            )
                                        ]
                                    }
                                    src={
                                        CHARACTER_IMAGES[
                                            getRndInteger(
                                                0,
                                                CHARACTER_IMAGES.length - 1
                                            )
                                        ]
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
