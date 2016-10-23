import React, { Component } from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  handleSearch(location) {
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }).catch((errorMessage) => {
      this.setState({isLoading: false});
      alert(errorMessage);
    });

  }

  render() {
    var {isLoading, temp, location} = this.state;

    var renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={loc => this.handleSearch(loc)}/>
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
