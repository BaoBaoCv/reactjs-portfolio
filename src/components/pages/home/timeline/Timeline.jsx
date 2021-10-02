import React, { useState } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";

import ProjectBox from "./project-box/ProjectBox";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import { getMonthStr } from "@/constants";

import "./timeline.scss";
import "react-vertical-timeline-component/style.min.css";

const variants = {
    scale: { scale: 1.25 },
    none: {},
};
const charaPostions = [
    "timeline__character-left",
    "timeline__character-center",
];

const Timeline = ({ user }) => {
    const [isHovered, setIsHovered] = useState(
        user.timelineProjects.map((project) => {
            return false;
        })
    );
    const [characters, setCharacters] = useState(
        user.timelineProjects.map((project) => {
            return {
                img: CHARACTER_IMAGES[
                    getRndInteger(0, CHARACTER_IMAGES.length - 1)
                ],
                position:
                    charaPostions[getRndInteger(0, charaPostions.length - 1)],
            };
        })
    );
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
                            <motion.div
                                variants={variants}
                                animate={isHovered[index] ? "scale" : "none"}
                                className="timeline__date"
                            >
                                <div
                                    className={`timeline__date-year ${project.isYearHidden ? "hidden" : ""
                                        }`}
                                >
                                    {`${project.date.getYear() + 1900}`}
                                </div>
                                <div className="timeline__date-month">{`${getMonthStr(project.date).toUpperCase()}`}</div>
                            </motion.div>
                        }
                    >
                        <Row>
                            <Col
                                xl={{
                                    order: index % 2 === 0 ? "first" : "last",
                                    span: 6,
                                }}
                            >
                                <ProjectBox
                                    index={index}
                                    isHovered={isHovered}
                                    setIsHovered={setIsHovered}
                                    project={project}
                                />
                            </Col>
                            <Col
                                className="timeline__character"
                                xl={{
                                    order: index % 2 !== 0 ? "first" : "last",
                                    span: 6,
                                }}
                            >
                                {characters[index].position ==
                                    "timeline__character-left" ? (
                                    <motion.img
                                        drag
                                        dragConstraints={{
                                            right: 3,
                                            top: 3,
                                            left: 3,
                                            bottom: 3,
                                        }}
                                        className={characters[index].position}
                                        src={characters[index].img}
                                    />
                                ) : (
                                    <div className="timeline__character-box">
                                        <motion.img
                                            drag
                                            dragConstraints={{
                                                right: 3,
                                                top: 3,
                                                left: 3,
                                                bottom: 3,
                                            }}
                                            className={
                                                characters[index].position
                                            }
                                            src={characters[index].img}
                                        />
                                    </div>
                                )}
                            </Col>
                        </Row>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
