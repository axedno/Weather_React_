import React from 'react';
import Form from "./FormContol";
import Weather from "./Weather";
import {api_key, base_url} from "../utils/constans";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Enter city name"
        }
    }

    getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(responce => responce.json())
            .then(data => {
                this.setState({
                    weatherInfo: {
                        city: data.name,
                        country: data.sys.country,
                        temp: data.main.temp,
                        pressure: data.main.temp,
                        sunset: data.sys.sunset
                    },
                        message: null
                })

            })
            .catch(e => {
                this.setState({
                    weatherInfo: null,
                    message: 'Enter correct city name'
                })
            });
    }

    render() {
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather weather={this.state.weatherInfo} message={this.state.message}/>
            </div>
        );
    };

}

export default Data;