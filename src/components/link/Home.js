import React from 'react'
import Profile from '../Profile';
import avt from '../../img/avt/avt.png'
import FrameCard from '../FrameCard';
import ReactAudioPlayer from 'react-audio-player';

function Home() {
    const handleClick_thoi_nen = () =>{
      document.querySelector('#audio_wishes').play();
    }

    const handleClick = () => {
        const Y = document.querySelector('.head').clientHeight;
    
        window.scrollTo({top: Y,behavior: "smooth"})
      }
    
    return (
        <div className ="App">
          <ReactAudioPlayer
            src="audio/chill_2.mp3"
            autoPlay
            loop
          />
          <div className="head">
            <div className="bird"></div>
            <h1 className = "title">Happy Birthday</h1>
            <div className="get-started">
              <h3>Let's Go</h3>
              <button className='started-btn' onClick={handleClick}>STARTED</button>
            </div>
          </div>
          <div className = "character">
            <Profile 
              avt ={avt} 
              nickName = 'Long Phèo, Long Tùng, Long Đạo'
              name = 'Lê Tùng Long'
              birth = '15/9/2002'
              figure='Cao 1m65, ngoại hình cân đối, mặt nam tính nhưng dâm tặc. '
              personality = 'Yêu thể thao đặc biệt là thể thao trên giường, lười, thích trải nghiệm MỚI, LẠ, ĐỘC, và 99 tư thế khác nhau.'
              />
          </div>
          <div className="frames">
            <FrameCard />
          </div>
          <div className ="cake">
            <input className='cake-btn' type="button" value="THỔI NẾN" onClick={handleClick_thoi_nen}/>
          </div>
          <div className ='thoi-nen-block'>
            <ReactAudioPlayer id="audio_wishes"
              src="audio/wishes.mp3"
            />
          </div>
       </div>
    )
}

export default Home
