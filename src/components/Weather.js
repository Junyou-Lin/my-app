import React, { useState, useEffect } from "react";
import axios from "axios";

const API_key = "c8e76c9b4fa36112b0d8aff693cee1fc";
const city = "Sydney";
const api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_key}`;
function Weather() {
  const [sunrise, setSunrise] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchWeather = async () => {
      const res = await axios.get(api);
      console.log(res);
      setSunrise(res.data.city.sunrise);
      setLoading(false);
    };
    fetchWeather();
  }, []);

  if (loading) {
    return <div></div>;
  }
  return (
    <>
      <h4>Weather {new Date(sunrise).toLocaleTimeString()}</h4>
    </>
  );
}

export default Weather;

// class Weather extends React.Component {
//   state = {
//     sunrise: "",
//   };

//   async componentDidMount() {
//     const res = await axios.get(api);
//     console.log(res);
//     this.setState({
//       sunrise: res.data.city.sunrise,
//     });
//     console.log(this.state.sunrise);
//   }
//   render() {
//     return (
//       <div>Weather: {new Date(this.state.sunrise).toLocaleTimeString()}</div>
//     );
//   }
// }

// export default Weather;
