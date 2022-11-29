import React, { useState } from 'react';
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs'
import { MdVideoCameraFront } from 'react-icons/md';
import {meal} from '../../constants'
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = React.useRef();
  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo)

    if(playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play()
    }
  }
  return (
  <div className='app__video'>
  <video src= {meal} 
        type='video/mp4'
        ref={vidRef}
        loop
        controls= {false}
        muted>
  </video>
  <div className="app__video-overlay flex-center">
    <div className="app__video-overlay_circle flex__center"
    onClick={handleVideo}
    >
      {playVideo 
      ? (<BsPauseFill color='#fff' font-size={30}/> )
        : <BsFillPlayFill color='#fff' font-scale={30}/>
      }
    </div>
  </div>
  </div>
  

)
}

export default Intro;
