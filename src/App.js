import React, {Component} from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";


const API_KEY = "a05e956ecc690d4c744ec47b128923e7";

//  https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44

class App extends Component {

  state = {
    tempreature: "",
    city: "",
    countery: "",
    humidity: "",
    description: "",
    error: ""
  }

  getWeather = async (e)=> {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const countery = e.target.elements.countery.value;
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${countery}&appid=${API_KEY}`);
    const data = await api.json();
    console.log(data);
    if (city && countery) {
      this.setState({
        tempreature: Math.round(data.main.temp - 273.15),
        city: data.name,
        countery: data.sys.country,
        humidity: data.main.humidity,
        describe: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        tempreature: "",
        city: "",
        countery: "",
        humidity: "",
        describe: "",
        error: "Please Enter Data"
      })
    }
  }

  render() {  
    return (

        <div className="wrapper">
          <div className="form-container">
          <h2 className="mostafa">Get Weather</h2>
            <Form getWeather={this.getWeather} />
            <Weather 
              tempreature ={this.state.tempreature}
              city = {this.state.city}
              countery = {this.state.countery}
              humidity = {this.state.humidity}
              describe = {this.state.describe}
              error = {this.state.error}
            />
          </div>
        </div>
      
      );
    }
  }

export default App;
