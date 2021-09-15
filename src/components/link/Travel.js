import React from 'react'
import Destination from '../link-components/Destination'
import './Travel.css'
import ReactAudioPlayer from 'react-audio-player';

function Travel() {
    return (
        <div className="travel-container">
            
            <ReactAudioPlayer
                src="audio/lofi.mp3"
                autoPlay
                loop
            />
            <div className="travel-place travel-1">
                <h1>NÚI THÀNH - QUẢNG NAM</h1>
                <Destination hinh_anh='../../img/destination/des-1.jpg'/>
                <Destination hinh_anh='../../img/destination/des-1.2.jpg'/>
                <Destination hinh_anh='../../img/destination/des-1.3.jpg'/>
                <Destination hinh_anh='../../img/destination/des-1.4.jpg'/>
                <Destination hinh_anh='../../img/destination/des-1.5.jpg'/>
            </div>
            <div className="travel-place travel-2">
                <h1 style={({width:"100%",textAlign:"center"})}>THPT NÚI THÀNH</h1>
                <Destination hinh_anh='../../img/destination/des-2.jpg'/>
                <Destination hinh_anh='../../img/destination/des-2.3.jpg'/>
                <Destination hinh_anh='../../img/destination/des-2.2.jpg'/>
            </div>
            <div className="travel-place travel-3">
                <h1 style={({width:"100%",textAlign:"center"})}>BIỂN RẠNG - NÚI THÀNH</h1>
                <Destination hinh_anh='../../img/destination/des-3.jpg'/>
                <Destination hinh_anh='../../img/destination/des-3.2.jpg'/>
                <Destination hinh_anh='../../img/destination/des-19.jpg'/>
            </div>
            <div className="travel-place travel-4">
                
                <Destination hinh_anh='../../img/destination/des-4.jpg'/>
                <h1>CÔNG VIÊN TT.NÚI THÀNH</h1>
            </div>
            <div className="travel-place travel-5">
                <h1>CẦN GIỜ - SÀI GÒN</h1>
                <Destination hinh_anh='../../img/destination/des-5.jpg'/>
            </div>
            <div className="travel-place travel-6">
                <h1 style={({width:"100%",textAlign:"center"})}>*MỘT GÓC CHILL SÀI GÒN</h1>
                <Destination hinh_anh='../../img/destination/des-6.jpg'/>
                <Destination hinh_anh='../../img/destination/des-7.jpg'/>
                <Destination hinh_anh='../../img/destination/des-8.jpg'/>
                
            </div>
            <div className="travel-place travel-9">
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>*MỘT GÓC CHILL SÀI GÒN - NẮP HẦM THỦ THIÊM</h1>
                <Destination hinh_anh='../../img/destination/des-9.jpg'/>
                <Destination hinh_anh='../../img/destination/des-9.3.jpg'/>
                <Destination hinh_anh='../../img/destination/des-9.2.jpg'/>
            </div>
            <div className="travel-place travel-10">
                <Destination hinh_anh='../../img/destination/des-10.jpg'/>
                <Destination hinh_anh='../../img/destination/des-10.2.jpg'/>
                <Destination hinh_anh='../../img/destination/des-10.3.jpg'/>
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>*MỘT GÓC CHILL SÀI GÒN - KHÓI ROOFTOP</h1>
            </div>
            <div className="travel-place travel-11">
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>*MỘT GÓC CHILL SÀI GÒN - PUB - THỦ ĐỨC</h1>
                <Destination hinh_anh='../../img/destination/des-11.jpg'/>
                <Destination hinh_anh='../../img/destination/des-11.2.jpg'/>
                <Destination hinh_anh='../../img/destination/des-11.jpg'/>
            </div>
            <div className="travel-place travel-12">
                <h1 style={({width:"100%",textAlign:"center"})}>VINHOMES CENTRAL PARK</h1>
                <Destination hinh_anh='../../img/destination/des-12.jpg'/>
                <Destination hinh_anh='../../img/destination/des-12.3.jpg'/>
                <Destination hinh_anh='../../img/destination/des-12.2.jpg'/>
                
            </div>
            <div className="travel-place travel-13">
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>BỜ KÈ - BÌNH THẠNH</h1>
                <Destination hinh_anh='../../img/destination/des-13.jpg'/>
            </div>

            <div className="travel-place travel-14">
                <Destination hinh_anh='../../img/destination/des-14.jpg'/>
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>ĐH TÀI CHÍNH - MARKETING</h1>
                <Destination hinh_anh='../../img/destination/des-14.2.jpg'/>
            </div>
            <div className="travel-place travel-15">
                
                <Destination hinh_anh='../../img/destination/des-15.jpg'/>
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>*CHILL TẠI TRỌ BÌNH THẠNH</h1>
            </div>
            <div className="travel-place travel-16">
                 <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>*NHẠC HỘI "BEYOND TO FUTURE"</h1>
                <Destination hinh_anh='../../img/destination/des-16.jpg'/>
            </div>
            <div className="travel-place travel-17">
                <Destination hinh_anh='../../img/destination/des-17.jpg'/>
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>*CHILL Ở ĐÂU KHÔNG BIẾT"</h1>
            </div>
            <div className="travel-place travel-18">
                <h1 style={({maxWidth:"500px",wordWrap:"wrap"})}>GIGAMALL"</h1>
                <Destination hinh_anh='../../img/destination/des-18.jpg'/>
            </div>
               

            <div className="travel-place travel-19">
                <h1 style={({width:"100%",textAlign:"center"})}>*CHỊU</h1>
                <Destination hinh_anh='../../img/destination/des-20.jpg'/>
                
            </div>
        </div>
    )
}

export default Travel
