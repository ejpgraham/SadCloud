import React, { Component } from 'react';
import '../stylesheets/Welcome.css';
import sadCloud from '../assets/sad-cloud.png';

class Welcome extends Component {

  render() {
    return(
      <div className='Welcome-container'>
        <h4 className='Welcome-title'>How's the weather, Sad Cloud?</h4>
        <img className='Welcome-image' alt="sad-cloud" src={sadCloud} />
      </div>
    )
  }
}

export default Welcome;
