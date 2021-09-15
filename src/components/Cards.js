import React from 'react'
import './Cards.css'
import {Link} from 'react-router-dom'

function Cards({id,className,linkTo,color,icon,title}) {

    const LIST_COLOR = ["mau-xanh","mau-xam","mau-do","mau-xanh-la"]
    // const LIST_SIZE = ['small', 'medium','large']
    
    const color_select = LIST_COLOR.includes(color) ? color : LIST_COLOR[0];

    // const size_select = LIST_SIZE.includes(size) ? size : LIST_SIZE[1];

    return (
        <Link to={`/${linkTo}`}>
            <div id={id} className={`card-container ${color_select} ${className}`}>
                <div className="card-icon"><i className={icon}></i></div>
                <div className="card-title">{title}</div>
            </div>
           
        </Link>
    )
}

export default Cards
