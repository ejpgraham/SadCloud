import React, { Component } from 'react';
import '../stylesheets/LocationForm.css';

class LocationForm extends Component {
  constructor(props) {
    super(props)
    this.fetchWeather = props.fetch;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchWeather(e.target.elements.zip.value, e.target.elements.country.value);
    }

  render() {
    return (
      <div className='location-form-container'>
        <form className='location-form' onSubmit={this.handleSubmit}>
          <input className='location-form-input' id='zip-input' type='text' name='zip' onChange={this.handleChange} placeholder='zipcode'/>
          <input className='location-form-input' type='text' name='country' onChange={this.handleChange} value='US' readOnly />
          <button className='location-form-submit'>find out</button>
        </form>
      </div>
    )
  }
}

export default LocationForm;
