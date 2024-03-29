import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

import RedYellowGreen from "@/components/pages/home/intro/RedYellowGreen";
import SocialMedia from "@/components/pages/home/intro/social-media/SocialMedia";
import StatementCard from "./statement-card/StatementCard";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import arrow from "@/assets/images/Arrow.svg";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import "./intro.scss";

const box = {
    hidden: {
        opacity: 0,
    },
    visible1: {
        opacity: 1,
        transition: {
            delay: 0.5,
        },
    },
    visible2: {
        opacity: 1,
        transition: {
            delay: 1,
        },
    },
    visible3: {
        opacity: 1,
        transition: {
            delay: 1.5,
        },
    },
    visible4: {
        opacity: 1,
        transition: {
            delay: 2,
        },
    },
};

const columnForImageStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const Intro = ({ user }) => {
    const [characters, setCharacters] = useState(
        [...Array(3)].map(() => {
            return CHARACTER_IMAGES[
                getRndInteger(0, CHARACTER_IMAGES.length - 1)
            ];
        })
    );
    return (
        <Container className="intro__container">
            <Row>
                <Col xl={{ span: 5 }}>
                    <div className="intro">
                        <RedYellowGreen />
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            style={{ width: "100%" }}
                        >
                            <DescriptionCard
                                className="intro__card"
                                width={"100%"}
                                isFlexHorizontal={true}
                                title={"String"}
                                description={user.introName}
                                descriptionColor={"#FFE818"}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                        >
                            <DescriptionCard
                                className="intro__card"
                                width={"100%"}
                                title={"About"}
                                description={user.introStatement}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                        >
                            <StatementCard
                                className="intro__card"
                                description={user.introSubStatement}
                            />
                        </motion.div>
                        <a
                            className="intro__card intro__cv-btn"
                            href={user.cvFile}
                            target="_blank"
                        >
                            <Button variant="outline-primary">
                                <p className="intro__cv-text">Download my CV</p>
                                <FontAwesomeIcon
                                    icon={faFileAlt}
                                    className="fa-2x"
                                    color="white"
                                />
                            </Button>
                        </a>

                        <SocialMedia />
                    </div>
                </Col>
                <Col
                    style={{ marginTop: "20px" }}
                    className="d-none d-lg-block"
                >
                    <Row style={{ height: "100%", position: "relative" }}>
                        <Col style={columnForImageStyle}>
                            <div className="intro__character-container">
                                <motion.img
                                    className="intro__character-avatar"
                                    src={user.introDecoration}
                                    animate={{
                                        x: 300,
                                        opacity: 1,
                                    }}
                                    initial={{
                                        opacity: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        delay: 2.5,
                                    }}
                                />
                                <motion.img
                                    className="intro__character-img-left"
                                    src={characters[0]}
                                    initial={{
                                        y: -1000,
                                    }}
                                    animate={{
                                        y: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        delay: 3.5,
                                    }}
                                />
                                <motion.img
                                    src={arrow}
                                    className="intro__arrow top-left"
                                    variants={box}
                                    initial="hidden"
                                    animate="visible1"
                                />
                            </div>
                            <motion.img
                                src={arrow}
                                className="intro__arrow bottom-left "
                                variants={box}
                                initial="hidden"
                                animate="visible4"
                            />
                        </Col>
                        <Col style={columnForImageStyle}>
                            <motion.img
                                src={arrow}
                                className="intro__arrow top-right"
                                variants={box}
                                initial="hidden"
                                animate="visible2"
                            />
                            <div className="intro__character-container">
                                <motion.img
                                    src={arrow}
                                    className="intro__arrow bottom-right"
                                    variants={box}
                                    initial="hidden"
                                    animate="visible3"
                                />
                                <motion.img
                                    className="intro__character-img-right"
                                    src={characters[1]}
                                    initial={{
                                        y: -1000,
                                    }}
                                    animate={{
                                        y: 0,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 100,
                                        delay: 3.5,
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;
