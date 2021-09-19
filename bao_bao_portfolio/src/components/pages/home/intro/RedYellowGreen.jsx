import { user } from '@/mock'
import red from "@/assets/images/red.svg";
import yellow from "@/assets/images/yellow.svg";
import green from "@/assets/images/green.svg";
import { Image } from 'react-bootstrap';

import React from 'react'

function SocialMedia() {
    const imageStyle = {
        marginRight: '10px',
    }
    return (
        <div style={{ width: '100%', display: 'flex', marginBottom: '20px' }}>
            <Image src={red} style={imageStyle} />
            <Image src={yellow} style={imageStyle} />
            <Image src={green} style={imageStyle} />
        </div>
    )
}

export default SocialMedia
