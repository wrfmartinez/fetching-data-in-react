import { useState } from 'react';
import './App.css';
import weatherService from './services/weatherService';

const App = () => {
  const [ weather, setWeather ] = useState({});
  const [ city, setCity ] = useState('')

  const handleInputChange = (event) => {
    setCity(event.target.value);
  }

  const fetchData = async () => {
    const data = await weatherService.show(city);
    setWeather({
      location: data.location.name,
      temperature: data.current.temp_f + '°',
      condition: data.current.condition.text
    });
  }

  return (
    <main style={{display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
      <h1>Weather API</h1>
      <input type="text" onChange={handleInputChange} style={{padding: '7px 20px', textAlign: 'center'}}/>
      <button onClick={fetchData}>Fetch Weather Data</button>
      <section>
        {city ?
        <div>
          <h2>Weather Details</h2>
          <p>Location: {weather.location ? weather.location : '...'}</p>
          <p>Temperature: {weather.temperature ? weather.temperature : '...'}</p>
          <p>Condition: {weather.condition ? weather.condition : '...'}</p> 
        </div>
        : 
        <p>No data to show</p>}
      </section>
    </main>
  );
}

export default App