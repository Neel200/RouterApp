import React from 'react'
import { Outlet } from 'react-router-dom'
import video from "../assets/video.mp4";
<assets />
const Home=()=>{
    return(
        <div className='container'>
            <h2>Empower Your Future With <span className='statement'>Coding Skills</span></h2>
            <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
            <br></br>
            <video src={video} autoPlay loop muted controls className="video-player">
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
export default Home