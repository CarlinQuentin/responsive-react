import React, { Component } from 'react';
import './About.css';
import image from '../images/img1.jpeg'
import image2 from '../images/img2.jpeg'
import image3 from '../images/img3.jpeg'

class About extends Component{
    render(){
        return(
            <div>
                <div className='center'>Some pictures</div>
                <img src={image} />
                <img src={image2} />
                <img src={image3} />
            </div>
        )
    }
}

export default About;