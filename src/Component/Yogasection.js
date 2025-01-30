// Yogasection.js
import React from "react";
import "./style/yogasec.css"; // Import CSS for styling
import MorningYoga from "../../src/Component/assets/yogavideo.mp4";
import Navbar from "./Navbar";

import iconbook from '../Component/assets/arrow.png'


function Yogasection() {
    return (
        <>
        <div className="yoga-section">
            <video autoPlay loop muted className="background-video">
                <source src={MorningYoga} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-overlay"></div>

        <Navbar />
        
            <div className="content">
                <div className="col-md-6">
                    <div className="">
                        <span className="top-yoga-icon">
                            <div className="top-yoga-icon-main">
                                <div>
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                                            <path d="M28.3,15L1.7,30l0-30L28.3,15z"></path>
                                        </svg>
                                    </i>
                                </div>
                            </div>
                        </span>
                    </div>
                    <div className="first-yoga">
                        <img
                            src="https://dtmantra.wpengine.com/wp-content/uploads/2024/04/video-img-2.png"
                            alt="Yoga" />
                        <p style={{marginLeft:'-50px'}}>
                            Quisque sagittis purus sit amet volutpat consequat mauris. Gravida
                            in fermentum et.nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia.
                        </p>
                        <h1 style={{marginLeft:'-50px'}}>Yoga helps calm <br/> the mind</h1>
                    
                    </div>
            <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
            <div className='book-btn-main'>
        <div className='book-btn'>
          <h4>Know more</h4> 
        <img className='book-btn-img' src={iconbook}/>
        </div>

         
      </div>
      <div>
            <img width='200px' src="https://dtmantra.wpengine.com/wp-content/uploads/2024/04/text-img-2-1.png"/>
        </div>

        <div>
            <p></p>
            <p style={{width:"300px"}}>332+<br/>Happy Customers</p>
        </div>
            </div>
                </div>

                <div className="section-main-container">
                    <div className="section-top-img1">
                        <img src="https://dtmantra.wpengine.com/wp-content/uploads/2024/04/home-1-img-3.jpg" />
                        <div className="section-top-img2">
                            <img
                                className="img-inner"
                                src="https://dtmantra.wpengine.com/wp-content/uploads/2024/04/home-1-img-2.jpg" />
                        </div>
                    </div>
                    <div className="top-center-image">
                        <img src="https://dtmantra.wpengine.com/wp-content/uploads/2024/05/home-1-rotate-1.png" />
                        <div className="top-center-image-main">
                            <img src="https://dtmantra.wpengine.com/wp-content/uploads/2024/05/rotate-2.png" />
                        </div>
                    </div>

                    <div className="section-top-img3">
                        <img src="https://dtmantra.wpengine.com/wp-content/uploads/2024/04/home-1-img-1.jpg" />
                    </div>
                </div>
            </div>
        </div></>
    );
}

export default Yogasection;
