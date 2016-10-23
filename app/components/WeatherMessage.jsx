import React, { Component } from 'react';

const WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's {temp} in {location}.</h3>
  );
}

export default WeatherMessage;
