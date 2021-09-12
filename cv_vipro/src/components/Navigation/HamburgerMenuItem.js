import React from 'react'

function HamburgerMenuItem({pageTitle, pageTitleColor, shortDescription, imagePath}) {
    return (
        <div className="container">
            <div className="d-flex my-4">
                <img src={require('./Shape.svg')} className="img-fluid" alt=""/>
                <div className="text">
                    <h1 className="lead">{pageTitle}</h1>
                    <p>{shortDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenuItem
