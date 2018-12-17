import React, { Component } from 'react';
import './landing.css';
import { Route, Link, Switch } from 'react-router-dom';
import Home from '../Components/Home-Page/Home';
import About from '../Components/About/About';

class Landing extends Component{
    render(){
        return (
            <div>
                <div>
                    <div className='links'>
                        <p><Link to='/'>Home</Link></p>
                        <p><Link to='/About'>About</Link></p>
                    </div>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route exact path='/About'><About /></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
export default Landing;