import React from 'react'
import v2 from '../video/v2.mp4'
import '../video/video.css'

const Video =() =>{
  return (
    <div className='v'>
        <video src={v2} autoPlay loop muted id="video-id"alt="" srcSet="" />
        </div>
  )
}

export default Video