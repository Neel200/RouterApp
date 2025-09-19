import React from 'react'
import { Outlet } from 'react-router-dom'
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.png';
const about=()=>{
    return(
        <div>
            <div className='container wrapper'>
                <h2>Driving Innovation in Online Education for a <span className='statement'>Brighter Future</span></h2>
                <p>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                <br></br>
                <div className='img-contain'>
                    <img src={img1} alt="Pattern" 
                    width={300} height={300} loading="lazy"/>
                    <img src={img2} alt="Pattern" 
                    width={300} height={300} loading="lazy"/>           
                    <img src={img3} alt="Pattern" 
                    width={300} height={300} loading="lazy"/>                              
                </div>
                <h2>We are passionate about revolutionizing the way we learn. 
                Our innovative platform <span className='statement'>combines technology</span> <span className='stat'>expertise</span>, and community to create an <span className='stat'>unparalleled educational experience.</span></h2>
            </div>
            <div className="about-section">
                <div className="story">
                    <div className="story-left">
                        <h2 className="heading-gradient">Our Founding Story</h2>
                        <p>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                        <p>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
                    </div>
                    <div className="story-right">
                        <img src={img4} alt="Classroom" 
                        width={550} height={300} loading="lazy"/>
                    </div>
                </div>
                <div className="vision-mission">
                    <div className="vision">
                        <h2 className="vision-head">Our Vision</h2>
                        <p>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                    </div>
                    <div className="mission">
                        <h2 className="mission-head">Our Mission</h2>
                        <p>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default about;