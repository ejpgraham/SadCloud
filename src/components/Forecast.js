import React, { Component } from 'react';
import Icon from './Icon';
import daysOfWeek from '../modules/daysOfWeek';
import '../stylesheets/Forecast.css';

class Forecast extends Component {
  render() {
    let days;
    let locationName;
    if (this.props.weatherCollection) {
      let location = this.props.weatherCollection[0];
      locationName = `Weather for ${location.city}, ${location.zip} ${location.country} :(`;
      days = this.props.weatherCollection.map((day) =>
      <li className='Forecast-item' key={day.date}>
        <p className='Forecast-item-day'>{daysOfWeek(day.date).split(" ")[0]}</p>
        <p className='Forecast-item-date'>{daysOfWeek(day.date).split(" ")[1] + " " + day.date.split("-")[2]}</p>
        <p className='Forecast-item-temperature'>{Math.floor(day.temperature)}°F</p>
        <p className='Forecast-item-humidity'>humidity: {day.humidity}</p>
        <p className='Forecast-item-description'>{day.description}</p>
        <Icon image={day.description}/>
      </li>
      );
    }

    return (
      <div className='Forecast-container'>
        <p className='Forecast-location-name'>{locationName}</p>
        <ul className='Forecast-item-list'>
        {days}
        </ul>
      </div>
    )
  }
}

export default Forecast;
