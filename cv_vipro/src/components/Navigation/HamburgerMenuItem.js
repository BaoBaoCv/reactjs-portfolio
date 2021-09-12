import React from 'react'

function HamburgerMenuItem({pageTitle, pageTitleColor, shortDescription, imagePath}) {
    const titleStyle = {
        color: {pageTitleColor},
        fontWeight: "bold",
        fontSize: "42px",
        fontFamily: "'Manrope',sans-serif"
    }
    return (
        <div className="container">
            <div className="row my-4 align-items-center">
                <img src={imagePath} className="img-fluid col-3 ml-4" align="center" alt="Decorative image"/>
                <div className="text col-8">
                    <h1 className="lead" style={titleStyle}>{pageTitle}</h1>
                    <p>{shortDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenuItem
