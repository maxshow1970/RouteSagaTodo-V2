import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../../actions";

export class WeatherDisplay extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchWeather();
  }

  render() {
    if (!this.props.todoWeather) return <div>Loading</div>;

    function clearUser() {
      window.localStorage.removeItem("token");
    }

    const {
      temp,
      temp_max,
      temp_min,
      speed,
      name,
      picture,
      weatherFetchError
    } = this.props.todoWeather;

    if (weatherFetchError) return <div>weatherFetchError</div>;

    const iconUrl = `http://openweathermap.org/img/w/${picture}.png`;

    return (
      <div>
        <span>
          <button
            className="clear-completed"
            onClick={() => clearUser()}
            type="button"
          >
            Delete user
          </button>{" "}
        </span>
        <h1>
          {name}
          {picture && <img src={iconUrl} />}
        </h1>
        <p>Current: {temp}°</p>
        <p>High: {temp_max}°</p>
        <p>Low: {temp_min}°</p>
        <p>Wind Speed: {speed} mi/hr</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        fetchWeather
      },
      dispatch
    )
  };
};

const mapStateToProps = stateWeather => {
  return {
    todoWeather: stateWeather.todoWeather
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
