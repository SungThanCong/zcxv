import React from 'react'
import Cards from './Cards'
import './FrameCard.css'

function FrameCard() {
    return (
        <div className="frame-container">
            <div className= 'frame-detail'>
                <Cards id="t1" linkTo ="hanh-trinh" color="mau-xanh" size="medium" icon="fas fa-route" title="Hành trình" />
            </div>
            <div className= 'frame-detail'>
                <Cards id="t2" linkTo ="nguoi-yeu-cu" color="mau-xam" size="medium" icon="fas fa-heart-broken" title="Người yêu cũ" />
            </div>
            <div className= 'frame-detail'>
                <Cards id="t3" linkTo ="thanh-tuu" color="mau-do" size="medium" icon="fas fa-medal" title="Thành tựu" />
            </div>
            <div className= 'frame-detail'>
                <Cards id="t4" linkTo ="uoc-nguyen" color="mau-xanh-la" size="medium" icon="fas fa-star-half-alt" title="Ước nguyện" />
            </div>
        </div>
        
    )
}

export default FrameCard
