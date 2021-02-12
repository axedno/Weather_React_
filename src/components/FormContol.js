import React, {Component} from 'react';

class FormContol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }

    }
handleChange = event => {
        this.setState({city: event.target.value});
}
handleClick = () => {
        this.props.getWeather(this.state.city.trim());
        this.setState({city: ''});
}

    render() {
        return (
            <div>
                <input
                       value={this.state.city}
                       onChange={this.handleChange}
                       type="text"
                       name='city'
                       placeholder='City'/>
                <button onClick={this.handleClick}>Get weather</button>
            </div>
        );
    }
}

export default FormContol;