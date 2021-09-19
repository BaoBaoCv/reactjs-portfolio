import React from "react";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import { user } from "@/mock";
import "./intro.scss";
import { Col, Container, Row, Image } from "react-bootstrap";
import Statementcard from "./statement-card/Statementcard";
import name from "@/assets/images/Name.svg";
import arrow from "@/assets/images/Arrow.svg";
import SocialMedia from "@/components/pages/home/intro/social-media/SocialMedia";
import { motion } from "framer-motion"
const Intro = () => {
    const box = {
        hidden: {
            opacity: 0
        },
        visible1: {
            opacity: 1,
            transition: {
                delay: 0.5
            }
        },
        visible2: {
            opacity: 1,
            transition: {
                delay: 1
            }
        },
        visible3: {
            opacity: 1,
            transition: {
                delay: 1.5
            }
        },
        visible4: {
            opacity: 1,
            transition: {
                delay: 2
            }
        }
    }
    const columnForImageStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return (
        <Container style={{ borderBottom: '1px dashed #c5b89f' }} style={{ minWidth: '90%' }}>
            <Row>
                <Col lg={{ span: 4 }} md={{ span: 12 }}>
                    <div className="intro">
                        <DescriptionCard
                            className="intro__card"
                            width={'100%'}
                            isFlexHorizontal={true}
                            title={"String"}
                            description={"Bao Dang Kim - Hello World"}
                            descriptionColor={"#FFE818"}
                        />
                        <DescriptionCard
                            className="intro__card"
                            width={'100%'}
                            title={"About"}
                            description={
                                "CURRENTLY, I AM A WEB DEVELOPER & PROGRAMER WHO LOVES DOING THINGS WITH FRESH MINDS. PREVIOUSLY, I WORKED AS PROGRAMMER AT APPLE, SAMSUNG & XIAOMI. NOW I AM FREELANCER AND HAPPY TO SEE YOU."
                            }
                        />
                        <Statementcard
                            className="intro__card"
                            description="TOUCH “red”; “yellow; “green” TO PERFORM A MAGIC MOVES."
                            backgroundColor={"yellow"}
                            borderColor={'green'}
                            descriptionColor={'black'}
                            width={'100%'}
                        />
                        <SocialMedia />
                    </div>
                </Col>
                <Col style={{ marginTop: '20px' }} className="d-none d-lg-block">
                    <Row style={{ height: '100%' }}>
                        <Col style={columnForImageStyle}>
                            <motion.img src={arrow} className="arrow top-left intro__card" variants={box} initial="hidden" animate="visible1" />
                            <motion.img src={arrow} className="arrow bottom-left intro__card" variants={box} initial="hidden" animate="visible4" />
                        </Col>
                        <Col style={columnForImageStyle}>
                            <motion.img src={arrow} className="arrow top-right intro__card" variants={box} initial="hidden" animate="visible2" />
                            <motion.img src={arrow} className="arrow bottom-right intro__card" variants={box} initial="hidden" animate="visible3" />

                        </Col>
                    </Row>
                    <motion.div style={{ position: 'absolute', top: '80px', right: '33%' }}
                        animate={{
                            x: 300,
                            opacity: 1
                        }}
                        initial={{
                            opacity: 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            delay: 2.5
                        }}>
                        <Image src={name} />
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Intro;
