const API_KEY = '41b6e7d8fc6c407fbcd145555241505';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
  try {
    const queryString = `&q=${city}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log('Data: ', data);
    return data;
  } catch(err) {
    console.log('API failed');
  }
}

export default { show };