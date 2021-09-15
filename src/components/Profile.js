import React from 'react'
import './Profile.css'

function Profile({avt,name,nickName,birth,figure,personality}) {
    return (
        <div className = 'profile-container'>
            <div className = 'avt'>
                <img className='avt-img' src={avt} alt ="avt"/>
            </div>
            <div className = 'information'>
                <h1 className='name'>{name}</h1>
                <div className = 'detail'>
                    <h4 className= 'det nick-name'><strong>Nick name: </strong>{nickName}</h4> 
                    <h4 className='det birthday'><strong>Ngày sinh: </strong>{birth}</h4>
                    <h4 className='det figure'><strong>Ngoại hình: </strong>{figure}</h4>
                    <h4 className='det personality'><strong>Tính cách: </strong>{personality}</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile
