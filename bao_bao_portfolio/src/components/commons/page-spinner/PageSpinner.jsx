import React from "react";
import { Spinner } from "react-bootstrap";

import "./page-spinner.scss";
const PageSpinner = () => {
    return (
        <div className="spinner">
            <Spinner className="spinner__spinner" animation="border" />
            Loading
        </div>
    );
};

export default PageSpinner;
