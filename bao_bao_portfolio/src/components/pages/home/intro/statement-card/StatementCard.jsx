import React from 'react'
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";

function Statementcard({ ...otherProps }) {
    return (
        <div style={{ border: '2px' }}>
            <DescriptionCard
                {...otherProps}

            />
        </div>
    )
}

export default Statementcard
