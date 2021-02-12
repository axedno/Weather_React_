import React from 'react';

const Weather = ({weather, message}) => {
        return (
            <div className='infoWeath'>
                {!message &&
                   <div>
                        <p>Location: {weather.country}, {weather.city}</p>
                        <p>Temp: {weather.temp}</p>
                        <p>Pressure: {weather.pressure}</p>
                        <p>Sunset: {new Date (weather.sunset * 1000).toTimeString()}</p>
                    </div>
                  }
                  <p>{message}</p>
                </div>
    );
};

export default Weather;