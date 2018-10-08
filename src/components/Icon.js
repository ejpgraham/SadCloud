import React, { Component } from 'react';
import snow from '../assets/snow.png';
import brokenClouds from '../assets/broken-clouds.png';
import clearSky from '../assets/clear-sky.png';
import fewClouds from '../assets/broken-clouds.png';
import mist from '../assets/mist.jpg';
import rain from '../assets/rain.png';
import scatteredClouds from '../assets/scattered-clouds.png';
import thunderstorm from '../assets/thunderstorm.png';
import '../stylesheets/Icon.css'

class Icon extends Component {
  render() {
    let icons = {
      'snow':snow,
      'broken clouds': brokenClouds,
      'clear sky': clearSky,
      'few clouds': fewClouds,
      'mist': mist,
      'rain': rain,
      'scattered clouds': scatteredClouds,
      'light rain': rain,
      'thunderstorm': thunderstorm
    }
    
    return(
      <img className='weather-icon' src={icons[this.props.image]} alt='weather icon'></img>
    )
  }
}

export default Icon;
