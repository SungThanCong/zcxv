import React from 'react'
import './Destination.css'

export default function Destination({className,id,ggmap,hinh_anh}) {
    return (
        <div className = {`destination-container ${className}`} id={id}>
            <div className='destination-ggmap'>{ggmap}</div>
            <div className='destination-hinh-anh'><img src={hinh_anh} alt="abc"/></div>
        </div>
    )
}
