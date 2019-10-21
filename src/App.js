import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = process.env.REACT_APP_API;

class App extends React.Component {

  state = {
    city: '',
    country: '',
    temperature: '',
    tempMin: '',
    tempMax: '',
    humidity: '',
    decription: '',
    icon: '',
    error: ''
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ''
      })
    } else {
      this.setState({
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        icon: '',
        error: 'Please enter the value.'
      })
    }
  }

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;