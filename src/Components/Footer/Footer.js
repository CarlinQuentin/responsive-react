import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div>
            <div className='thisdiv'>The footer is here</div>
            <ul>
                <p>thing <a  href='#'>a link </a></p><br/>
                <p>thing <a  href='#'>a link </a></p><br/>
                <p>thing <a  href='#'>a link </a></p><br/>
                <p>thing <a  href='#'>a link </a></p><br/>
                <p>thing <a  href='#'>a link </a></p><br/>
                <p>thing <a  href='#'>a link </a></p><br/>
            </ul>
            </div>
        )
    }
}

export default Footer;