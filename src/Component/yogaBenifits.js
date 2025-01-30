import React from 'react'

import '../Component/style/yogabenifits.css'
import iconbook from '../Component/assets/arrow.png'
import sun from '../Component/assets/sun.png'


function YogaBenifits() {
  return (
    <div className='benifits-main col-md-12'>
      <div className='benifitsmain-top-main col-md-6'>
      <div className='benifits-main-top'>
        <p>Benefits Of</p>
        <h1>Yoga & Meditation</h1>
        <p style={{width:'60%',fontSize:"24px",marginTop:'50px'}}>Sem nulla pharetra diam sit. Ullamcorper sit amet risus nullam<br/> eget felis eget nunc lobortis. Quam elementum pulvinar etiam<br/> non quam lacus suspendisse faucibus interdum.</p>
       
      </div>
    
      <div className='benifits-inner-main'>
        <div>
        <p>
            <img src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQLrBn-W6Ylw5E_iMCNiK7REVckcbUmzZWQx9nr8asUrx7oDZEe' />
            Relieving Stress</p>
        <p> 
            <img style={{borderRadius:'50%',height:"100px",marginRight:"20px"}}src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxLiceQ77QBXI6A45-Wmj29JEYY6nuT7u4WJ36065OJSBnq6Nc' />
             Peaceful Mind</p>
        </div>
        <div>
        <p>
            <img style={{borderRadius:'50%',height:"100px",marginRight:"10px"}} src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQylSjaQS7WEKGvs8czOURMQR_o6cWFe7To30TcvfsJS8oyMIr4'/>
            Reduce Anxiety</p>
        <p>
            <img style={{borderRadius:'50%',height:"100px"}} src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSl5kRH-_2zNqdSLJ5JPMq9F1h7AKMqhZdbpQSZFQFUeJKVc4v4'/>
            Mental Health</p>
        </div>
      </div>
      <div className='book-btn-main' style={{marginLeft:'10px',}}>
        <div className='book-btn'>
          <h4>Book Appointment</h4> 
        <img className='book-btn-img' src={iconbook}/>
        </div>
      

        
      </div>
      </div>
      
      <div className='benifits-yoga-image col-md-6'>
      <div className='sun-image'>
                    <img src={sun} alt='ajdk'/>
                </div>
        <img src='https://dtmantra.wpengine.com/wp-content/uploads/2024/03/about-us-01.jpg'/>
        <span className="top-yoga-icon-benifits" >
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
     
    </div>
  )
}

export default YogaBenifits
