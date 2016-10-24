import React, { Component } from 'react';

import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import openWeatherMap from 'openWeatherMap';
import ErrorModal from 'ErrorModal';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        isLoading: false,
        location: location,
        temp: temp
      });
    }).catch((error) => {
      this.setState({
        isLoading: false,
        errorMessage: error.message
      });
    });

  }

  render() {
    var {isLoading, errorMessage, temp, location} = this.state;

    var renderMessage = () => {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    };

    var renderError = () => {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={loc => this.handleSearch(loc)}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;
