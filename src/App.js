import React, { Component } from 'react';
import Welcome from './components/Welcome';
import LocationForm from './components/LocationForm';
import Forecast from './components/Forecast';
import './stylesheets/App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      dayCount: 5,
      weatherCollection: undefined,
      error: undefined
    };
     this.OPEN_WEATHER_API_KEY = '602387abe851cb0749fff26aab7ced88';
  }

  // Arrow functions allow to function in other scopes without explicit binding.
  fetchWeather = async (zipCode, country = 'us') => {
    if (!zipCode) {
      this.setState({error: 'Please enter a zip code.'});
      return;
    } else {
      this.setState({zip:zipCode, country: country});
    }
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},${country}&units=imperial&APPID=${this.OPEN_WEATHER_API_KEY}`)
    if (!apiCall.ok){
      this.setState({error: "We couldn't find that location."});
      return;
    } else {
      this.setState({error: undefined});
    }
    let weatherData = await apiCall.json();
    this.assignWeather(weatherData);
  }

  assignWeather = (data) => {
    let weatherCollection = [];
    let previousDate;
    for (let i = 0; weatherCollection.length < this.state.dayCount ; i++) {
      let datum = data.list[i];
      let currentDate = datum.dt_txt.split(" ")[0]
      // API returns weather info in 3 hour increments - necessary to
      // check and return only 24 hour increments.
      if (weatherCollection.length !== 0) {
        previousDate = weatherCollection[weatherCollection.length-1].date
      }
      if ( !previousDate || currentDate !== previousDate ){
        weatherCollection.push({
          city: data.city.name,
          country: data.city.country,
          temperature: datum.main.temp,
          description: datum.weather[0].description,
          date: currentDate,
          zip: this.state.zip,
          humidity: datum.main.humidity + "%"
        });
      }


    }
    this.setState({weatherCollection: weatherCollection});
  }

  render() {
    return (
      <div className='App-container'>
        <Welcome />
        <LocationForm fetch={this.fetchWeather}/>
        <p className='App-error'>{this.state.error}</p>
        <Forecast weatherCollection={this.state.weatherCollection} />
      </div>
    );
  }
}

export default App;
