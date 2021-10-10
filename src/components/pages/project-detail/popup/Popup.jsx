import React from 'react'
import { ReactDOM } from 'react-dom';
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";



function popup({ ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [projectDetail, setProjectDetail] = useState(null);
    const [userData, setUserData] = useState(null);
    const [projectMetaData, setProjectMetaData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const pathname = location.pathname;
            const root = pathname.split("/")[2];
            const id = pathname.split("/")[3];
            const data = await import(
                `../../../../mock/${root}/projects/${id}.js`
            );
            const { user } = await import("../../../../mock/userData.js");
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
    if (!isOpen) return null;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {projectMetaData.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default popup
