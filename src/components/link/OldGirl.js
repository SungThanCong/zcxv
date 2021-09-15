import React,{useState} from 'react'
import './OldGirl.css' 

function OldGirl() {
   

    const handleClick = (e) =>{

        const lover_message =  document.querySelector('#lover-message');
        e.target.style.display = 'none';

        document.querySelector('#lover-video').play();
        document.querySelector('.lover-container').classList.add('tim');
        lover_message.style.opacity ='1';
        lover_message.style.fontSize ='30px';
        setTimeout(() => {
           document.querySelector('#lover-message-2').textContent = "ÔI BẠN ƠI"
        }, 10000);
    }

    return (
        <div className="lover-container">
            <video id ="lover-video" src="../../videos/oi_ban_oi.mp4" loop />
            <button id='lover-button' onClick={handleClick}>CLICK VÀO ĐÂY ĐỂ XEM</button>
            <h2 id='lover-message'>Bạn cũng có người yêu à!</h2>
            <h1 id='lover-message-2'></h1>
        </div>
    )
}

export default OldGirl
