import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import PageSpinner from "@/components/commons/page-spinner/PageSpinner";


import "./../project-detail.scss";
import "./popup.scss"

const Popup = ({ location }) => {
    const [projectDetail, setProjectDetail] = useState(null);
    let history = useHistory();
    let back = e => {
        e.stopPropagation();
        history.goBack();
    };
    console.log(history.location.pathname)
    useEffect(() => {
        const fetchData = async () => {
            const pathname = history.location.pathname;
            const root = pathname.split("/")[2];
            const id = pathname.split("/")[3];
            const data = await import(
                `../../../../mock/${root}/projects/${id}.js`
            );
            setProjectDetail(data.default);
            console.log(pathname)
        };
        fetchData();
    }, []);
    return !projectDetail ? (
        <PageSpinner />
    ) : (
        <div className="modal-background">
            <div className="modal-container">
                <div className="close-btn">
                    <button onClick={back}>x</button>
                </div>
                <div className="title">
                    <h2>placeholder for header if any</h2>
                </div>
                <div className="body">
                    {projectDetail.contents.map((component) => {
                        if (component.component === "ProjectDescription") {
                            return (
                                <>
                                    <h2>{component.title}</h2>
                                    <p>{component.col1}</p>
                                    <p>{component.col2}</p>
                                </>
                            );
                        } else if (component.component === "ImageWithTitle") {
                            return (
                                <>
                                    <img src={component.src1} />
                                    <p>{component.description1}</p>
                                    <img src={component.src2} />
                                    <p>{component.description2}</p>
                                </>
                            );
                        } else if (component.component === "VideoWithTitle") {
                            return null;
                        }
                    })}
                </div>
                <div className="footer">
                    <p> placeholder for footer if any</p>
                </div>
            </div>
        </div>
    );
};

export default Popup;
