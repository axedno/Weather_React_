import React from 'react';

const Form = (props) => {
    const handleGetCitySubmit = (e) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        props.getWeather(city);
    };
    return (
        <form onSubmit={handleGetCitySubmit}>
            <input type="text" name='city' placeholder='City'/>
            <button type='submit'>Get weather</button>
        </form>
    );
};

export default Form;